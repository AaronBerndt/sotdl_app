import React, { createContext, useState } from "react";

interface BuildCharacterContextType {
  name: string;
  setName: any;
  description: string;
  level: number;
  setLevel: any;
  ancestry: string;
  setAncestry: any;
  novicePath: string;
  expertPath: string;
  masterPath: string;
  languages: any;
  profession: any;
  characteristics: any;
  features: any;
  spells: any;
  items: any;
}

const BuildCharacterContext = createContext<any>(
  {} as BuildCharacterContextType
);

export function BuildCharacterProvider({ children }: any) {
  const [name, setName] = useState("");
  const [ancestry, setAncestry] = useState("");
  const [level, setLevel] = useState(0);
  const [novicePath, setNovicePath] = useState("");
  const [expertPath, setExpertPath] = useState("");
  const [masterPath, setMasterPath] = useState("");
  return (
    <BuildCharacterContext.Provider
      value={{
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
      }}
    >
      {children}
    </BuildCharacterContext.Provider>
  );
}

export default BuildCharacterContext;
