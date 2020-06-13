import React, { useState, useEffect } from "react";
import {
  DetailsBox,
  CharacteristicsBox,
  FeaturesBox,
  CharacterContentBox,
  EquipmentBox,
  LifeWorkSpaceBox,
  SpellBox,
} from "../../organisms";
import axios from "axios";
import { sumArray, filterByLevelAndMutiple } from "../../utilities";
import { Grid } from "@material-ui/core";
import { useDice } from "../../hooks";

function CharacterSheetPage() {
  const [characterData, setCharacterData] = useState({
    name: "",
    description: "",
    level: 0,
    ancestry: "",
    novicePath: "",
    expertPath: "",
    masterPath: "",
    languages: [],
    profession: [],
    characteristics: [],
    features: [],
    spells: [],
    items: {
      weapons: [],
      armor: [],
      other: [],
      money: {
        bits: 0,
        copper: 0,
        silver: 0,
        gold: 0,
      },
    },
  });

  const getData = async () => {
    const { data } = await axios("http://localhost:3000/characters?name=Ordo");
    setCharacterData(data);
  };

  useEffect(() => {
    if (characterData.name === "") {
      getData();
    }
  }, [characterData]);

  const {
    name,
    level,
    ancestry,
    novicePath,
    expertPath,
    masterPath,
    characteristics,
    features,
    spells,
    items,
  } = characterData;

  const filterAndSum = (nameArray) =>
    sumArray(
      filterByLevelAndMutiple(characteristics, nameArray, level).map(
        ({ value }) => value
      )
    );
  const createCharacteristic = (name, value) => ({
    name,
    value,
  });

  const health = filterAndSum(["Strength", "Health"]);
  const strength = filterAndSum(["Strength"]);
  const agility = filterAndSum(["Agility"]);
  const intellect = filterAndSum(["Intellect"]);
  const will = filterAndSum(["Will"]);
  const perception = filterAndSum(["Intellect", "Perception"]);
  const speed = filterAndSum(["Speed"]);
  const power = filterAndSum(["Power"]);

  const characteristicsArray = [
    createCharacteristic("Strength", strength),
    createCharacteristic("Agility", agility),
    createCharacteristic("Intellect", intellect),
    createCharacteristic("Will", will),
    createCharacteristic("Perception", perception),
  ];

  return (
    <>
      {characterData.name === "" ? null : (
        <>
          <DetailsBox
            name={name}
            ancestry={ancestry}
            novicePath={novicePath}
            expertPath={expertPath}
            masterPath={masterPath}
            level={level}
          />
          <LifeWorkSpaceBox health={health} />
          <CharacteristicsBox
            characteristicsArray={characteristicsArray}
            onClickFuncion={() => console.log("button 1")}
            level={level}
          />
          <CharacterContentBox power={power} spellArrayLength={spells.length}>
            <p>Tab 1</p>
            <FeaturesBox featuresArray={features} level={level} />
            <EquipmentBox itemsObject={items} strength={strength} />
            <SpellBox spellArray={spells} power={power} />
          </CharacterContentBox>
        </>
      )}
    </>
  );
}

export default CharacterSheetPage;
