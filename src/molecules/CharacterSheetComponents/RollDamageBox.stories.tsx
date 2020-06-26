import React from "react";
import RollDamageBox from "./RollDamageBox";

export default {
  title: "Molecules/CharacterSheetComponents/RollDamageBox",
  component: RollDamageBox,
};

export const rollingD6 = () => <RollDamageBox rollReason="Axe" value={"2d6"} />;

export const rollingD3 = () => <RollDamageBox rollReason="Axe" value={"1d3"} />;

export const rollingD6WithExtra = () => (
  <RollDamageBox rollReason="Axe" value={"1d6 + 3"} />
);
