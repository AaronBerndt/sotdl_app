import React from "react";
import { action } from "@storybook/addon-actions";
import Panel from "./index";

export default {
  title: "Atoms/Panel",
  component: Panel,
};

export const withText = () => (
  <Panel
    title="Darkvision"
    summary="Level 1"
    details="Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
  />
);

export const withComp = () => (
  <Panel
    title="Darkvision"
    summary="Level 1"
    details={
      <>
        <button onClick={action("button-click")}>Click me</button>
      </>
    }
  />
);
