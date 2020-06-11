import React from "react";
import LifeWorkSpaceBox from "./LifeWorkSpaceBox";
import {action} from "@storybook/addon-actions";

export default {
  title: "Organisms/CharacterSheetComponents/LifeWorkSpaceBox",
  component: LifeWorkSpaceBox,
};

const onClick = action("button-click");
export const noDamage = () => (
  <LifeWorkSpaceBox health={30} onClickFuncion={onClick} />
);
