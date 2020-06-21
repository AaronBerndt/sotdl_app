import React, { createContext, useState } from "react";

/* interface Money { */
/*   bits: number; */
/*   copper: number; */
/*   silver: number; */
/*   gold: number; */
/* } */

/* interface Items { */
/*   weapons: Array<any>; */
/*   armor: Array<any>; */
/*   other: Array<any>; */
/*   money: Array<any>; */
/* } */

/* interface CharacterData { */
/*   name: string; */
/*   description: string; */
/*   level: number; */
/*   ancestry: string; */
/*   novicePath: string; */
/*   expertPath: string; */
/*   masterPath: string; */
/*   languages: Array<string>; */
/*   profession: Array<string>; */

/*   characteristics: { */
/*     strength: number; */
/*     agility: number; */
/*     intellect: number; */
/*     will: number; */
/*     perception: number; */
/*     health: number; */
/*     size: number; */
/*     speed: number; */
/*     power: number; */
/*     insanity: number; */
/*     corruption: number; */
/*   }; */

/*   features: Array<any>; */
/*   spells: Array<any>; */
/*   items: any; */
/* } */

/* const ChracaterPageContext = createContext(() => { */
/*   const [name, setName] = useState(""); */
/*   const [description, setDescription] = useState(""); */
/*   const [level, setLevel] = useState(0); */
/*   const [ancestry, setAncestry] = useState(""); */
/*   const [novicePath, setNovicePath] = useState(""); */
/*   const [expertPath, setExpertPath] = useState(""); */
/*   const [masterPath, setMasterPath] = useState(""); */
/*   const [languages, setLanguages] = useState(""); */
/*   const [profession, setProfession] = useState(""); */
/*   const [strength, setStrength] = useState(""); */
/*   const [agility, setAgility] = useState(""); */
/*   const [intellect, setIntellect] = useState(""); */
/*   const [will, setWill] = useState(""); */
/*   const [perception, setPerception] = useState(""); */
/*   const [health, setHealth] = useState(""); */
/*   const [size, setSize] = useState(""); */
/*   const [speed, setSpeed] = useState(""); */
/*   const [power, setPower] = useState(""); */
/*   const [insanity, setInsanity] = useState(""); */
/*   const [corruption, setCorruption] = useState(""); */
/*   /1* const [features, setFeatures] = useState(""); *1/ */
/*   /1* const [spells, setSpells] = useState(""); *1/ */
/*   /1* const [items, setItems] = useState(""); *1/ */

/*   return { */
/*     name, */
/*     setName, */
/*     description, */
/*     setDescription, */
/*     level, */
/*     setLevel, */
/*     ancestry, */
/*     setAncestry, */
/*     novicePath, */
/*     setNovicePath, */
/*     expertPath, */
/*     setExpertPath, */
/*     masterPath, */
/*     setMasterPath, */
/*     languages, */
/*     setLanguages, */
/*     profession, */
/*     setProfession, */
/*     strength, */
/*     setStrength, */
/*     agility, */
/*     setAgility, */
/*     intellect, */
/*     setIntellect, */
/*     will, */
/*     setWill, */
/*     perception, */
/*     setPerception, */
/*     health, */
/*     setHealth, */
/*     size, */
/*     setSize, */
/*     speed, */
/*     setSpeed, */
/*     power, */
/*     setPower, */
/*     insanity, */
/*     setInsanity, */
/*     corruption, */
/*     setCorruption, */
/*   }; */
/* }); */

const ChracaterPageContext = createContext({
  name: "",
  description: "",
  level: 0,
  ancestry: "",
  novicePath: "",
  expertPath: "",
  masterPath: "",
  languages: [],
  profession: [],
  strength: 0,
  agility: 0,
  intellect: 0,
  will: 0,
  perception: 0,
  health: 0,
  size: 0,
  speed: 0,
  power: 0,
  insanity: 0,
  corruption: 0,
  features: [],
  spells: [],
  items: {},
  spellsCast: [],
});
export default ChracaterPageContext;
