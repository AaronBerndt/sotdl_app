import React from "react";
import SpellTable from "./SpellTable";
import { action } from "@storybook/addon-actions";
import { withCharacterContext } from "../../utilities";

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

export const withContext = (casting: number) =>
  withCharacterContext(
    <SpellTable
      spellArray={spellArray}
      onClickFuncion={onClick}
      casting={casting}
    />,
    {
      spellsCast: [],
      will: 12,
    }
  );

export const noSpells = () => (
  <SpellTable spellArray={[]} casting={1} onClickFuncion={onClick} />
);

export const casting1 = () => withContext(1);
export const casting1WithSpellsCast = () =>
  withCharacterContext(
    <SpellTable spellArray={spellArray} onClickFuncion={onClick} casting={1} />,
    {
      spellsCast: [
        {
          name: "Flense",
          uses: 1,
        },
      ],
      will: 12,
    }
  );

export const casting2 = () => withContext(2);

export const casting10 = () => withContext(10);
