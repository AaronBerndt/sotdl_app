import React, { useState, useReducer, useContext } from "react";
import { List } from "../../molecules/";
import { PathDialog } from "../../organisms/";
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
  const [selectedPathData, setSelectedPathData] = useState([]);
  const [state, dispatch] = useReducer(reducer, { open: false });

  const {
    pathList,
    setNovicePath,
    setExpertPath,
    setMasterPath,
    level,
    novicePath,
    expertPath,
    masterPath,
    features,
    setFeatures,
  } = useContext(BuildCharacterContext);

  const listItemOnClick = (index: number, name: string) => {
    const [pathData] = pathList.filter(
      ({ name: pathName }) => name === pathName
    );
    setSelectedPathData(pathData);
    dispatch({ type: "toggle" });
  };

  const submitOnClick = () => {
    const { name, type, features: pathFeatures }: any = selectedPathData;
    const typeName = type.toLowerCase();

    const hookObject: any = {
      novice: () => setNovicePath(name),
      expert: () => setExpertPath(name),
      master: () => setMasterPath(name),
    };
    setFeatures([...features, pathFeatures]);
    dispatch({ type: "toggle" });
    hookObject[typeName]();
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
            const isDisabledObject = {
              Novice: (name: string) => novicePath === name,
              Expert: (name: string) => expertPath === name,
              Master: (name: string) => masterPath === name,
            };

            const isDisabled = (name: string) => isDisabledObject[type](name);

            return (
              <div key={i} hidden={isTypeObject[type]}>
                <h3>{type}</h3>
                <List
                  listItemArray={list}
                  onClickFunction={listItemOnClick}
                  isDisabled={isDisabled}
                />
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

