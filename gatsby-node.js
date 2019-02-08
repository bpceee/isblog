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
  const postListByTag = path.resolve(`./src/templates/postListByTag.js`)
  const results = await graphql(POSTS_QL);
  const posts = results.data.github.repository.issues.edges;
  const tags = new Set();

  posts.forEach(({node: post}) => {
    if (post.labels.edges[0].node.name === 'about') {
      // create about page
      createPage({
        path: `/about`,
        component: blogPost,
        context: {
          slug: post.number,
        },
      }); 
      return;
    }
    post.labels.edges.forEach(({node: tag}) => {
      tags.add(tag.name);
    });
    // create post pages
    createPage({
      path: `/posts/${post.number}`,
      component: blogPost,
      context: {
        slug: post.number,
      },
    });
  });

  tags.delete('post');
  for (let tag of tags) {
    // create taged post list page
    createPage({
      path: `/posts/tags/${tag}`,
      component: postListByTag,
      context: {
        tag,
      },
    });    
  }
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
