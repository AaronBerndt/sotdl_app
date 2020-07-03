import React, { useState, useEffect, useReducer, useContext } from "react";
import { List } from "../../molecules/";
import { PathDialog } from "../../organisms/";
import axios from "axios";
import { lengthIsZero } from "../../utilities";
import BuildCharacterContext from "../../context/BuildCharacterContext";
import { groupBy } from "lodash";

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

  const { setNovicePath, setExpertPath, setMasterPath } = useContext(
    BuildCharacterContext
  );
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

  const submitOnClick = () => {
    const { name, type }: any = pathList[selectedPathIndex];
    console.log(name, type);
    const typeName = type.toLowerCase();
    const hookObject: any = {
      novice: () => setNovicePath(name),
      expert: () => setExpertPath(name),
      master: () => setMasterPath(name),
    };

    hookObject[typeName](name);
    dispatch({ type: "toggle" });
  };

  const pathListGrouped = Object.entries(groupBy(pathList, "type"));

  return (
    <>
      {lengthIsZero(pathList) ? null : (
        <>
          {pathListGrouped.map(([type, list]: any, i) => {
            console.log(list, type);
            return (
              <div key={i}>
                <h3>{type}</h3>
                <List listItemArray={list} onClickFunction={listItemOnClick} />
                <PathDialog
                  pathInfo={pathList[selectedPathIndex]}
                  isOpen={state}
                  onClickFuncion={() => dispatch({ type: "toggle" })}
                  submitOnClickFunction={submitOnClick}
                />
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default PathPage;
