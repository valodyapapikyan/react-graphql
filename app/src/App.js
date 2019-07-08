import React, { Component, useState } from "react";

import { ApolloProvider } from "react-apollo";
import { client } from "./graphql";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import RootProvider from "./store";
import { withStore } from "./store";

import Countries from "./pages/jobs/";

const App = props => {
  return (
    <ApolloProvider client={client}>
      <>
        <button onClick={props.storeActions.getCompanies}>get companies</button>
        <Countries companies={props.store.companies} />
      </>
    </ApolloProvider>
  );
};

const DecoratedApp = withStore(App);

export default DecoratedApp;
