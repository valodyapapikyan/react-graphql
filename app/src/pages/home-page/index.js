import React, { usEfec } from "react";

import { withStore } from "store";

const HomePage = props => {
  const { store, storeActions } = props;

  storeActions.getCompanies();

  if (store.isLoading) {
    return <span>... loading </span>;
  }

  return (
    <>
      <h1>dhsjhsdsj</h1>
    </>
  );
};

export default withStore(HomePage);
