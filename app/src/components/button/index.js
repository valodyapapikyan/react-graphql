import React from "react";
import Button from "@material-ui/core/Button";

const ButtonComponent = ({ onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Get Countries
    </Button>
  );
};

export default ButtonComponent;
