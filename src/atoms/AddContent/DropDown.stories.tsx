import React from "react";
import DropDown from "./DropDown";

export default {
  title: "Atoms/AddContent/DropDOwn",
  component: DropDown,
};

const contentArray = [
  {
    name: "Ancestry",
  },
  {
    name: "Item",
  },
  {
    name: "Spell",
  },
  {
    name: "Path",
  },
];

export const withProps = () => (
  <DropDown label="ContentType" data={contentArray} filterBy="name" />
);
