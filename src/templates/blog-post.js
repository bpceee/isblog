import React from "react"
import { graphql } from "gatsby"
import 'github-markdown-css/github-markdown.css'

import styles from './blog-post.module.css';
import Layout from "../components/Layout"
import PostDate from "../components/PostDate"
import PostTags from "../components/PostTags";
import SEO from "../components/SEO"

class BlogPostTemplate extends React.Component {

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
    const issueNumber = this.props.data.github.repository.issue.number;
    script.src = "https://utteranc.es/client.js";
    script.setAttribute('repo', `bpceee/bpceee.github.io`);
    script.setAttribute('issue-number', issueNumber);
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
    const post = this.props.data.github.repository.issue;
    const isAboutPage = post.labels.edges[0].node.name === 'about';

    return (
      <Layout location={this.props.location} title={post.title}>
        <SEO title={post.title} />
        <article className={styles.blogPost}>
          {!isAboutPage && // don't show header for "About" page
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
          <div className="markdown-body" ref={this.setBodyRef} dangerouslySetInnerHTML={{ __html: post.bodyHTML }}></div> 
        </article> 
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: Int!) {
    github {
      repository(owner:"bpceee", name:"bpceee.github.io") {
        issue(number: $slug) {
          number
          title
          bodyHTML
          createdAt
          labels(first: 10) {
            edges {
              node { 
                name
              }
            }
          }
        }
      }
    }
  }
`

function getLastElement(ele) {
  if (!ele || !ele.lastElementChild) return ele;
  return getLastElement(ele.lastElementChild);
}