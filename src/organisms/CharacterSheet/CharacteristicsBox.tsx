import React from "react";
import { AttributeBox } from "../../molecules";

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
      {characteristicsArray.map(({ name, value }, i: any) => {
        return (
          <div key={i}>
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
          </div>
        );
      })}
    </>
  );
}

export default CharacteristicsBox;
