import React from "react";
import SpellBox from "./SpellBox";
import { withCharacterContext } from "../../utilities";

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

export const withContext = () =>
  withCharacterContext(<SpellBox />, {
    spells: spellArray,
    power: 1,
    spellsCast: [],
  });
