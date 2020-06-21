import React, { createContext, useReducer } from "react";
import { useDice } from "../hooks";
const DiceRollContext = createContext({
  modifier: 0,
  rollReason: "",
  rollType: "",
  diceResult: 0,
  extraNumber: 0,
  baneResult: 0,
  boonResult: 0,
  boonAmount: 0,
  baneAmount: 0,
  addBoons: () => {},
  addBanes: () => {},
  resetBBCount: () => {},
  makeChallengeRoll: () => {},
  clearResult: () => {},
  makeAttackRoll: (rollReason, boonAmount, baneAmount, modifier) =>
    console.log("null"),
  rollDamageRoll: (rollReason, boonAmount, baneAmount, modifier) =>
    console.log("nulll"),
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

  const {
    diceResult: {
      rollReason,
      rollType,
      diceResult,
      extraNumber,
      baneResult,
      boonResult,
      modifier,
    },
    rollAttackRoll,
    rollDamageRoll,
    clearResult,
  } = useDice();

  const addBoons = () => dispatch({ type: "add boon" });
  const addBanes = () => dispatch({ type: "add bane" });
  const resetBBCount = () => dispatch({ type: "reset" });

  const makeChallengeRoll = (
    rollReason: string,
    boonAmount: number,
    baneAmount: number,
    modifier: number
  ) =>
    rollAttackRoll(rollReason, "Challenge", boonAmount, baneAmount, modifier);

  const makeAttackRoll = (
    rollReason: string,
    boonAmount: number,
    baneAmount: number,
    modifier: number
  ) => rollAttackRoll(rollReason, "Attack", boonAmount, baneAmount, modifier);

  return (
    <DiceRollContext.Provider
      value={{
        modifier,
        rollReason,
        rollType,
        diceResult,
        extraNumber,
        baneResult,
        boonResult,
        baneAmount,
        boonAmount,
        addBoons,
        addBanes,
        resetBBCount,
        makeAttackRoll,
        makeChallengeRoll,
        rollDamageRoll,
        clearResult,
      }}
    >
      {children}
    </DiceRollContext.Provider>
  );
}

export default DiceRollContext;
