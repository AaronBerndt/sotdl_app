import React from "react";
import List from "./index";
import { action } from "@storybook/addon-actions";

export default {
  title: "Molecules/List",
  component: List,
};

export const withProps = () => (
  <List
    listItemArray={[
      {
        name: "Human",
      },
      {
        name: "Dwarf",
      },
      {
        name: "Orc",
      },
      {
        name: "Goblin",
      },
    ]}
    onClickFunction={action("button-click")}
  />
);
