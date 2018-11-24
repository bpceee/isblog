
import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

import styles from "./PostList.module.css";
import PostTags from "./PostTags";
import PostDate from "./PostDate";

class PostList extends React.Component {
  
  componentDidMount () {
    document.title = process.env.REACT_APP_TITLE;
  }

  render () {
    // TODO: add pagination
    const tag = this.props.match.params.tag || "post";
    return <Query
      query={gql`
        query {
          repository(owner:"${process.env.REACT_APP_USERNAME}", name:"${process.env.REACT_APP_REPO}") {
            issues(last:100, labels:"${tag}", orderBy: {field: CREATED_AT, direction: DESC}) {
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
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <span>Loading...</span>;
        if (error) return <span>Error :(</span>;

        const {tag} = this.props.match.params;
        
        return (
          <React.Fragment>
            { tag &&
              <h1 className={styles.header}>Blog posts tagged "{tag}"</h1>
            }
            <ul className={styles.list}>
              {data.repository.issues.edges.map(({node: post}) => (
                <li key={post.number}>
                  <PostDate dateString={post.createdAt} className={styles.date}></PostDate>
                  <Link className={styles.postTitleLink} to={`/posts/${post.number}`}>{post.title}</Link>
                  <PostTags tags={post.labels.edges} />
                </li>
              ))}
            </ul>
          </React.Fragment>
        );
      }}
    </Query>;
  }
}

export default PostList;