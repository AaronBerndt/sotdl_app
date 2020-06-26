import React, { useState, useEffect, useContext } from "react";
import {
  DetailsBox,
  CharacteristicsBox,
  FeaturesBox,
  CharacterContentBox,
  EquipmentBox,
  LifeWorkSpaceBox,
  ActionBox,
  BBBox,
  DiceResultSnackBar,
} from "../../organisms";
import axios from "axios";
import { sumArray, filterByLevelAndMutiple } from "../../utilities";
import ChracaterPageContext from "../../context/CharacterContext";
import { DiceRollProvider } from "../../context/DiceRollContext";
import { Grid } from "@material-ui/core";

function CharacterSheet() {
  const { health, items } = useContext<any>(ChracaterPageContext);

  return (
    <Grid container direction="column" justify="center" alignItems="flex-start">
      <Grid container direction="row" justify="center" alignItems="center">
        <DetailsBox />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <LifeWorkSpaceBox health={health} />
      </Grid>
      <DiceRollProvider>
        <BBBox />
        <Grid container direction="row" justify="center" alignItems="center">
          <CharacteristicsBox />
        </Grid>
        <CharacterContentBox>
          <ActionBox />
          <FeaturesBox />
          <EquipmentBox itemsObject={items} />
        </CharacterContentBox>
        <DiceResultSnackBar />
      </DiceRollProvider>
    </Grid>
  );
}

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
    items: {},
    characterState: { spellsCast: [] },
  });

  const getData = async () => {
    const { data } = await axios(
      "https://sotdl-api.herokuapp.com/characters?name=Ordo"
    );
    setCharacterData(data[0]);
  };

  useEffect(() => {
    if (characterData.name === "") {
      getData();
    }
  }, [characterData]);

  /* const [{ boonAmount, baneAmount }, dispatch] = useReducer(reducer, { */
  /*   boonAmount: 0, */
  /*   baneAmount: 0, */
  /* }); */

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
    characterState: { spellsCast },
  } = characterData;

  const filterAndSum = (nameArray) =>
    sumArray(
      filterByLevelAndMutiple(characteristics, nameArray, level).map(
        ({ value }) => value
      )
    );

  const health = filterAndSum(["Strength", "Health"]);
  const strength = filterAndSum(["Strength"]);
  const agility = filterAndSum(["Agility"]);
  const intellect = filterAndSum(["Intellect"]);
  const will = filterAndSum(["Will"]);
  const perception = filterAndSum(["Intellect", "Perception"]);
  const speed = filterAndSum(["Speed"]);
  const power = filterAndSum(["Power"]);
  const corruption = filterAndSum(["Corruption"]);
  const insanity = filterAndSum(["Insanity"]);
  const size = filterAndSum(["Size"]);

  return (
    <>
      {name === "" ? null : (
        <ChracaterPageContext.Provider
          value={{
            name,
            level,
            ancestry,
            novicePath,
            expertPath,
            masterPath,
            strength,
            agility,
            intellect,
            will,
            perception,
            health,
            size,
            speed,
            power,
            insanity,
            corruption,
            features,
            spells,
            items,
            spellsCast,
          }}
        >
          <CharacterSheet />
        </ChracaterPageContext.Provider>
      )}
    </>
  );
}

export default CharacterSheetPage;
