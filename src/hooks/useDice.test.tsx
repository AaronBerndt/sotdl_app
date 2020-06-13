import { renderHook, act } from "@testing-library/react-hooks";
import useDice from "./useDice";

describe("useDice test", () => {
  const createAttackRollTest = (testName: string, bane: number, boon: number) =>
    it(testName, () => {
      const { result } = renderHook(() => useDice());

      act(() => {
        result.current.rollAttackRoll(bane, boon);
      });
      expect(typeof result.current.diceResult === "object").toBe(true);
    });

  const createDamageRoll = (
    testName: string,
    diceNumber: number,
    type: string
  ) =>
    it(testName, () => {
      const { result } = renderHook(() => useDice());

      act(() => {
        result.current.rollDamageRoll(diceNumber, type);
      });

      expect(typeof result.current.diceResult === "object").toBe(true);
    });

  createAttackRollTest("No Banes/Boones", 0, 0);
  createAttackRollTest("One Boon", 1, 0);
  createAttackRollTest("One Bane", 0, 1);
  createAttackRollTest("Mutiple Boon", 2, 0);
  createAttackRollTest("Mutiple Bane", 0, 2);
  createDamageRoll("one d6 no extraDamage", 1, "d6");
  createDamageRoll("one d6 with extraDamage", 1, "d6");
  createDamageRoll("Two d6 no extraDamage", 2, "d6");
  createDamageRoll("Two d6 with extraDamage", 2, "d3");
  createDamageRoll("one d3 no extraDamage", 1, "d3");
  createDamageRoll("one d3 with extraDamage", 1, "d3");
  createDamageRoll("Two d3 no extraDamage", 2, "d3");
  createDamageRoll("Two d3 with extraDamage", 2, "d3");
});
