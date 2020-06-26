import React from "react";
import SpellList from "./SpellList";
import { action } from "@storybook/addon-actions";
import { withCharacterContext } from "../../utilities";

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

  attribute: "Will",
  extra_effects: [],
});
const spellArray = [
  createSpell(0, "Attack", "1d6"),
  createSpell(0, "Attack", "2d6 + 1"),
  createSpell(1, "Utility", ""),
  createSpell(2, "Attack", "3d6"),
];

const onClick = action("button-click");

const withContext = (power: number) =>
  withCharacterContext(
    <SpellList spellArray={spellArray} onClickFuncion={onClick} />,
    { power, will: 10, spellsCast: [] }
  );

export const powerZero = () => withContext(0);

export const powerOne = () => withContext(1);

export const powerTwo = () => withContext(2);

export const powerTen = () => withContext(10);
