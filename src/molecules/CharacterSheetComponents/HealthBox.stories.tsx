import React from "react";
import HealthBox from "./HealthBox";

export default {
  title: "Molecules/CharacterSheetComponents/HealthBox",
  component: HealthBox,
};

export const noDamage = () => <HealthBox healthTotal={10} damage={0} />;
export const hasDamage = () => <HealthBox healthTotal={10} damage={5} />;
export const atZero = () => <HealthBox healthTotal={10} damage={10} />;
