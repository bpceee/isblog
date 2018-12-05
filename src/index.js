import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from "react-apollo";
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './components/App';

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
  }
});

let basename = '/';
if (
  process.env.NODE_ENV === 'production' 
  && `${process.env.REACT_APP_USERNAME}.github.io` !== process.env.REACT_APP_REPO
) {
  basename = process.env.REACT_APP_REPO;
}

ReactDOM.render(
  <BrowserRouter basename={basename}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>, 
  document.getElementById('root')
);

// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();