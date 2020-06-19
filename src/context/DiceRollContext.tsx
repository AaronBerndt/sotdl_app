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
  makeAttackRoll: () => {},
  makeDamageRoll: () => {},
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
    },
    rollAttackRoll,
    rollDamageRoll,
  } = useDice();

  const addBoons = () => dispatch({ type: "add boon" });
  const addBanes = () => dispatch({ type: "add bane" });
  const resetBBCount = () => dispatch({ type: "reset" });

  const makeChallengeRoll = (
    rollReason: string,
    boonAmount: number,
    baneAmount: number
  ) => rollAttackRoll(rollReason, "Chollenge", boonAmount, baneAmount);

  const makeAttackRoll = (
    rollReason: string,
    boonAmount: number,
    baneAmount: number
  ) => rollAttackRoll(rollReason, "Attack", boonAmount, baneAmount);

  return (
    <DiceRollContext.Provider
      value={{
        modifier: 0,
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
        makeDamageroll: rollDamageRoll,
      }}
    >
      {children}
    </DiceRollContext.Provider>
  );
}

export default DiceRollContext;
