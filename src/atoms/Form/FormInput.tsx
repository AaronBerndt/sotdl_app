import React from "react";
import { TextField } from "mui-rff";

interface FormInput {
  label: any;
  name: any;
}

function FormInput({ label, name }: FormInput) {
  return <TextField label={label} name={name} required={true} />;
}

export default FormInput;
