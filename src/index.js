import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from "react-apollo";
    

import './index.css';
import App from './components/App';

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: "Bearer b15309623a40d4118d6d29c9dbbff8d9d900018f"
  }
});

const BASENAME = process.env.NODE_ENV === 'production'? `/${process.env.REACT_APP_REPONAME}`: '/';

ReactDOM.render(
  <BrowserRouter basename={BASENAME}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>, 
  document.getElementById('root')
);
