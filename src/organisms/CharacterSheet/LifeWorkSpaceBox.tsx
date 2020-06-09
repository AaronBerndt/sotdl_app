import React from "react";
import { AttributeBox } from "../../molecules";
import {
  filterByLevelAndName,
  filterByLevelAndMutiple,
  sumArray,
} from "../../utilities";

interface LifeWorkSpaceBoxProps {
  characteristicsArray: any;
  level: number;
  onClickFuncion: any;
}

function LifeWorkSpaceBox({
  characteristicsArray,
  level,
  onClickFuncion,
}: LifeWorkSpaceBoxProps) {
  return (
    <>
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

export default LifeWorkSpaceBox;
