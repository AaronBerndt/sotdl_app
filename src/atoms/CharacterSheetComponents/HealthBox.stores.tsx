import React from "react";
import HealthBox from "./HealthBox";

export default {
  title: "Atoms/CharacterSheetComponents/HealthBox",
  component: HealthBox,
};


export const noDamage = () => <HealthBox healthTotal={10} damage={0} />;
export const atZero = () => <HealthBox healthTotal={10} damage={10} />;

