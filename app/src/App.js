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
  state = { data: [] };
  onFetched = data => this.setState(() => ({ data: data.companies }));

  render() {
    return (
      <ApolloProvider client={client}>
        <Provider>
          <Context.Consumer>
            {context => (
              <React.Fragment>
                <button
                  onClick={async () => {
                    const { data } = await client.query({
                      query: GET_COUNTRIES
                    });
                    this.onFetched(data);
                  }}
                >
                  Get companies list
                </button>
                <Countries companies={this.state.data} />
              </React.Fragment>
            )}
          </Context.Consumer>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
