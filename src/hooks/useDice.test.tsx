import { renderHook, act } from "@testing-library/react-hooks";
import useDice from "./useDice";

describe("useDice test", () => {
  const createAttackRollTest = (testName: string, bane: number, boon: number) =>
    it(testName, () => {
      const { result } = renderHook(() => useDice());

      act(() => {
        result.current.rollAttackRoll(1, bane, boon);
      });

      expect(typeof result.current.diceResult === "number").toBe(true);
    });

  const createDamageRoll = (
    testName: string,
    diceNumber: number,
    type: string,
    extraDamage: number
  ) =>
    it(testName, () => {
      const { result } = renderHook(() => useDice());

      act(() => {
        result.current.rollDamageRoll(1, type, extraDamage);
      });

      expect(typeof result.current.diceResult === "number").toBe(true);
    });

  createAttackRollTest("No Banes/Boones", 0, 0);
  createAttackRollTest("One Boon", 1, 0);
  createAttackRollTest("One Bane", 0, 1);
  createAttackRollTest("Mutiple Boon", 2, 0);
  createAttackRollTest("Mutiple Bane", 0, 2);
  createDamageRoll("one d6 no extraDamage", 1, "d6", 0);
  createDamageRoll("one d6 with extraDamage", 1, "d6", 1);
  createDamageRoll("Two d6 no extraDamage", 2, "d6", 0);
  createDamageRoll("Two d6 with extraDamage", 2, "d3", 1);
  createDamageRoll("one d3 no extraDamage", 1, "d3", 0);
  createDamageRoll("one d3 with extraDamage", 1, "d3", 1);
  createDamageRoll("Two d3 no extraDamage", 2, "d3", 0);
  createDamageRoll("Two d3 with extraDamage", 2, "d3", 1);
});
