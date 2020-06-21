import { useState, useCallback } from "react";
import { isZero, sumArray } from "../utilities";

function useDice() {
  const [result, setResult] = useState({
    rollReason: "",
    rollType: "",
    diceResult: 0,
    boonResult: 0,
    baneResult: 0,
    modifier: 0,
    extraNumber: 0,
  });

  const rollDice = (sides: number) => {
    const result = Math.floor(Math.random() * sides) + 1;
    return result;
  };

  const rollMutipleDice = (type: string, amount: number) =>
    [...Array(amount).keys()].map(() => rollDice(type === "d6" ? 6 : 3));

  return {
    diceResult: result,
    rollAttackRoll: useCallback(
      (rollReason, rollType, boonAmount, baneAmount, modifier) => {
        const d20Result = rollDice(20);
        const amountIsZero = (amount) =>
          isZero(amount) ? 0 : Math.max(...rollMutipleDice("d6", amount));

        const boonResult = amountIsZero(boonAmount);
        const baneResult = amountIsZero(baneAmount);

        setResult({
          rollReason,
          rollType,
          diceResult: d20Result,
          boonResult,
          modifier,
          baneResult,
          extraNumber: 0,
        });
      },
      []
    ),

    rollDamageRoll: useCallback(
      (rollReason, rollType, amount, diceType, extraNumber) => {
        const diceSum = sumArray(
          rollMutipleDice(diceType, parseInt(amount, 10))
        );

        setResult({
          rollReason,
          rollType,
          diceResult: diceSum,
          extraNumber: parseInt(extraNumber, 10),
          baneResult: 0,
          boonResult: 0,
        });
      },
      []
    ),
    clearResult: useCallback(() => {
      setResult({
        rollReason: "",
        rollType: "",
        diceResult: 0,
        extraNumber: 0,
        baneResult: 0,
        boonResult: 0,
      });
    }, []),
  };
}

export default useDice;
