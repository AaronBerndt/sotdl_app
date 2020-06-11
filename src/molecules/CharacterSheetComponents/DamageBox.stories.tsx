import React from "react";
import DamageBox from "./DamageBox";
import { action } from "@storybook/addon-actions";

export default {
  title: "Molecules/CharacterSheetComponents/DamageBox",
  component: DamageBox,
};

const onClick = action("button-click");
export const noDamage = () => (
  <DamageBox
    healthTotal={10}
    currentDamage={0}
    healingButtonClick={onClick}
    damageButtonClick={onClick}
  />
);

export const zeroHealth = () => (
  <DamageBox
    healthTotal={10}
    currentDamage={10}
    healingButtonClick={onClick}
    damageButtonClick={onClick}
  />
);

