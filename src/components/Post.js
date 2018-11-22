
import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import 'github-markdown-css/github-markdown.css'

class DumbPost extends React.Component {

  componentDidMount () {
    const {post} = this.props;
    document.title = post.title;

    const main = document.querySelector("main");
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute('repo', `${process.env.REACT_APP_USERNAME}/${process.env.REACT_APP_REPO}`);
    script.setAttribute('issue-number', post.number);
    script.async = true;
    main.appendChild(script);
  }  

  componentWillUnmount() {
    const utterances = document.querySelector(".utterances");
    utterances && utterances.remove();
  }

  render() {
    const {post} = this.props;
    return (
      <React.Fragment>
        <section>
          <h1>{post.title}</h1>  
        </section>
        <article className="markdown-body">
          <div dangerouslySetInnerHTML={createMarkup(post.bodyHTML)}></div> 
        </article>
      </React.Fragment>
    );
  }
}

function createMarkup(markup) {
  return {__html: markup};
}

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