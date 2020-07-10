import React, { useContext, useState } from "react";
import BuildCharacterContext from "../../context/BuildCharacterContext";
import { Button, TextField } from "@material-ui/core";
import { isZero } from "../../utilities";
import { remove } from "lodash";

function ScoresPage() {
  const { level, setCharacteristics, startingScores } = useContext(
    BuildCharacterContext
  );

  const getPoints = (level: number) =>
    isZero(level) ? 0 : level < 3 ? 2 : level < 7 ? 4 : 6;
  const maxPoints = getPoints(level);
  const [scorePoints, setScorePoints] = useState(getPoints(level));
  const [characteristicsArray, setCharacteristicsArray] = useState([]);

  const onButtonClick = (
    scoreName: string,
    type: string,
    arrayLength: number
  ) => {
    const scoreLevel = isZero(arrayLength) ? 1 : arrayLength === 2 ? 3 : 7;
    if (type === "Add") {
      setScorePoints(scorePoints - 1);
      setCharacteristicsArray([
        ...characteristicsArray,
        { name: scoreName, value: 1, level: scoreLevel },
      ]);
    } else {
      if (scorePoints !== maxPoints) {
        const newArray = remove(
          characteristicsArray,
          ({ name, level }) => name === scoreName && level === scoreLevel
        );
        setScorePoints(scorePoints + 1);
        setCharacteristicsArray(newArray);
      }
    }
  };

  const onSubmitButtonClick = () => setCharacteristics(characteristicsArray);
  return (
    <>
      <p> You have {scorePoints} points remaining</p>
      {["Strength", "Agility", "Will", "Intellect"].map((score, i) => {
        const scoreName = score.toLowerCase();
        const filteredArray = characteristicsArray.filter(({ name }) => {
          return name === scoreName;
        });
        const arrayLength = filteredArray.length;
        const scoreValue = startingScores[scoreName] + arrayLength;

        return (
          <div key={i}>
            <TextField
              label={`${score}: ${scoreValue}`}
              variant="outlined"
              disabled
            />
            <Button
              onClick={() =>
                onButtonClick(score.toLowerCase(), "Add", arrayLength)
              }
              disabled={
                isZero(scorePoints) || filteredArray.length === maxPoints / 2
              }
            >
              +
            </Button>
            <Button onClick={() => onButtonClick(score, "Remove", arrayLength)}>
              -
            </Button>
          </div>
        );
      })}
      <Button
        disabled={!isZero(scorePoints)}
        onClick={() => onSubmitButtonClick}
      >
        Submit
      </Button>
    </>
  );
}

export default ScoresPage;

