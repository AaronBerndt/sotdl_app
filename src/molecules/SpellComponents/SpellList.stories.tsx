import React from "react";
import SpellList from "./SpellList";

export default {
  title: "Molecules/SpellList",
  component: SpellList,
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

export const powerZero = () => <SpellList spellArray={spellArray} power={0} />;
export const powerOne = () => <SpellList spellArray={spellArray} power={1} />;
export const powerTwo = () => <SpellList spellArray={spellArray} power={2} />;
