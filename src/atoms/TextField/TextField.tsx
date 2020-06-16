import React from "react";
import { TextField as MaterialTextField } from "@material-ui/core";

interface TextFieldProps {
  name: string;
  value: any;
  autoFocus?: any;
}

function TextField({ name, value, autoFocus }: TextFieldProps) {
  return (
    <>
      <MaterialTextField
        label={name}
        variant="outlined"
        defaultValue={value}
        size="small"
        autoFocus={autoFocus}
        disabled
      />
    </>
  );
}

export default TextField;
