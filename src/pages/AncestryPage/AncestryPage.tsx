import React, { useState, createContext, useReducer, useContext } from "react";
import { List } from "../../molecules/";
import { AncestryDialog } from "../../organisms/";
import BuildCharacterContext from "../../context/BuildCharacterContext";
import { lengthIsZero } from "../../utilities";

export const AncestryDialogContext = createContext({});

function reducer(state, action) {
  const actionSwitch = {
    toggle: { open: !state.open },
  };

  return actionSwitch[action.type];
}

export function AncestryPage() {
  const { ancestryList, setAncestry, setStartingScores, ancestry } = useContext(
    BuildCharacterContext
  );
  const [selectedAncestryIndex, setSelectedAncestryIndex] = useState(0);
  const [state, dispatch] = useReducer(reducer, { open: false });

  const listItemOnClick = (index: number) => {
    setSelectedAncestryIndex(index);
    dispatch({ type: "toggle" });
  };

  const submitOnClick = () => {
    console.log(ancestryList[selectedAncestryIndex]);
    const { name, characteristics }: any = ancestryList[selectedAncestryIndex];
    const filteredArray = ["Strength", "Agility", "Will", "Intellect"].map(
      (score) => {
        console.log();
        const [{ name, value }] = characteristics.filter(
          ({ name }) => name === score
        );
        return { [name.toLowerCase()]: value };
      }
    );
    const scoreObject = Object.assign({}, ...filteredArray);

    dispatch({ type: "toggle" });
    setAncestry(name);
    setStartingScores(scoreObject);
  };

  const isAncestry = (name: string) => name === ancestry;
  return (
    <>
      {lengthIsZero(ancestryList) ? null : (
        <>
          <List
            listItemArray={ancestryList}
            onClickFunction={listItemOnClick}
            isDisabled={isAncestry}
          />
          <AncestryDialog
            ancestryInfo={ancestryList[selectedAncestryIndex]}
            isOpen={state}
            onClickFuncion={() => dispatch({ type: "toggle" })}
            submitOnClickFunction={submitOnClick}
          />
        </>
      )}
    </>
  );
}

export default AncestryPage;

