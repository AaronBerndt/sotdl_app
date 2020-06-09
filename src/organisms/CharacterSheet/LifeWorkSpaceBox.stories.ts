import React from "react";
import LifeWorkSpaceBox from "./LifeWorkSpaceBox";

export default {
  title: "Organisms/CharacterSheetComponents/LifeWorkSpaceBox",
  component: LifeWorkSpaceBox,
};

export const noDamage = () => (
	<LifeWorkSpaceBox />
);
export const withDamage = () => (
  <DetailsBox
    name="Ordo"
    ancestry="Dwarf"
    novicePath="Warrior"
    expertPath=""
    masterPath=""
    level={1}
  />
);
export const zeroHealth = () => (
  <DetailsBox
    name="Ordo"
    ancestry="Dwarf"
    novicePath="Warrior"
    expertPath="Beserker"
    masterPath=""
    level={3}
  />
);
);
