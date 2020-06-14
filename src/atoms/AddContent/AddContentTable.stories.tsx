import React from "react";
import AddContentTable from "./AddContentTable";

export default {
  title: "Atoms/AddContent/AddContentTable",
  component: AddContentTable,
};

export const features = () => <AddContentTable name="Features" data={[]} />;

export const characteristics = () => (
  <AddContentTable
    name="Characteristics"
    data={[{ name: "Strength", value: 10, level: 0 }]}
  />
);
