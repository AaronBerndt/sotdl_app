import React from "react";
import CharacterContext from "../context/CharacterContext";
import DiceRollContext from "../context/DiceRollContext";

export const withCharacterContext = (children, context) => {
  console.log(context);
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
