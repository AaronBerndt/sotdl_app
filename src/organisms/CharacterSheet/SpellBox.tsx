import React, { useState, useContext } from "react";
import { FilterTextField } from "../../atoms";
import { SpellList } from "../../molecules";
import ChracaterPageContext from "../../context/CharacterContext";
import { lengthIsZero } from "../../utilities";

function SpellBox() {
  const { spells } = useContext(ChracaterPageContext);
  const [filteredSpellList, setFilteredSpellList] = useState(spells);

  console.log(spells);
  const onChange = (e: any) => {
    const inputValue = e.target.value;

    const newList = spells.filter(
      (spell: any) =>
        spell.name.includes(inputValue) || spell.type.includes(inputValue)
    );

    setFilteredSpellList(inputValue.length !== 0 ? newList : spells);
  };

  return (
    <div hidden={lengthIsZero(spells)}>
      <FilterTextField
        label="Filter By Spell Name | Type | Level"
        onChangeFunction={onChange}
      />
      <>
        <SpellList spellArray={filteredSpellList} onClickFuncion={() => null} />
      </>
    </div>
  );
}

export default SpellBox;
