import React from "react";
import AttributeBox from "./AttributeBox";
import { action } from "@storybook/addon-actions";

export default {
  title: "Molecules/CharacterSheetComponents/AttributeBox",
  component: AttributeBox,
};

const onClick = () => action("button-click");

export const withZero = () => (
  <AttributeBox
    name="Will"
    value={10}
    onClickFuncion={onClick}
    withMod={true}
    withNoRoll={false}
  />
);
export const withPostive = () => (
  <AttributeBox
    name="Strength"
    value={11}
    onClickFuncion={onClick}
    withMod={true}
    withNoRoll={false}
  />
);
export const withNegative = () => (
  <AttributeBox
    name="Intellect"
    value={8}
    onClickFuncion={onClick}
    withMod={true}
    withNoRoll={false}
  />
);

export const withNoMod = () => (
  <AttributeBox
    name="Insanity"
    value={1}
    onClickFuncion={onClick}
    withMod={false}
    withNoRoll={false}
  />
);

export const withNoModOrRoll = () => (
  <AttributeBox
    name="Power"
    value={1}
    onClickFuncion={onClick}
    withMod={false}
    withNoRoll={true}
  />
);
