import React, { Component } from "react";

import List from "./list";

class CountrySelect extends Component {
  render() {
    return <List companies={this.props.companies} />;
  }
}

export default CountrySelect;
