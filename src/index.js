import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { HashRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import { ApolloProvider } from '@apollo/client';
import ApolloClient from './apollo'

import PokeApp from './PokeApp'

import reportWebVitals from './reportWebVitals';

var hist = createBrowserHistory();

ReactDOM.render(
  <HashRouter history={hist}>
    <StylesProvider injectFirst>
      <ApolloProvider client={ApolloClient}>
        <PokeApp/>
      </ApolloProvider>
    </StylesProvider>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
