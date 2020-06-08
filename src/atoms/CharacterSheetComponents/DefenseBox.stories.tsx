import React from "react";
import DefenseBox from "./DefenseBox";

export default {
  title: "Atoms/CharacterSheetComponents/DefenseBox",
  component: DefenseBox,
};

export const withProps = () => <DefenseBox value={12} />;
