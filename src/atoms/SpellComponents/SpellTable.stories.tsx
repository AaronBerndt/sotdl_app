import React from "react";
import SpellTable from "./SpellTable";
import { action } from "@storybook/addon-actions";

export default {
  title: "Atoms/SpellComponents/SpellTable",
  component: SpellTable,
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

const onClick = action("button-click");
export const noSpells = () => (
  <SpellTable spellArray={[]} casting={1} onClickFuncion={onClick} />
);

export const casting1 = () => (
  <SpellTable spellArray={spellArray} casting={1} onClickFuncion={onClick} />
);

export const casting2 = () => (
  <SpellTable spellArray={spellArray} casting={2} onClickFuncion={onClick} />
);

export const casting3 = () => (
  <SpellTable spellArray={spellArray} casting={3} onClickFuncion={onClick} />
);

export const casting4 = () => (
  <SpellTable spellArray={spellArray} casting={4} onClickFuncion={onClick} />
);

export const casting10 = () => (
  <SpellTable spellArray={spellArray} casting={10} onClickFuncion={onClick} />
);
