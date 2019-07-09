import React, { PureComponent, Fragment } from "react";
import { client } from "../graphql";

import Fetch from "utils";
import { GET_COMPANIES } from "./../constants/Queries";

const defaultState = {
  compaines: [],
  isLoading: false
};

const RootContext = React.createContext(defaultState);

const withStore = Component => props => (
  <RootContext.Consumer>
    {value => (
      <Component {...props} store={value.state} storeActions={value.actions} />
    )}
  </RootContext.Consumer>
);

class RootProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ...defaultState,
      companies: []
    };
  }

  // TODO :: Create Fetch   and reduce method

  getCompanies = async _ => {
    const { data } = await client.query({
      query: GET_COMPANIES
    });

    this.setState({ companies: data.companies });
  };

  render() {
    const { state, getCompanies } = this;

    return (
      <Fragment>
        <RootContext.Provider
          value={{
            state,
            actions: {
              getCompanies
            }
          }}
        >
          {this.props.children}
        </RootContext.Provider>
      </Fragment>
    );
  }
}

export { withStore };

export default RootProvider;
