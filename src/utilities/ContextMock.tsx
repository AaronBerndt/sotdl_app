import React from "react";
import CharacterContext from "../context/CharacterContext";
import DiceRollContext from "../context/DiceRollContext";
import BuildCharacterContext from "../context/BuildCharacterContext";

export const withCharacterContext = (children, context) => {
  return (
    <CharacterContext.Provider value={context}>
      {children}
    </CharacterContext.Provider>
  );
};

export const withDiceRollCointext = (children, context) => {
  return (
    <DiceRollContext.Provider value={context}>
      {children}
    </DiceRollContext.Provider>
  );
};

export const withBuildCharacterContext = (children, context) => {
  return (
    <BuildCharacterContext.Provider value={context}>
      {children}
    </BuildCharacterContext.Provider>
  );
};
