const mockCharacter = (level) => [
  {
    name: "Ordo",
    description: "Murder Hobo",
    level,
    ancestry: "Dwarf",
    novicePath: level >= 1 ? "Warrior" : "",
    expertPath: level >= 3 ? "Berserker" : "",
    masterPath: level >= 7 ? "Death Dealer" : "",
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
      {
        name: "Power",
        value: 2,
        level: 3,
      },

      { name: "Strength", value: 1, level: 1 },
      { name: "Will", value: 1, level: 1 },
      { name: "Strength", value: 1, level: 3 },
      { name: "Will", value: 1, level: 3 },
      { name: "Health", value: 6, level: 5 },
      { name: "Defense", value: 1, level: 5 },
      { name: "Health", value: 6, level: 6 },
      { name: "Strength", value: 1, level: 7 },
      { name: "Agility", value: 1, level: 7 },
      { name: "Health", value: 6, level: 7 },
      { name: "Health", value: 6, level: 8 },
      { name: "Health", value: 6, level: 9 },
      { name: "Health", value: 6, level: 10 },
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
      {
        name: "Combat Expertise",
        description:
          "When you use an action to attack with a weapon, you either deal 1d6 extra damage with that attack or make another attack against a different target at any point before the end of your turn.",
        level: 5,
      },
      {
        name: "Ferocious Wrath",
        description:
          "While you are berserk, you have a +2 bonus to Speed and you make attack rolls against frightened targets with 1 boon.",
        level: 6,
      },
      {
        name: "Frightful Wrath",
        description:
          "When you go berserk, each creature within short range who is not a member of your group must get a success on a Will challenge roll or become frightened for 1 round.",
        level: 6,
      },
      {
        name: "Brutal Swing",
        description:
          "When you incapacitate a creature with an attack using a heavy weapon, you can use a triggered action to attack with the same weapon at any point before the end of your turn.",
        level: 7,
      },
      {
        name: "Grit",
        description: "You can use Catch Your Breath twice between each rest.",
        level: 8,
      },

      {
        name: "Combat Mastery",
        description:
          "When you use an action to attack with a weapon, you either deal 1d6 extra damage with that attack or make another attack against a different target at any point before the end of your turn. This talent is cumulative with Combat Expertise. You must choose a different target for each attack you make.",
        level: 8,
      },
      {
        name: "Reckless Strike",
        description:
          "When you attack with a melee weapon,you can choose to make the attack roll with 1 bane to deal 2d6 extra damage on a success.",
        level: 9,
      },
      {
        name: "Make Mountains of the Dead",
        description:
          "You can use an action to sweep your heavy weapon around you in a lethal arc. Choose any number of target creatures within 1 yard of you. A target with Health 20 or less takes damage equal to its Health.",
        level: 10,
      },
    ],
    spells: [
      {
        name: "Flense",
        tradition: "Air",
        attribute: "Will",
        type: "Attack",
        level: 1,
        damage: "2d6 + 3",
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
      },
    ],
    items: {
      weapons: [
        {
          name: "Greataxe",
          damage: "3d6",
          hands: "two",
          properties: [
            {
              name: "Cumbersome",
            },
          ],
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
    characterState: {
      currentDamage: 0,
      spellsCast: [
        {
          name: "Flense",
          uses: 0,
        },
      ],
    },
  },
];

export default mockCharacter;
