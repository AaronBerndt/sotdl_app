import React from "react";
import CharacteristicsBox from "./CharacteristicsBox";
import { withCharacterContext } from "../../utilities";

export default {
  title: "Organisms/CharacterSheetComponents/CharacteristicsBox",
  component: CharacteristicsBox,
};

export const withProps = () =>
  withCharacterContext(<CharacteristicsBox />, {
    strength: 10,
    agility: 12,
    intellect: 13,
    will: 10,
    perception: 14,
    speed: 10,
  });
