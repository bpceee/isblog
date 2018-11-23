
import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import DumbPost from './DumbPost';

const Post = ({ match }) => (
  <Query
    query={gql`
      query {
        repository(owner:"${process.env.REACT_APP_USERNAME}", name:"${process.env.REACT_APP_REPO}") {
          issue(number:${match.params.id}) {
            number
            title
            bodyHTML
            createdAt
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <span>Loading...</span>;
      if (error) return <span>Not Found :(</span>;
      return <DumbPost post={data.repository.issue}/>
    }}
  </Query>
)

export default Post;