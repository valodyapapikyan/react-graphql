import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./graphql";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Countries from "./pages/jobs/";

const Context = React.createContext();

const GET_COUNTRIES = gql`
  {
    companies {
      name
      logoUrl
      id
      createdAt
      websiteUrl
      jobs {
        title
        applyUrl
        isFeatured
      }
    }
  }
`;

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Context.Provider value={this.state.value}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider>
          <Context.Consumer>
            {context => (
              <React.Fragment>
                <Query query={GET_COUNTRIES}>
                  {({ loading, error, data }) => {
                    console.log(data);
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>{error.message}</p>;
                    return <Countries companies={data.companies} />;
                  }}
                </Query>
              </React.Fragment>
            )}
          </Context.Consumer>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
