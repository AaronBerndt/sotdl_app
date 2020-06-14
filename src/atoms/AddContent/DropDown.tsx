import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

interface DropDownProps {
  label: string;
  data: Array<any>;
  filterBy: string;
  defaultValue: any;
}

function DropDown({ label, data, filterBy, defaultValue }: DropDownProps) {
  return (
    <Autocomplete
      options={data}
      getOptionLabel={(option) => option[filterBy]}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          defaultValue="Hello World"
        />
      )}
    />
  );
}

export default DropDown;
