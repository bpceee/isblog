import React from 'react';
import 'github-markdown-css/github-markdown.css'
import { createMarkup } from '../utils';
import styles from './DumbPost.module.css';
import PostTags from "./PostTags";
import PostDate from "./PostDate";

class DumbPost extends React.Component {

  componentDidMount () {
    const {post} = this.props;
    if (!post.number) {
      return;
    }
    document.title = post.title;
    const main = document.querySelector("main");
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute('repo', `${process.env.REACT_APP_USERNAME}/${process.env.REACT_APP_REPO}`);
    script.setAttribute('issue-number', post.number);
    script.async = true;
    main.appendChild(script);
    this.utteranceScript = script;
  }  

  componentWillUnmount() {
    this.utteranceScript.remove();
    const utterances = document.querySelector(".utterances");
    utterances && utterances.remove();
  }

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
        <div className="markdown-body" dangerouslySetInnerHTML={createMarkup(post.bodyHTML)}></div> 
      </article>
    );
  }
}

export default DumbPost;