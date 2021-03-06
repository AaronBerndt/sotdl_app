const characterData = {
  name: "Ordo",
  description: "Murder Hobo",
  level: 4,
  ancestry: "Dwarf",
  novicePath: "Warrior",
  expertPath: "Berserker",
  masterPath: "",
  languages: ["Common", "Dwarf"],
  profession: [
    {
      name: "Guard",
      type: "Martial",
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
    {
      name: "Health",
      value: 5,
      level: 1,
    },
    {
      name: "Health",
      value: 5,
      level: 2,
    },

    {
      name: "Health",
      value: 6,
      level: 3,
    },

    { name: "Strength", value: 1, level: 1 },
    { name: "Will", value: 1, level: 1 },
    { name: "Strength", value: 1, level: 3 },
    { name: "Will", value: 1, level: 3 },
  ],
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
    {
      name: "Determined",
      description:
        "When you roll a 1 on the die from a boon, you can reroll the die and choose to use the new number.",
      level: 1,
    },
    {
      name: "Catch Your Breath",
      description:
        "You can use an action or a triggered action on your turn to heal damage equal to your healing rate. Once you use this talent, you cannot use it again until after you complete a rest.",
      level: 1,
    },
    {
      name: "Weapon Training",
      description:
        "When attacking with a weapon, you make the attack roll with 1 boon.",
      level: 1,
    },
    {
      name: "Combat Prowess",
      description: "Your attacks with weapons deal 1d6 extra damage.",
      level: 2,
    },
    {
      name: "Forceful Strike",
      description:
        "When the total of your attack roll is 20 or higher and exceeds the target number by at least 5, the attack deals 1d6 extra damage.",
      level: 2,
    },

    {
      name: "Fury Unleashed",
      description:
        "If gaining Insanity would cause you to go mad, you go berserk instead, even if you are fatigued. While you are berserk in this way, the GM controls your character. At the end of each round, the GM rolls a d6. On a 5 or higher, you stop being berserk and reduce your Insanity total by 1d6 + your Will modifier (minimum 0). You then become fatigued for 1 minute. If you were already fatigued, you instead take 1d6 damage.",
      level: 3,
    },
    {
      name: "Iron Hide",
      description:
        " You have a +1 bonus to Defense if you are not wearing medium or heavy armor.",
      level: 3,
    },
  ],
  spells: [],
  items: {
    weapons: [
      {
        name: "Greataxe",
        damage: "3d6",
        hands: "two",
        properties: "Cumbersome",
        type: "Heavy",
        price: "2 gc",
        availability: "R",
      },
    ],
    armor: [
      {
        name: "Mail",
        value: "16",
        type: "Mail",
        price: "1 gc",
        availability: "U",
      },
    ],
    magicItems: [],
    other: [
      {
        name: "Backpack",
        description: "You can carry stuff ",
        price: "1 cc",
        availability: "U",
      },
    ],
    money: {
      bits: 0,
      copper: 15,
      silver: 0,
      gold: 0,
    },
  },
};

export default characterData;
