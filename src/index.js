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

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>, 
  document.getElementById('root')
);
