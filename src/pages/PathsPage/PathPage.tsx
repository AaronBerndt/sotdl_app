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
  const [selectedPathData, setSelectedPathData] = useState([]);
  const [state, dispatch] = useReducer(reducer, { open: false });

  const { setNovicePath, setExpertPath, setMasterPath, level } = useContext(
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

  const listItemOnClick = (index: number, name: string) => {
    const [pathData] = pathList.filter(
      ({ name: pathName }) => name === pathName
    );
    setSelectedPathData(pathData);
    dispatch({ type: "toggle" });
  };

  const submitOnClick = () => {
    const { name, type }: any = selectedPathData;
    const typeName = type.toLowerCase();
    const hookObject: any = {
      novice: () => setNovicePath(name),
      expert: () => setExpertPath(name),
      master: () => setMasterPath(name),
    };

    hookObject[typeName]();
    dispatch({ type: "toggle" });
  };

  const pathListGrouped = Object.entries(groupBy(pathList, "type"));

  return (
    <>
      {lengthIsZero(pathList) ? null : (
        <>
          {pathListGrouped.map(([type, list]: any, i) => {
            const isTypeObject = {
              Novice: level < 1,
              Expert: level < 3,
              Master: level < 7,
            };

            return (
              <div key={i} hidden={isTypeObject[type]}>
                <h3>{type}</h3>
                <List listItemArray={list} onClickFunction={listItemOnClick} />
                <PathDialog
                  pathInfo={selectedPathData}
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

