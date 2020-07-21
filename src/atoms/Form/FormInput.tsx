import React from "react";
import { TextField } from "mui-rff";

interface FormInput {
  label: any;
  name: any;
  autoFocus?: boolean;
  disabled?: boolean;
}

function FormInput({ label, name, autoFocus, disabled }: FormInput) {
  return (
    <TextField
      label={label}
      name={name}
      required={true}
      autoFocus={autoFocus}
      disabled={disabled}
    />
  );
}

export default FormInput;

