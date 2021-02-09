import React, { useContext } from "react";
import ChracaterPageContext from "../../context/CharacterContext";

function DetailsBox() {
  const {
    name,
    ancestry,
    novicePath,
    expertPath,
    masterPath,
    level,
  } = useContext(ChracaterPageContext);

  const isNovice = (type: string) => type === "Novice";
  const ifExists = (path: string, type: string) =>
    path ? (isNovice(type) ? path : `/ ${path}`) : "";
  return (
    <>
      <h2>{name}</h2>
      <p>{`${ancestry} ${ifExists(novicePath, "Novice")} ${ifExists(
        expertPath,
        "Expert"
      )} ${ifExists(masterPath, "Master")}`}</p>
      <p>{`Level: ${level}`}</p>
    </>
  );
}

export default DetailsBox;
