import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

interface DropDownProps {
  label: string;
  data: Array<any>;
  filterBy: string;
  onChange?: any;
}

function DropDown({ label, data, filterBy, onChange }: DropDownProps) {
  return (
    <Autocomplete
      options={data}
      onChange={onChange ? (e) => onChange(`${e.target.innerHTML}`) : false}
      getOptionLabel={(option) => option[filterBy]}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
}

export default DropDown;
