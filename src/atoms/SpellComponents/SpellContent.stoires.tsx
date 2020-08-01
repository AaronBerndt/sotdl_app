import React from "react";
import SpellContent from "./SpellContent";

export default {
  title: "Atoms/SpellComponents/SpellContent",
  component: SpellContent,
};

const spell = {
  name: "Flense",
  tradition: "Air",
  type: "Attack",
  attribute: "Will",
  level: 1,
  description:
    "Windborne grit scours your target. Make a Will attack roll against the target’s Strength. On a success, the target takes 2d6 + 3 damage. A living creature that becomes incapacitated by this damage dies instantly, its flesh (if any) stripped from its bones.",
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
};

export const withProps = () => (
  <SpellContent
    level={spell.level}
    tradition={spell.tradition}
    description={spell.description}
    spellProperties={spell.spellProperties}
  />
);

