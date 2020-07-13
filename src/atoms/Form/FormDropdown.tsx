import React from "react";
import { Autocomplete } from "mui-rff";

interface FormDropdown {
  label: string;
  name: string;
  data: any;
  multiple?: boolean;
}

function FormDropdown({ label, name, data, multiple }: FormDropdown) {
  return (
    <Autocomplete
      label={label}
      name={name}
      autoHighlight
      multiple={multiple}
      getOptionValue={(option) => option.value}
      getOptionLabel={(option) => option.label}
      options={data.map(({ name }) => ({ label: name, value: name }))}
    />
  );
}

export default FormDropdown;

