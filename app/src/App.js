import React, { Component, useState } from "react";
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

const App = () => {
  const [data, setState] = useState([]);

  const fetch = async client => {
    const { data } = await client.query({
      query: GET_COUNTRIES
    });

    setState(data.companies);
  };

  return (
    <ApolloProvider client={client}>
      <Provider>
        <Context.Consumer>
          {context => (
            <React.Fragment>
              <button onClick={() => fetch(client)}>Get companies list</button>
              <Countries companies={data} />
            </React.Fragment>
          )}
        </Context.Consumer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
