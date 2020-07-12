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
  const [startingScores, setStartingScores] = useState({
    strength: 0,
    agility: 0,
    will: 0,
    intellect: 0,
  });
  const [characteristics, setCharacteristics] = useState([]);
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
        startingScores,
        setStartingScores,
        characteristics,
        setCharacteristics,
      }}
    >
      {children}
    </BuildCharacterContext.Provider>
  );
}

export default BuildCharacterContext;

