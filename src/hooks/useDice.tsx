import { useState, useCallback } from "react";
import { isZero, sumArray } from "../utilities";

function useDice() {
  const [result, setResult] = useState({
    diceResult: 0,
    boonResult: 0,
    baneResult: 0,
  });

  const rollDice = (sides: number) => {
    const result = Math.floor(Math.random() * sides) + 1;
    return result;
  };

  const rollMutipleDice = (type: string, amount: number) =>
    [...Array(amount).keys()].map(() => rollDice(type === "d6" ? 6 : 3));

  return {
    diceResult: result,
    rollAttackRoll: useCallback((boonAmount, baneAmount) => {
      const d20Result = rollDice(20);
      const amountIsZero = (amount) =>
        isZero(amount) ? 0 : Math.max(...rollMutipleDice("d6", amount));

      const boonResult = amountIsZero(boonAmount);
      const baneResult = amountIsZero(baneAmount);

      setResult({
        diceResult: d20Result,
        boonResult,
        baneResult,
      });
    }, []),

    rollDamageRoll: useCallback((number, type) => {
      const diceSum = sumArray(rollMutipleDice(type, number));
      setResult({
        diceResult: diceSum,
        boonResult: 0,
        baneResult: 0,
      });
    }, []),
  };
}

export default useDice;
