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
        title: "Human",
      },
      {
        title: "Dwarf",
      },
      {
        title: "Orc",
      },
      {
        title: "Goblin",
      },
    ]}
    onClickFunction={action("button-click")}
  />
);
