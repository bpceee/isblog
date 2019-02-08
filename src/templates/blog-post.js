import React from "react"
import { graphql } from "gatsby"
import 'github-markdown-css/github-markdown.css'

import styles from './blog-post.module.css';
import Layout from "../components/Layout"
import PostDate from "../components/PostDate"
import PostTags from "../components/PostTags";
import SEO from "../components/SEO"

class BlogPostTemplate extends React.Component {
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
