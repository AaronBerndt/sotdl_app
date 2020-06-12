import React from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";

interface FilterTextFieldProps {
  label: string;
  onChangeFunction: any;
}

function FilterTextField({ label, onChangeFunction }: FilterTextFieldProps) {
  return (
    <TextField
      onChange={onChangeFunction}
      label={label}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default FilterTextField;
