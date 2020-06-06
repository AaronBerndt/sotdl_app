import React from "react";

import ListItem from "./ListItem";
import { action } from "@storybook/addon-actions";

export default {
  title: "Atoms/ListItem",
  component: ListItem,
};

export const withRaceData = () => (
  <ListItem title="Human" onClickFunction={action("button-click")} />
);
