
import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

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
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <React.Fragment>
          <h2>My Blog</h2>
          <ul>
            {data.repository.issues.edges.map(({node})=>(
              <li key={node.number}>
                {new Date(node.createdAt).toString().substring(4, 15)} <Link to={`/posts/${node.number}`}> {`${node.title}`}</Link>
              </li>
            ))}
          </ul>
        </React.Fragment>
      );
    }}
  </Query>
);

export default PostList;