import React from "react";
import { TextField } from "mui-rff";

interface FormInput {
  label: any;
  name: any;
  autoFocus?: boolean;
}

function FormInput({ label, name, autoFocus }: FormInput) {
  return (
    <TextField
      label={label}
      name={name}
      required={true}
      autoFocus={autoFocus}
    />
  );
}

export default FormInput;
