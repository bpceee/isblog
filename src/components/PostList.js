
import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

import styles from "./PostList.module.css";

const PostDate = ({dateString, ...elemProps}) => {
  const splits = new Date(dateString).toString().substring(4, 15).split(' ');
  splits.unshift(splits.splice(1, 1))
  const transformedDataString = splits.join(' ');
  return <span {...elemProps}>{transformedDataString}</span>
}

const PostList = () => (
  // TODO: add pagination
  <Query
    query={gql`
      query {
        repository(owner:"${process.env.REACT_APP_USERNAME}", name:"${process.env.REACT_APP_REPONAME}") {
          issues(last:100, orderBy: {field: CREATED_AT, direction: DESC}) {
            edges {
              node {
                title
                number
                createdAt
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

      return (
        <ul className={styles.list}>
          {data.repository.issues.edges.map(({node})=>(
            <li key={node.number}>
              <PostDate dateString={node.createdAt} className={styles.date}></PostDate> 
              <Link to={`/posts/${node.number}`}>{node.title}</Link>
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default PostList;