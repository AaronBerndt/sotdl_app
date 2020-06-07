import React, { useState, useEffect, createContext, useReducer } from "react";
import { List } from "../../molecules/";
import { AncestryDialog } from "../../organisms/";
import axios from "axios";

export const AncestryDialogContext = createContext({});

function reducer(state, action) {
  const actionSwitch = {
    toggle: { open: !state.open },
  };

  return actionSwitch[action.type];
}

export function AncestryPage() {
  const [ancestryList, setAncestryList] = useState([]);
  const [selectedAncestryIndex, setSelectedAncestryIndex] = useState(0);
  const [state, dispatch] = useReducer(reducer, { open: false });

  const getData = async () => {
    const { data } = await axios("http://localhost:3000/ancestries");
    setAncestryList(data);
  };

  useEffect(() => {
    if (ancestryList.length === 0) {
      getData();
    }
  }, [ancestryList]);

  const listItemOnClick = (index: number) => {
    setSelectedAncestryIndex(index);
    dispatch({ type: "toggle" });
  };

  return (
    <>
      <List listItemArray={ancestryList} onClickFunction={listItemOnClick} />
      <AncestryDialog
        ancestryInfo={ancestryList[selectedAncestryIndex]}
        isOpen={state}
        onClickFuncion={() => dispatch({ type: "toggle" })}
      />
    </>
  );
}

export default AncestryPage;
