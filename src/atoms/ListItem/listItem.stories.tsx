import React from "react";

import ListItem from "./index";
import { action } from "@storybook/addon-actions";

export default {
  title: "ListItem",
  component: ListItem,
};

export const withRaceData = () => (
  <ListItem
    title="Human"
    icon="../../static/images/Human.png"
    onClickFunction={action("button-click")}
  />
);
