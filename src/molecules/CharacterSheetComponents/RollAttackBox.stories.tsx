import React from "react";
import RollAttackBox from "./RollAttackBox";
import { withCharacterContext } from "../../utilities";

export default {
  title: "Molecules/CharacterSheetComponents/RollAttackBox",
  component: RollAttackBox,
};

export const withProps = () =>
  withCharacterContext(
    <RollAttackBox attackModName="strength" rollReason="Lifting" />,
    { strength: 10 }
  );
