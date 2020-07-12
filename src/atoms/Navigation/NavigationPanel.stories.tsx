import React from "react";

import NavigationPanel from "./NavigationPanel";
import { action } from "@storybook/addon-actions";

export default {
  title: "Atoms/NavigationPanel",
  component: NavigationPanel,
};

export const withProps = () => <NavigationPanel title="Create New Character" />;
