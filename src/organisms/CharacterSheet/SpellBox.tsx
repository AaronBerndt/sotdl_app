import React, { useState } from "react";
import { FilterTextField } from "../../atoms";
import { SpellList } from "../../molecules";

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

function SpellBox({ spellArray, power }: SpellListProps) {
  const castings = castingObject[power];
  const [filteredSpellList, setFilteredSpellList] = useState(spellArray);

  const onChange = (e: any) => {
    const inputValue = e.target.value;

    const newList = spellArray.filter(
      (spell: any) =>
        spell.name.includes(inputValue) || spell.type.includes(inputValue)
    );

    setFilteredSpellList(inputValue.length !== 0 ? newList : spellArray);
  };

  return (
    <>
      <FilterTextField
        label="Filter By Spell Name | Type | Level"
        onChangeFunction={onChange}
      />
      <>
        <SpellList spellArray={filteredSpellList} castings={castings} />
      </>
    </>
  );
}

export default SpellBox;
