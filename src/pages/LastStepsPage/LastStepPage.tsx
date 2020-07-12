import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import BuildCharacterContext from "../../context/BuildCharacterContext";

function LastStepsPage() {
  const {
    name,
    level,
    ancestry,

    novicePath,
    expertPath,
    masterPath,
    characteristics,
  } = useContext(BuildCharacterContext);

  const createCharacterOnClick = () => {
    const newCharacterObject = {
      name,
      level,
      ancestry,
      novicePath,
      expertPath,
      masterPath,
      characteristics,
    };
    console.log(newCharacterObject);
  };
  return (
    <>
      <h1>Your Choices</h1>
      <p>Name: {name}</p>
      <p>Level: {level}</p>
      <p>Ancestry: {ancestry}</p>
      <p>
        Paths: {novicePath} {expertPath} {masterPath}
      </p>
      <Button onClick={createCharacterOnClick}>Create Character</Button>
    </>
  );
}

export default LastStepsPage;

