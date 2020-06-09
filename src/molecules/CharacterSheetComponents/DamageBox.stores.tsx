import React from "react";
import DamageBox from "./DamageBox";

export default {
  title: "Molecules/CharacterSheetComponents/DamageBox",
  component: DamageBox,
};

export const noDamage = () => <DamageBox healthTotal={10} />;

export const zeroHealth = () => <DamageBox healthTotal={0} />;
