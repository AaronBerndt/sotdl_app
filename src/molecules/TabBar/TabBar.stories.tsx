import React from "react";
import TabBar from "./TabBar";
import { action } from "@storybook/addon-actions";

export default {
  title: "Molecules/TabBar",
  component: TabBar,
};

const onChange = action("button-click");
export const notHidden = () => (
  <TabBar
    tabArray={["Tab 1", "Tab 2"]}
    currentTab={0}
    onChangeFunction={() => onChange}
  />
);
