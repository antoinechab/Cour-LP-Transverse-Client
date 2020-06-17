import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./style/index.css";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { InMemoryCache, gql, HttpLink } from 'apollo-boost';
import { setContext } from 'apollo-link-context'
import { AUTH_TOKEN } from "../src/constants"
//npm install apollo-boost @apollo/react-hooks graphql

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});
// link: authLink.concat(HttpLink),

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

/*

This assert permit to test the server

client.query({
    query: gql`
    query Assert{
      userSchemaAssert
    } 
    `
  })
  .then(result => console.log("Reponse from graphql:", result));*/

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={ client }>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.register();
