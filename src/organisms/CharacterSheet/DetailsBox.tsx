import React from "react";
interface DetailsBox {
  name: string;
  ancestry: string;
  novicePath: string;
  expertPath: string;
  masterPath: string;
  level: number;
}
function CharacteristicsBox({
  name,
  ancestry,
  novicePath,
  expertPath,
  masterPath,
  level,
}: DetailsBox) {
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

export default CharacteristicsBox;
