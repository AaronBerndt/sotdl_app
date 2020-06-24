import React from "react";
import ActionBox from "./ActionBox";
import { withCharacterContext } from "../../utilities";

export default {
  title: "Organisms/CharacterSheetComponents/ActionBox",
  component: ActionBox,
};

const spellArray = [
  {
    name: "Flense",
    tradition: "Air",
    type: "Attack",
    level: 1,
    characteristics: {
      target: "One creature or object within short range",
      duration: 0,
    },
    damage: "2d6 + 3",
    attribute: "Will",
    description:
      "Windborne grit scours your target. Make a Will attack roll against the target’s Strength. On a success, the target takes 2d6 + 3 damage. A living creature that becomes incapacitated by this damage dies instantly, its flesh (if any) stripped from its bones.",
    extra_effects: [
      {
        name: "Attack Roll 20+",
        description: "The target takes 2d6 extra damage.",
      },
    ],
  },
];

export const withProps = () =>
  withCharacterContext(<ActionBox />, {
    spells: spellArray,
    items: {
      weapons: [
        {
          name: "Greataxe",
          damage: "3d6",
          hands: "two",
          properties: [{ name: "Cumbersome" }],
          type: "Heavy",
          price: "2 gc",
          availability: "R",
        },
      ],
    },
    strength: 12,
    agility: 13,
    will: 13,
    power: 1,
    spellsCast: [],
  });
