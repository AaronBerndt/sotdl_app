const ancestriesData = [
  {
    name: "Dwarf",
    description:
      "Dwarfs live under the mountains in elaborate subterranean cities. From them, they launch expeditions deep into the earth to pry gold and silver from the unyielding rock. They hoard their treasures in great vaults and view other peoples with distrust, suspecting them all of coveting their wealth. The dwarfs have few friends and gain little aid when the forces of darkness overrun their strongholds to lay claim to their vaults. Thus many dwarfs wander the lands, homeless, friendless, searching for a new place to call their own",
    starting_attributes: {
      strength: 10,
      agility: 9,
      intellect: 10,
      will: 10,
      perception: 1,
      defense: 0,
      health: 4,
      healing_rate: 0.25,
      size: 0.5,
      speed: 8,
      power: 0,
      damage: 0,
      insanity: 0,
      corruption: 0,
    },
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
      {
        name: "Health",
        value: 6,
        level: 4,
      },
    ],
  },
  {
    name: "Orc",
    description:
      "Long believed to be the perfect soldiers, the orcs have thrown off slavery’s shackles and risen up against their imperial masters in a war that threatens to drown the Empire in blood.",
    starting_attributes: {
      strength: 11,
      agility: 10,
      intellect: 9,
      will: 9,
      perception: 1,
      defense: 0,
      health: 0,
      healing_rate: 0.25,
      size: 1,
      speed: 12,
      power: 0,
      damage: 0,
      insanity: 0,
      corruption: 1,
    },
    languages: "Common, Dark Speech",
    professions: "Common",
    features: [
      {
        name: "Shadowsight",
        description:
          "You see in areas obscured by shadows as if those areas were lit.",
        level: 1,
      },
      {
        name: "Rising Fury",
        description:
          "When you take damage, you make your next attack roll before the end of the next round with 1 boon",
        level: 4,
      },
    ],
    characteristics: [
      {
        name: "Health",
        value: 6,
        level: 4,
      },
    ],
  },
];

export { ancestriesData };
