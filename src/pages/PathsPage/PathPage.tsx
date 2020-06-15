import React, { useState, useEffect, useReducer } from "react";
import { List } from "../../molecules/";
import { PathDialog } from "../../organisms/";
import axios from "axios";

function reducer(state, action) {
  const actionSwitch = {
    toggle: { open: !state.open },
  };

  return actionSwitch[action.type];
}

export function PathPage() {
  const [pathList, setPathList] = useState([]);
  const [selectedPathIndex, setSelectedPathIndex] = useState(0);
  const [state, dispatch] = useReducer(reducer, { open: false });

  const getData = async () => {
    const { data } = await axios("https://sotdl-api.herokuapp.com/paths");
    setPathList(data);
  };

  useEffect(() => {
    if (pathList.length === 0) {
      getData();
    }
  }, [pathList]);

  const listItemOnClick = (index: number) => {
    setSelectedPathIndex(index);
    dispatch({ type: "toggle" });
  };

  return (
    <>
      <List listItemArray={pathList} onClickFunction={listItemOnClick} />
      <PathDialog
        pathInfo={pathList[selectedPathIndex]}
        isOpen={state}
        onClickFuncion={() => dispatch({ type: "toggle" })}
      />
    </>
  );
}

export default PathPage;
