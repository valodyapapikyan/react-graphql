import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = ({ onChange }) => {
  return (
    <TextField
      onChange={onChange}
      id="standard-uncontrolled"
      label="type country name"
      defaultValue=""
      margin="normal"
    />
  );
};

export default Input;
