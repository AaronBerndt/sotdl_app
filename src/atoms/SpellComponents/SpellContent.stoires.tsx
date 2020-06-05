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
  level: 1,
  characteristics: {
    target: "One creature or object within short range",
    duration: 0,
  },
  description:
    "Windborne grit scours your target. Make a Will attack roll against the target’s Strength. On a success, the target takes 2d6 + 3 damage. A living creature that becomes incapacitated by this damage dies instantly, its flesh (if any) stripped from its bones.",
  extra_effects: [
    {
      name: "Attack Roll 20+",
      description: "The target takes 2d6 extra damage.",
    },
  ],
};

export const withProps = () => (
  <SpellContent
    level={spell.level}
    tradition={spell.tradition}
    characteristics={spell.characteristics}
    description={spell.description}
    extraEffects={spell.extra_effects}
  />
);
