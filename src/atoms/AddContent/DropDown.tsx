import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

interface DropDownProps {
  label: string;
  data: Array<any>;
  filterBy: string;
  onChange?: any;
  autoFocus?: boolean;
}

function DropDown({
  label,
  data,
  filterBy,
  onChange,
  autoFocus,
}: DropDownProps) {
  return (
    <Autocomplete
      options={data}
      autoHighlight
      onBlurCapture={(e: any) => onChange(`${e.target.value}`)}
      getOptionLabel={(option) => option[filterBy]}
      onFocus={(e) => console.log(e)}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          autoFocus={autoFocus}
        />
      )}
    />
  );
}

export default DropDown;

