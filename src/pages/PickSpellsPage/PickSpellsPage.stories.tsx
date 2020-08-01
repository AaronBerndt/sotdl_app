import React from "react";
import PickSpellsPage from "./PickSpellsPage";
import { withBuildCharacterContext } from "../../utilities";

export default {
  title: "Pages/CharacterBulider/PickSpellsPage",
  component: PickSpellsPage,
};

const withContext = (features: Array<any>, spellList: Array<any>) =>
  withBuildCharacterContext(<PickSpellsPage />, { features, spellList });

const featuresArray = [
  {
    name: "Magic",
    description:
      "You discover one tradition. Then, make three choices. For each choice, you either discover another tradition or learn a spell from a tradition you have discovered.",
    extra: [
      { name: "Tradition", value: 1 },
      { name: "Both", value: 3 },
      { name: "Spell", value: 1 },
    ],

    level: 1,
  },
  {
    name: "Magic",
    description: "You learn a Spell",
    extra: [{ name: "Spell", value: 1 }],

    level: 1,
  },
];

const spellList = [
  {
    name: "Magic Shield",
    attribute: "Will",
    type: "Utility",
    description: "Magic Shield",
    tradition: "Primal",
    spellProperties: [
      {
        name: "Target",
        value: "One creature or object within short range",
      },
      {
        name: "Duration",
        value: "0",
      },

      {
        name: "Attack Roll 20+",
        value: "The target takes 2d6 extra damage.",
      },
    ],

    level: 0,
  },

  {
    name: "Fire Shield",
    type: "Utility",
    attribute: "Will",
    description: "Fire Shield",
    tradition: "Fire",
    spellProperties: [
      {
        name: "Target",
        value: "One creature or object within short range",
      },
      {
        name: "Duration",
        value: "0",
      },

      {
        name: "Attack Roll 20+",
        value: "The target takes 2d6 extra damage.",
      },
    ],

    level: 0,
  },
  {
    name: "Fire Strike",
    attribute: "Will",
    type: "Attack",
    description: "Fire Strike",
    tradition: "Fire",
    spellProperties: [
      {
        name: "Target",
        value: "One creature or object within short range",
      },
      {
        name: "Duration",
        value: "0",
      },

      {
        name: "Attack Roll 20+",
        value: "The target takes 2d6 extra damage.",
      },
    ],

    level: 1,
  },
];

export const withMagic = () => withContext(featuresArray, spellList);
export const noMagic = () => withContext([]);

