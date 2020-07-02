import React, { createContext } from "react";

const BuildCharacterContext = createContext<any>({
  name: "",
  description: "",
  level: 0,
  ancestry: "",
  novicePath: "",
  expertPath: "",
  masterPath: "",
  languages: [],
  profession: [],
  features: [],
  spells: [],
  items: {},
});

export default BuildCharacterContext;
