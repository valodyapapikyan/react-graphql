import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./graphql";

import Countries from "./pages/countries/";
// first we will make a new context
const Context = React.createContext();

// Then create a provider Component
class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "hello  world"
    };
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
                <Countries value={context} />
              </React.Fragment>
            )}
          </Context.Consumer>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
