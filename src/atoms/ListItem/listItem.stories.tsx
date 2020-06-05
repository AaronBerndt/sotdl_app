import React from "react";

import ListItem from "./index";
import HumanImage from "../../static/images/Human.png";
import { action } from "@storybook/addon-actions";

export default {
  title: "ListItem",
  component: ListItem,
};

export const withRaceData = () => (
  <ListItem
    title="Human"
    icon={HumanImage}
    onClickFunction={action("button-click")}
  />
);
