import React from "react";
import DetailsBox from "./DetailsBox";

export default {
  title: "Organisms/CharacterSheetComponents/DetailsBox",
  component: DetailsBox,
};

export const levelZero = () => (
  <DetailsBox
    name="Ordo"
    ancestry="Dwarf"
    novicePath=""
    expertPath=""
    masterPath=""
    level={0}
  />
);
export const levelOne = () => (
  <DetailsBox
    name="Ordo"
    ancestry="Dwarf"
    novicePath="Warrior"
    expertPath=""
    masterPath=""
    level={1}
  />
);
export const levelThree = () => (
  <DetailsBox
    name="Ordo"
    ancestry="Dwarf"
    novicePath="Warrior"
    expertPath="Beserker"
    masterPath=""
    level={3}
  />
);
export const levelSeven = () => (
  <DetailsBox
    name="Ordo"
    ancestry="Dwarf"
    novicePath="Warrior"
    expertPath="Beserker"
    masterPath="Blade"
    level={7}
  />
);
