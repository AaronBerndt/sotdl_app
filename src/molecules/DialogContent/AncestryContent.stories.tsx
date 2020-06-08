import React from "react";
import AncestryContent from "./AncestryContent";

export default {
  title: "Molecules/DialogContent/AncestryContent",
  component: AncestryContent,
};

const ancestryObject = {
  name: "Dwarf",
  description:
    "Dwarfs live under the mountains in elaborate subterranean cities. From them, they launch expeditions deep into the earth to pry gold and silver from the unyielding rock. They hoard their treasures in great vaults and view other peoples with distrust, suspecting them all of coveting their wealth. The dwarfs have few friends and gain little aid when the forces of darkness overrun their strongholds to lay claim to their vaults. Thus many dwarfs wander the lands, homeless, friendless, searching for a new place to call their own",
  languages: "Common, Dwarfish",
  professions: "Common",
  features: [
    {
      name: "Darksight",
      description:
        "You can see in areas obscured by shadows or darkness within medium range as if those areas were lit. Beyond this distance, you treat darkness as shadows and shadows as lit.",
      level: 0,
    },
    {
      name: "Hated Creature",
      description:
        "Choose a creature from the Hatred table. Your hatred grants 1 boon on attack rolls made against creatures you hate.",
      level: 0,
    },
    {
      name: "Robust Constitution",
      description:
        "You take half damage from poison. You make challenge rolls with 1 boon to avoid or remove the poisoned affliction.",
      level: 0,
    },
    {
      name: "Shake it Off",
      description:
        "You can use an action to heal damage equal to your healing rate and remove one of the following afflictions: fatigued, impaired, or poisoned. Once you use this talent, you cannot use it again until after you complete a rest.",
      level: 4,
    },
  ],
  characteristics: [
    { name: "Strength", value: 10, level: 0 },
    { name: "Agility", value: 9, level: 0 },
    { name: "Intellect", value: 10, level: 0 },
    { name: "Will", value: 10, level: 0 },
    { name: "Perception", value: 1, level: 0 },
    { name: "Health", value: 4, level: 0 },
    { name: "Size", value: 0.5, level: 0 },
    { name: "Speed", value: 8, level: 0 },
    {
      name: "Health",
      value: 6,
      level: 4,
    },
  ],
};

export const isOpen = () => <AncestryContent ancestryInfo={ancestryObject} />;
