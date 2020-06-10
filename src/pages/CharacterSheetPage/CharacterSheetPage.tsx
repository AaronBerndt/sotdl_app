import React, { useState, useEffect } from "react";
import {
  DetailsBox,
  CharacteristicsBox,
  FeaturesBox,
  CharacterContentBox,
} from "../../organisms";
import axios from "axios";

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
  } = characterData;
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
          <CharacteristicsBox
            characteristicsArray={characteristics}
            onClickFuncion={() => console.log("Hello")}
            level={level}
          />

          <CharacterContentBox spellArrayLength={spells.length}>
            <p>Tab 1</p>
            <FeaturesBox featuresArray={features} level={level} />
            <p>Tab 3</p>
          </CharacterContentBox>
        </>
      )}
    </>
  );
}

export default CharacterSheetPage;
