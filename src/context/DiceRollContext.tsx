import React, { createContext, useReducer } from "react";
import { useDice } from "../hooks";
const DiceRollContext = createContext({
  diceResult: 0,
  boonAmount: 0,
  baneAmount: 0,
  addBoons: () => {},
  addBanes: () => {},
  resetBBCount: () => {},
});

interface DiceRollProviderProps {
  children: any;
}

export function DiceRollProvider({ children }: any) {
  function reducer(state, action) {
    const actionObject = {
      "add boon": () => ({ boonAmount: state.boonAmount + 1, baneAmount: 0 }),
      "add bane": () => ({ boonAmount: 0, baneAmount: state.baneAmount + 1 }),
      reset: () => ({ boonAmount: 0, baneAmount: 0 }),
    };
    return actionObject[action.type]();
  }

  const [{ boonAmount, baneAmount }, dispatch] = useReducer(reducer, {
    boonAmount: 0,
    baneAmount: 0,
  });

  const addBoons = () => dispatch({ type: "add boon" });
  const addBanes = () => dispatch({ type: "add bane" });
  const resetBBCount = () => dispatch({ type: "reset" });

  const { diceResult } = useDice();

  return (
    <DiceRollContext.Provider
      value={{
        diceResult: 0,
        baneAmount,
        boonAmount,
        addBoons,
        addBanes,
        resetBBCount,
      }}
    >
      {children}
    </DiceRollContext.Provider>
  );
}

export default DiceRollContext;
