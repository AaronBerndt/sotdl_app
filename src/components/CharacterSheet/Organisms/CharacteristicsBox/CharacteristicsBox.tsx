import React, { useContext } from "react";
import { AttributeBox } from "../../molecules";

import ChracaterPageContext from "../../context/CharacterContext";

function CharacteristicsBox() {
  const { strength, agility, intellect, will, perception, speed } = useContext(
    ChracaterPageContext
  );

  const createCharacteristic = (name, value) => ({
    name,
    value,
  });

  const characteristicsArray = [
    createCharacteristic("Strength", strength),
    createCharacteristic("Agility", agility),
    createCharacteristic("Intellect", intellect),
    createCharacteristic("Will", will),
    createCharacteristic("Perception", perception),
    createCharacteristic("Speed", speed),
  ];

  return (
    <>
      {characteristicsArray.map(({ name, value }, i: any) => {
        return (
          <div key={i}>
            {name === "Speed" ? (
              <AttributeBox
                name={name}
                value={value}
                withMod={false}
                withNoRoll={true}
              />
            ) : (
              <AttributeBox
                name={name}
                value={value}
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
