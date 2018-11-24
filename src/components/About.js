import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import DumbPost from './DumbPost';

const About = () => (
  <Query
    query={gql`
      query {
        repository(owner:"${process.env.REACT_APP_USERNAME}", name:"${process.env.REACT_APP_REPO}") {
          issues(last:1, labels:"about") {
            edges {
              node {
                title
                number
                bodyHTML
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

      const post = data.repository.issues.edges[0].node || {bodyHTML: `<div>Nothing here!<div>`};
      return <DumbPost post={post}/>
    }}
  </Query>
)

export default About;