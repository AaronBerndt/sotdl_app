import React from "react";
import AddContentTable from "./AddContentTable";
import { action } from "@storybook/addon-actions";

export default {
  title: "Atoms/AddContent/AddContentTable",
  component: AddContentTable,
};

export const features = () => (
  <AddContentTable
    name="Features"
    data={[]}
    onChangeFunction={action("button-click")}
  />
);

export const characteristics = () => (
  <AddContentTable
    name="Characteristics"
    data={[{ name: "Strength", value: 10, level: 0 }]}
    onChangeFunction={action("button-click")}
  />
);
