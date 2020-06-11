import React from "react";
import { SpellTable } from "../../atoms";
import { filterByNumber } from "../../utilities";

interface SpellListProps {
  spellArray: any;
  power: number;
}

const createCastingObject = (castArray: Array<number>) =>
  castArray.map((castNumber, i) => ({ [i]: castNumber }));
const castingObject = {
  0: createCastingObject([1]),
  1: createCastingObject([2, 1]),
  2: createCastingObject([3, 2, 1]),
  3: createCastingObject([4, 2, 1, 1]),
  4: createCastingObject([5, 2, 2, 1, 1]),
  5: createCastingObject([6, 3, 2, 2, 2, 1, 1]),
  6: createCastingObject([7, 3, 2, 2, 2, 1, 1]),
  7: createCastingObject([8, 3, 3, 2, 2, 2, 1, 1, 1]),
  8: createCastingObject([9, 3, 3, 2, 2, 2, 1, 1, 1]),
  9: createCastingObject([10, 3, 3, 3, 2, 2, 1, 1, 1, 1]),
  10: createCastingObject([11, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1]),
};

function SpellList({ spellArray, power }: SpellListProps) {
  const castings = castingObject[power];

  const onClick = () => console.log("Hello WOrld");
  return (
    <>
      {castings.map((castObject: any, i: number) => (
        <>
          <p>{`Level ${i}`}</p>
          <SpellTable
            spellArray={filterByNumber(spellArray, i)}
            casting={castObject[i]}
            onClickFuncion={() => onClick}
          />
        </>
      ))}
    </>
  );
}

export default SpellList;
