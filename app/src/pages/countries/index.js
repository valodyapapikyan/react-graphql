import React, { Component } from "react";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import List from "./list";

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

class CountrySelect extends Component {
  state = {
    country: "US"
  };

  // set the selected country to the new input value
  onCountryChange = event => {
    this.setState({ country: event.target.value });
  };

  render() {
    return (
      <Query query={GET_COUNTRIES}>
        {({ loading, error, data }) => {
          console.log(data);
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error.message}</p>;
          return <List companies={data.companies} />;
        }}
      </Query>
    );
  }
}

export default CountrySelect;
