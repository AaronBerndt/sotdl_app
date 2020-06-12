import React from "react";
import FilterTextField from "./FilterTextField";
import { action } from "@storybook/addon-actions";

export default {
  title: "Atoms/FilterTextField",
  component: FilterTextField,
};

const onChange = action("onchange");
export const withProps = () => (
  <FilterTextField label="Filter by Name" onChangeFunction={onChange} />
);
