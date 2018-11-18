
import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

function createMarkup(markup) {
  return {__html: markup};
}

const Post = ({ match }) => (
  <Query
    query={gql`
      query {
        repository(owner:"bpceee", name:"blog") {
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
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Not Found :(</p>;

      return (
        <div>
          <h2>{data.repository.issue.title}</h2>  
          <div dangerouslySetInnerHTML={createMarkup(data.repository.issue.bodyHTML)}></div> 
        </div>
      );
    }}
  </Query>
)

export default Post;