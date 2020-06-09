import React from "react";
import { AttributeBox } from "../../molecules";
import {
  filterByLevelAndName,
  filterByLevelAndMutiple,
  sumArray,
} from "../../utilities";

interface CharacteristicsBoxProps {
  characteristicsArray: any;
  level: number;
  onClickFuncion: any;
}

function CharacteristicsBox({
  characteristicsArray,
  level,
  onClickFuncion,
}: CharacteristicsBoxProps) {
  const characteristicsWithModsArray = [
    "Strength",
    "Agility",
    "Intellect",
    "Will",
  ];
  /* const characteristicsWithoutModsArray = [ */
  /*   "Speed", */
  /*   "Size", */
  /*   "Power", */
  /*   "Corruption", */
  /*   "Insanity", */
  /* ]; */

  return (
    <>
      {characteristicsWithModsArray.map((name, i) => {
        return (
          <AttributeBox
            name={name}
            value={sumArray(
              filterByLevelAndName(characteristicsArray, name, level).map(
                ({ value }) => value
              )
            )}
            onClickFuncion={onClickFuncion}
            withMod={true}
            withNoRoll={false}
          />
        );
      })}
      <AttributeBox
        name="Perception"
        value={sumArray(
          filterByLevelAndMutiple(
            characteristicsArray,
            ["Intellect", "Perception"],
            level
          ).map(({ value }) => value)
        )}
        onClickFuncion={onClickFuncion}
        withMod={true}
        withNoRoll={false}
      />
      <AttributeBox
        name="Health"
        value={sumArray(
          filterByLevelAndMutiple(
            characteristicsArray,
            ["Strength", "Health"],
            level
          ).map(({ value }) => value)
        )}
        onClickFuncion={onClickFuncion}
        withMod={false}
        withNoRoll={false}
      />
      <AttributeBox
        name="Healing Rate"
        value={Math.floor(
          sumArray(
            filterByLevelAndMutiple(
              characteristicsArray,
              ["Strength", "Health"],
              level
            ).map(({ value }) => value)
          ) / 4
        )}
        onClickFuncion={onClickFuncion}
        withMod={false}
        withNoRoll={false}
      />
    </>
  );
}

export default CharacteristicsBox;
