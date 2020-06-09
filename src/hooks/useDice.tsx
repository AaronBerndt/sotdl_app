import { useState, useCallback } from "react";

function useDice() {
  const [result, setResult] = useState(0);

  const rollDice = (sides: number) => {
    const result = Math.floor(Math.random() * sides) + 1;
    return result;
  };

  const rollD6 = rollDice(6);
  const rollD20 = rollDice(20);

  const rollMutipleDice = (type: string, amount: number) =>
    Array(amount).map(() => (type === "d20" ? rollD20 : rollD6));

  const getDiceTotal = (array: any) =>
    array.reduce(
      (previousValue: number, currentValue: number) =>
        currentValue + previousValue,
      0
    );

  return {
    diceResult: result,
    rollAttackRoll: useCallback((modifier, boonAmount, baneAmount) => {
      const d20Result = rollD20;
      const boonResult = Math.max(...rollMutipleDice("d6", boonAmount));
      const baneResult = Math.max(...rollMutipleDice("d6", baneAmount));
      setResult(d20Result + boonResult - baneResult + modifier);
    }, []),
    rollDamageRoll: useCallback((number, extraDamage) => {
      const diceSum = getDiceTotal(rollMutipleDice("d6", number));
      setResult(diceSum + extraDamage);
    }, []),
  };
}

export default useDice;
