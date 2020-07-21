import React, { createContext, useState } from "react";

interface BuildCharacterContextType {
  ancestryList: any;
  setAncestryList: any;
  pathList: any;
  setPathList: any;
  name: string;
  setName: any;
  description: string;
  level: number;
  setLevel: any;
  ancestry: string;
  startingScores: any;
  setStartingScores: any;
  setAncestry: any;
  novicePath: string;
  expertPath: string;
  masterPath: string;
  languages: any;
  profession: any;
  characteristics: any;
  setCharacteristics: any;
  features: any;
  spells: any;
  traditions: any;
  items: any;
}

const BuildCharacterContext = createContext<any>(
  {} as BuildCharacterContextType
);

export function BuildCharacterProvider({ children }: any) {
  const [ancestryList, setAncestryList] = useState([]);
  const [pathList, setPathList] = useState([]);
  const [name, setName] = useState("");
  const [ancestry, setAncestry] = useState("");
  const [level, setLevel] = useState(0);
  const [novicePath, setNovicePath] = useState("");
  const [expertPath, setExpertPath] = useState("");
  const [masterPath, setMasterPath] = useState("");
  const [features, setFeatures] = useState([]);
  const [startingScores, setStartingScores] = useState({
    strength: 0,
    agility: 0,
    will: 0,
    intellect: 0,
  });
  const [characteristics, setCharacteristics] = useState([]);
  const [spells, setSpells] = useState([]);
  const [traditions, setTraditions] = useState([]);
  const [items, setItems] = useState({
    weapons: [],
    armor: [],
    magicItems: [],
    other: [],
    money: {
      bits: 0,
      copper: 0,
      silver: 0,
      gold: 0,
    },
  });
  return (
    <BuildCharacterContext.Provider
      value={{
        ancestryList,
        setAncestryList,
        pathList,
        setPathList,
        name,
        setName,
        ancestry,
        setAncestry,
        level,
        setLevel,
        novicePath,
        setNovicePath,
        expertPath,
        setExpertPath,
        masterPath,
        setMasterPath,
        features,
        setFeatures,
        startingScores,
        setStartingScores,
        characteristics,
        setCharacteristics,
        spells,
        setSpells,
        traditions,
        setTraditions,
        items,
        setItems,
      }}
    >
      {children}
    </BuildCharacterContext.Provider>
  );
}

export default BuildCharacterContext;

