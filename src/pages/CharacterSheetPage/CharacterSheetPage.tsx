import React, { useState, useEffect, useReducer, useContext } from "react";
import {
  DetailsBox,
  CharacteristicsBox,
  FeaturesBox,
  CharacterContentBox,
  EquipmentBox,
  LifeWorkSpaceBox,
  SpellBox,
  BBBox,
  DiceResultSnackBar,
} from "../../organisms";
import axios from "axios";
import { sumArray, filterByLevelAndMutiple } from "../../utilities";
import { useDice } from "../../hooks";
import ChracaterPageContext from "../../context/CharacterContext";

function reducer(state, action) {
  const actionObject = {
    "add boon": () => ({ boonAmount: state.boonAmount + 1, baneAmount: 0 }),
    "add bane": () => ({ boonAmount: 0, baneAmount: state.baneAmount + 1 }),
    reset: () => ({ boonAmount: 0, baneAmount: 0 }),
  };
  return actionObject[action.type]();
}

function CharacterSheet() {
  /* const [modifier, setModifier] = useState(0); */

  /* const [{ boonAmount, baneAmount }, dispatch] = useReducer(reducer, { */
  /*   boonAmount: 0, */
  /*   baneAmount: 0, */
  /* }); */

  /* const { */
  /*   diceResult: { */
  /*     rollReason, */
  /*     rollType, */
  /*     diceResult, */
  /*     boonResult, */
  /*     baneResult, */
  /*     extraNumber, */
  /*   }, */
  /*   rollAttackRoll, */
  /*   rollDamageRoll, */
  /* } = useDice(); */

  const {
    name,
    level,
    ancestry,
    novicePath,
    expertPath,
    masterPath,
    health,
    features,
    spells,
    items,
    strength,
    agility,
    intellect,
    will,
    perception,
    speed,
  } = useContext(ChracaterPageContext);
  const createCharacteristic = (name, value) => ({
    name,
    value,
  });

  /* const makeChallengeRoll = (mod, name) => { */
  /*   rollAttackRoll(name, "Challenge", boonAmount, baneAmount); */
  /*   setModifier(mod); */
  return (
    <>
      {name === "" ? null : (
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
          {/* <BBBox */}
          {/*   boonAmount={boonAmount} */}
          {/*   baneAmount={baneAmount} */}
          {/*   baneOnClick={() => dispatch({ type: "add bane" })} */}
          {/*   boonOnClick={() => dispatch({ type: "add boon" })} */}
          {/* /> */}

          <CharacteristicsBox />
          {/* <CharacterContentBox power={power} spellArrayLength={spells.length}> */}
          {/*   <p>Tab 1</p> */}
          {/*   <FeaturesBox featuresArray={features} level={level} /> */}
          {/*   <EquipmentBox itemsObject={items} strength={strength} /> */}
          {/*   <SpellBox */}
          {/*     spellArray={spells} */}
          {/*     power={power} */}
          {/*     onClickFuncion={rollDamageRoll} */}
          {/*   /> */}
          {/* </CharacterContentBox> */}
          {/* <DiceResultSnackBar */}
          {/*   rollType={rollType} */}
          {/*   rollReason={rollReason} */}
          {/*   modifier={modifier} */}
          {/*   diceResult={diceResult} */}
          {/*   boonResult={boonResult} */}
          {/*   baneResult={baneResult} */}
          {/*   extraNumber={extraNumber} */}
          {/* /> */}
        </>
      )}
    </>
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
          }}
        >
          <CharacterSheet />
        </ChracaterPageContext.Provider>
      )}
    </>
  );
}

export default CharacterSheetPage;
