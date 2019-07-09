import React, { Component, useState } from "react";

import { ApolloProvider } from "react-apollo";
import { client } from "./graphql";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import RootProvider from "./store";
import { withStore } from "./store";

import Content from "./pages/main/";

const App = props => {
  return (
    <ApolloProvider client={client}>
      <>
        <Content />
      </>
    </ApolloProvider>
  );
};

const DecoratedApp = withStore(App);

export default DecoratedApp;
