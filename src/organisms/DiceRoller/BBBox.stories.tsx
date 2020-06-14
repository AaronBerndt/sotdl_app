import React from "react";
import BBBox from "./BBBox";
import { action } from "@storybook/addon-actions";

export default {
  title: "Organisms/DiceRoller/BBBox",
  component: BBBox,
};

const onClick = action("button-click");
export const isZero = () => (
  <BBBox
    boonAmount={0}
    baneAmount={0}
    baneOnClick={onClick}
    boonOnClick={onClick}
  />
);

export const withBoon = () => (
  <BBBox
    boonAmount={1}
    baneAmount={0}
    baneOnClick={onClick}
    boonOnClick={onClick}
  />
);
export const withBanes = () => (
  <BBBox
    boonAmount={0}
    baneAmount={1}
    baneOnClick={onClick}
    boonOnClick={onClick}
  />
);

