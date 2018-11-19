
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
        repository(owner:"${process.env.REACT_APP_USERNAME}", name:"${process.env.REACT_APP_REPONAME}") {
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
        <React.Fragment>
          <section>
            <h1>{data.repository.issue.title}</h1>  
          </section>
          <section >
            <div dangerouslySetInnerHTML={createMarkup(data.repository.issue.bodyHTML)}></div> 
          </section>
        </React.Fragment>
      );
    }}
  </Query>
)

export default Post;