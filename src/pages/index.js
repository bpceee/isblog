import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import PostList from "../components/PostList"
import SEO from "../components/SEO"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.github.repository.issues.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `javascript`]} // TODO: use tags as keywords
        />
        <PostList
          posts={posts}
        />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  github {
    repository(owner:"bpceee", name:"bpceee.github.io") {
      issues(last:100, labels:"post", orderBy: {field: CREATED_AT, direction: DESC}) {
        edges {
          node {
            title
            number
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
  }
}
`

