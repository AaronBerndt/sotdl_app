import React from "react";
import { SpellTable } from "../../atoms";
import { filterByNumber } from "../../utilities";

interface SpellListProps {
  spellArray: any;
  castings: any;
  onClickFuncion: any;
}

function SpellList({ spellArray, castings, onClickFuncion }: SpellListProps) {
  return (
    <>
      {castings.map((castObject: any, i: number) => (
        <>
          <p>{`Level ${i}`}</p>
          <SpellTable
            spellArray={filterByNumber(spellArray, i)}
            casting={castObject[i]}
            onClickFuncion={onClickFuncion}
          />
        </>
      ))}
    </>
  );
}

export default SpellList;
