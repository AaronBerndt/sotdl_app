import React, { useState, useEffect } from "react";
import axios from "axios";
import { List } from "../../molecules";

export function CharactersPage() {
  const [characterList, setCharactersList] = useState([]);
  const [selectedCharactersIndex, setSelectedCharactersIndex] = useState(0);

  const getData = async () => {
    const { data } = await axios("https://sotdl-api.herokuapp.com/characters");
    setCharactersList(data);
  };

  useEffect(() => {
    if (characterList.length === 0) {
      getData();
    }
  }, [characterList]);

  const listItemOnClick = (index: number) => {
    setSelectedCharactersIndex(index);
  };

  const isNovice = (type: string) => type === "Novice";
  const ifExists = (path: string, type: string) =>
    path ? (isNovice(type) ? path : `/ ${path}`) : "";

  return (
    <>
      <List
        listItemArray={characterList.map(
          ({ name, level, ancestry, novicePath, expertPath, masterPath }) => ({
            name,
            secondaryText: `
${ancestry} ${ifExists(novicePath, "Novice")} ${ifExists(
              expertPath,
              "Expert"
            )} ${ifExists(masterPath, "Master")} ${level}`,
          })
        )}
        onClickFunction={listItemOnClick}
      />
    </>
  );
}

export default CharactersPage;
