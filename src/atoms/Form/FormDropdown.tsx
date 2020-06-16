import React from "react";
import { Autocomplete } from "mui-rff";

interface FormDropdown {
  label: string;
  name: string;
  data: any;
}

function FormDropdown({ label, name, data }: FormDropdown) {
  return (
    <Autocomplete
      label={label}
      name={name}
      autoHighlight
      getOptionValue={(option) => option.value}
      getOptionLabel={(option) => option.label}
      options={data.map(({ name }) => ({ label: name, value: name }))}
    />
  );
}

export default FormDropdown;
