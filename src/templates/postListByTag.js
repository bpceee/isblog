import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import PostList from "../components/PostList"
import SEO from "../components/SEO"

class PostListByTag extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.github.repository.issues.edges;
    const { tag } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={`Blog posts tagged ${tag}`}
          keywords={[tag]} // TODO: use tags as keywords
        />
        <PostList
          posts={posts}
        />
      </Layout>
    )
  }
}

export default PostListByTag

export const pageQuery = graphql`
query BlogPostsByTag($tag: [String!]) {
  site {
    siteMetadata {
      title
    }
  }
  github {
    repository(owner:"bpceee", name:"bpceee.github.io") {
      issues(last:100, labels: $tag, orderBy: {field: CREATED_AT, direction: DESC}) {
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

