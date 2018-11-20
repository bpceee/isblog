
import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import 'github-markdown-css/github-markdown.css'

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
      if (loading) return <span>Loading...</span>;
      if (error) return <span>Not Found :(</span>;

      return (
        <React.Fragment>
          <section>
            <h1>{data.repository.issue.title}</h1>  
          </section>
          <article className="markdown-body">
            <div dangerouslySetInnerHTML={createMarkup(data.repository.issue.bodyHTML)}></div> 
          </article>
        </React.Fragment>
      );
    }}
  </Query>
)

export default Post;