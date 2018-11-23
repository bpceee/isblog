import React from 'react';
import 'github-markdown-css/github-markdown.css'
import { createMarkup } from '../utils';

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
  }  

  componentWillUnmount() {
    const utterances = document.querySelector(".utterances");
    utterances && utterances.remove();
  }

  render() {
    const {post} = this.props;
    return (
      <React.Fragment>
        <section>
          <h1>{post.title}</h1>  
        </section>
        <article className="markdown-body">
          <div dangerouslySetInnerHTML={createMarkup(post.bodyHTML)}></div> 
        </article>
      </React.Fragment>
    );
  }
}

export default DumbPost;