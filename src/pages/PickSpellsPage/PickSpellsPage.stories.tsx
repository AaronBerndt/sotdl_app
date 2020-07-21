import React from "react";
import PickSpellsPage from "./PickSpellsPage";
import { withBuildCharacterContext } from "../../utilities";

export default {
  title: "Pages/CharacterBulider/PickSpellsPage",
  component: PickSpellsPage,
};

const withContext = (features: Array<any>) =>
  withBuildCharacterContext(<PickSpellsPage />, { features });

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

export const withMagic = () => withContext(featuresArray);
export const noMagic = () => withContext([]);

