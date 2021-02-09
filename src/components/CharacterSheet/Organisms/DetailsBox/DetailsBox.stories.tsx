import React from "react";
import DetailsBox from "./DetailsBox";
import { withCharacterContext } from "../../utilities";

export default {
  title: "Organisms/CharacterSheetComponents/DetailsBox",
  component: DetailsBox,
};

export const levelZero = () =>
  withCharacterContext(<DetailsBox />, {
    name: "Ordo",
    ancestry: "Dwarf",
    novicePath: "",
    expertPath: "",
    masterPath: "",
    level: 0,
  });

export const levelOne = () =>
  withCharacterContext(<DetailsBox />, {
    name: "Ordo",
    ancestry: "Dwarf",
    novicePath: "Warrior",
    expertPath: "",
    masterPath: "",
    level: 1,
  });

export const levelThree = () =>
  withCharacterContext(<DetailsBox />, {
    name: "Ordo",
    ancestry: "Dwarf",
    novicePath: "Warrior",
    expertPath: "Beserker",
    masterPath: "",
    level: 3,
  });

export const levelSeven = () =>
  withCharacterContext(<DetailsBox />, {
    name: "Ordo",
    ancestry: "Dwarf",
    novicePath: "Warrior",
    expertPath: "Beserker",
    masterPath: "Blade",
    level: 7,
  });
