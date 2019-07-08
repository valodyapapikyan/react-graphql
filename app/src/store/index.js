import React, { PureComponent, Fragment } from "react";
import { client } from "../graphql";

import { GET_COMPANIES } from "./../constants/Queries";

const defaultState = {
  compaines: [],
  isLoading: false
};

const Context = React.createContext(defaultState);

const withStore = Component => props => (
  <Context.Consumer>
    {value => (
      <Component {...props} store={value.state} storeActions={value.actions} />
    )}
  </Context.Consumer>
);

class AppStateProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ...defaultState,
      companies: []
    };
  }

  getCompanies = async _ => {
    const { data } = await client.query({
      query: GET_COMPANIES
    });
  };

  render() {
    const { state, getCompanies } = this;

    return (
      <Fragment>
        <Context.Provider
          value={{
            state,
            actions: {
              getCompanies
            }
          }}
        >
          {this.props.children}
        </Context.Provider>
      </Fragment>
    );
  }
}

export { withStore };

export default AppStateProvider;
