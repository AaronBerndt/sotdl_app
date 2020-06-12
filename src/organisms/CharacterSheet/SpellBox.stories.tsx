import React from "react";
import SpellBox from "./SpellBox";

export default {
  title: "Organisms/CharacterSheetComponents/SpellBox",
  component: SpellBox,
};

const createSpell = (level: number, type: string) => ({
  name: `Level ${level} Spell`,
  tradition: "Air",
  type: "Attack",
  level: level,
  characteristics: {},
  description: "",
  extra_effects: [],
});
const spellArray = [
  createSpell(0, "Attack"),
  createSpell(0, "Attack"),
  createSpell(1, "Utility"),
  createSpell(2, "Attack"),
];

export const powerZero = () => <SpellBox spellArray={spellArray} power={0} />;
export const powerOne = () => <SpellBox spellArray={spellArray} power={1} />;
export const powerTwo = () => <SpellBox spellArray={spellArray} power={2} />;

