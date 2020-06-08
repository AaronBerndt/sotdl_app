const ancestriesData = [
  {
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
  },
  {
    name: "Orc",
    description:
      "Long believed to be the perfect soldiers, the orcs have thrown off slavery’s shackles and risen up against their imperial masters in a war that threatens to drown the Empire in blood.",
    languages: "Common, Dark Speech",
    professions: "Common",
    features: [
      {
        name: "Shadowsight",
        description:
          "You see in areas obscured by shadows as if those areas were lit.",
        level: 0,
      },
      {
        name: "Rising Fury",
        description:
          "When you take damage, you make your next attack roll before the end of the next round with 1 boon",
        level: 4,
      },
    ],
    characteristics: [
      { name: "Strength", value: 11, level: 0 },
      { name: "Agility", value: 10, level: 0 },
      { name: "Intellect", value: 9, level: 0 },
      { name: "Will", value: 9, level: 0 },
      { name: "Perception", value: 1, level: 0 },
      { name: "Size", value: 1, level: 0 },
      { name: "Speed", value: 12, level: 0 },
      { name: "Corruption", value: 1, level: 0 },

      {
        name: "Health",
        value: 6,
        level: 4,
      },
    ],
  },
];
const pathData = [
  {
    name: "Warrior",
    type: "Novice",
    description:
      "Extensive training with weapons and studying numerous fighting styles teach warriors how to fight and survive on the battlefield. Their skills depend on being physically fit, quick and nimble, or a combination of both. Upon completing their training, warriors can pick up and fight with almost any weapon, striking with greater precision and greater force than anyone else. Although all warriors know how to fight, they distinguish themselves by the weapons they wield. Some favor archery and put their focus on ranged weapons. Others fight with swords and axes, using their might to overcome their foes. Others still favor swift weapons, slipping rapier or saber strikes through their enemies’ defenses. Warriors come from all backgrounds. They are howling barbarians tumbling out from the depth of the wilderness, veteran soldiers marching in the Empire’s armies, hard-bitten mercenaries, mystics who transform their bodies into weapons, or anyone else who knows how to win battles through superior skill at arms.",
    attributes: "+1 to two",
    professions: "You add one common, martial, or wilderness profession.",
    features: [
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
        name: "Combat Expertise",
        description:
          "When you use an action to attack with a weapon, you either deal 1d6 extra damage with that attack or make another attack against a different target at any point before the end of your turn.",
        level: 5,
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
    ],
    characteristics: [
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
        value: 5,
        level: 5,
      },
      {
        name: "Defense",
        value: 5,
        level: 5,
      },
      {
        name: "Health",
        value: 5,
        level: 8,
      },
    ],
  },
  {
    name: "Berserker",
    type: "Expert",
    description:
      "A vital energy for those in the thick of battle, anger enables a combatant to push through extreme pain and injury in order to return it twofold to those who dealt it. For berserkers, anger is more than just an emotion: it is a living thing always raging within them, desperate to be unleashed, always rattling the cage of self-control containing it. So when a berserker’s temper slips—even by a little—all the rage, hatred, and frustration boils out to transform the warrior into a wild killer, a bloodthirsty brute seeking nothing but the utter destruction of any foe who dares to stand before them. The transformative power of a berserker’s rage might come from a variety of sources. Many are simply unbalanced, having witnessed so many awful things that they now snap under the pressure. Some have divine or supernatural causes for their anger; for example, dwarf berserkers believe they are taken over by one of their ancestor spirits. Others might be haunted by spirits or, worse, demons, and when they surrender to their anger, the entity haunting or possessing them takes over.",
    attributes: "+1 to two",
    professions: "",
    features: [
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
        name: "Ferocious Wrath",
        description:
          "While you are berserk, you have a +2 bonus to Speed and you make attack rolls against frightened targets with 1 boon.",
        level: 6,
      },
      {
        name: "Reckless Strike",
        description:
          "When you attack with a melee weapon, you can choose to make the attack roll with 1 bane to deal 2d6 extra damage on a success.",
        level: 9,
      },
    ],
    characteristics: [
      {
        name: "Health",
        value: 6,
        level: 3,
      },
      {
        name: "Health",
        value: 6,
        level: 6,
      },
      {
        name: "Health",
        value: 6,
        level: 9,
      },
    ],
  },
  {
    name: "Blade",
    type: "Master",
    description:
      "Blades are master knife-fighters. Quick and precise strikes pierce their enemies’ defenses and deliver painful, bleeding wounds. Many blades have criminal backgrounds, developing their techniques after long use of these concealable weapons.",
    attributes: "+1 to two",
    professions: "You can speak anotherlanguage or add a profession.",
    features: [
      {
        name: "Bleed",
        description:
          "Your attacks with daggers, knives, and similar off-hand weapons can leave bleeding wounds. When the total of your attack roll is 20 or higher with such a weapon and exceeds the target number by at least 5, the target suffers a bleeding wound that lasts until the target heals damage or until a creature uses an action to stanch the wound. While suffering from the wound, the target is fatigued and takes 1d6 extra damage at the end of each round.",
        level: 7,
      },
      {
        name: "Swift Blade",
        description:
          "You can use a triggered action on your turn to attack with a dagger or knife.",
        level: 7,
      },
    ],
    characteristics: [
      {
        name: "Health",
        value: 4,
        level: 7,
      },
      {
        name: "Health",
        value: 4,
        level: 10,
      },
    ],
  },
];
export { ancestriesData, pathData };
