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
  onClickFuncion,
}: CharacteristicsBoxProps) {
  return (
    <>
      {characteristicsArray.map(({ name, value }, i) => {
        return (
          <>
            {name === "Speed" ? (
              <AttributeBox
                name={name}
                value={value}
                onClickFuncion={onClickFuncion}
                withMod={false}
                withNoRoll={true}
              />
            ) : (
              <AttributeBox
                name={name}
                value={value}
                onClickFuncion={onClickFuncion}
                withMod={true}
                withNoRoll={false}
              />
            )}
          </>
        );
      })}
    </>
  );
}

export default CharacteristicsBox;
