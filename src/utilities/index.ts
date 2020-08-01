import {
  filterByLevelAndName,
  filterByLevel,
  filterByNumber,
  filterByLevelAndMutiple,
  filterByName,
  filterByProperties,
} from "./filterUtil";
import sumArray from "./sumArray";
import mockCharacter from "./CharacterMock";

import {
  withCharacterContext,
  withDiceRollCointext,
  withBuildCharacterContext,
} from "./ContextMock";
import {
  isZero,
  lengthIsZero,
  lengthIsOne,
  notZeroAndUndefined,
} from "./Logic";

export {
  filterByLevelAndName,
  filterByLevel,
  filterByLevelAndMutiple,
  filterByName,
  filterByNumber,
  filterByProperties,
  sumArray,
  isZero,
  lengthIsZero,
  lengthIsOne,
  mockCharacter,
  notZeroAndUndefined,
  withDiceRollCointext,
  withCharacterContext,
  withBuildCharacterContext,
};

