import React from "react";
import { SpellTable } from "../../atoms";
import { filterByNumber } from "../../utilities";

interface SpellListProps {
  spellArray: any;
  castings: any;
}

function SpellList({ spellArray, castings }: SpellListProps) {
  return (
    <>
      {castings.map((castObject: any, i: number) => (
        <>
          <p>{`Level ${i}`}</p>
          <SpellTable
            spellArray={filterByNumber(spellArray, i)}
            casting={castObject[i]}
            onClickFuncion={() => null}
          />
        </>
      ))}
    </>
  );
}

export default SpellList;
