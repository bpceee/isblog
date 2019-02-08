const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const POSTS_QL = `{
  github {
    repository(owner:"bpceee", name:"bpceee.github.io") {
      issues(last:100, labels:["post", "about"], orderBy: {field: CREATED_AT, direction: DESC}) {
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
}`;

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const results = await graphql(POSTS_QL);
  const posts = results.data.github.repository.issues.edges;

  posts.forEach(({node: post}) => {
    if (post.labels.edges[0].node.name === 'about') {
      createPage({
        path: `/about`,
        component: blogPost,
        context: {
          slug: post.number,
        },
      }); 
      return;
    }
    createPage({
      path: `/posts/${post.number}`,
      component: blogPost,
      context: {
        slug: post.number,
      },
    });
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
