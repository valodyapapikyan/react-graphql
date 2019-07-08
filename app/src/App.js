import React, { Component, useState } from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./graphql";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import AppStateProvider from "./store";
import { withStore } from "./store";

import Countries from "./pages/jobs/";

const App = props => {
  console.log(props);
  return (
    <ApolloProvider client={client}>
      <AppStateProvider>
        <h1>ddd</h1>
      </AppStateProvider>
    </ApolloProvider>
  );
};

export default withStore(App);
