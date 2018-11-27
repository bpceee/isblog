import React from 'react';
import 'github-markdown-css/github-markdown.css'
import { createMarkup, getLastElement } from '../utils';
import styles from './DumbPost.module.css';
import PostTags from "./PostTags";
import PostDate from "./PostDate";


class DumbPost extends React.Component {

  componentDidMount () {
    document.title = this.props.post.title;
  }  

  componentWillUnmount() {
    if (this.utteranceScript) {
      this.utteranceScript.remove();
      const utterances = document.querySelector(".utterances");
      utterances && utterances.remove();
    }
  }

  loadUtterance() {
    const main = document.querySelector("main");
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute('repo', `${process.env.REACT_APP_USERNAME}/${process.env.REACT_APP_REPO}`);
    script.setAttribute('issue-number', this.props.post.number);
    script.async = true;
    main.appendChild(script);
    this.utteranceScript = script;
  };

  setBodyRef = ele => {
    if (!ele) {
      return;
    }
    if (window["IntersectionObserver"]) {
      const lastEle = getLastElement(ele);
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio <= 0) {
          return;
        }
        this.loadUtterance();
        observer.unobserve(lastEle);
      }, {threshold: 1});
      observer.observe(lastEle);
    } else {
      this.loadUtterance();
    }
  };

  render() {
    const {post} = this.props;
    return (
      <article>
        {post.createdAt && // don't show header for "About" page
          <header>
            <h1>{post.title}</h1>  
             <p className={styles.meta}>
              Published <PostDate dateString={post.createdAt}/>
              {post.labels && post.labels.edges.length > 1 &&
                <React.Fragment>
                  {" "}· tagged with
                  <PostTags tags={post.labels.edges} />
                </React.Fragment>
              }
            </p>
          </header>
        }
        <div className="markdown-body" ref={this.setBodyRef} dangerouslySetInnerHTML={createMarkup(post.bodyHTML)}></div> 
      </article>
    );
  }
}

export default DumbPost;