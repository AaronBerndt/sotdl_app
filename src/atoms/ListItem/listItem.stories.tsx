import React from "react";

import ListItem from "./index";
import { action } from "@storybook/addon-actions";

export default {
  title: "Atoms/ListItem",
  component: ListItem,
};

export const withRaceData = () => (
  <ListItem title="Human" onClickFunction={action("button-click")} />
);
