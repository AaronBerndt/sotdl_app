import React from "react";
import DataPreview from "./DataPreview";

export default {
  title: "Atoms/AddContent/DataPreview",
  component: DataPreview,
};

const startingObject = {
  name: "",
  ancestry: "",
};
const updatedValue = {
  name: "Ordo",
  ancestry: "Dwarf",
};
export const startingValue = () => <DataPreview data={startingObject} />;

export const updateValue = () => <DataPreview data={updatedValue} />;
