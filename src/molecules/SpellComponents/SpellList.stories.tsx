import React from "react";
import SpellList from "./SpellList";

export default {
  title: "Molecules/SpellList",
  component: SpellList,
};

const createSpell = (level: number, type: string, damage: string) => ({
  name: `Level ${level} Spell`,
  tradition: "Air",
  type: type,
  damage: damage,
  level: level,
  characteristics: {},
  description: "",
  extra_effects: [],
});
const spellArray = [
  createSpell(0, "Attack", "1d6"),
  createSpell(0, "Attack", "2d6 + 1"),
  createSpell(1, "Utility", ""),
  createSpell(2, "Attack", "3d6"),
];

export const powerZero = () => (
  <SpellList spellArray={spellArray} castings={[{ 0: 1 }]} />
);

export const powerOne = () => (
  <SpellList spellArray={spellArray} castings={[{ 0: 2 }, { 1: 1 }]} />
);

export const powerTwo = () => (
  <SpellList
    spellArray={spellArray}
    castings={[{ 0: 3 }, { 1: 2 }, { 2: 1 }]}
  />
);
