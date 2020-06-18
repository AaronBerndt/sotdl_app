import React from "react";
import RollDamageBox from "./RollDamageBox";
import { action } from "@storybook/addon-actions";

export default {
  title: "Molecules/CharacterSheetComponents/RollDamageBox",
  component: RollDamageBox,
};

const onClick = (type, amount, extra) => action("button-click");

export const rollingD6 = () => (
  <RollDamageBox value={"2d6"} onClickFuncion={onClick} />
);

export const rollingD3 = () => (
  <RollDamageBox value={"1d3"} onClickFuncion={onClick} />
);

export const rollingD6WithExtra = () => (
  <RollDamageBox value={"1d6 + 3"} onClickFuncion={onClick} />
);
