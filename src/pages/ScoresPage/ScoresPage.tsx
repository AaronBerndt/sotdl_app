import React, { useContext, useState } from "react";
import BuildCharacterContext from "../../context/BuildCharacterContext";
import { Button, TextField } from "@material-ui/core";
import { isZero, sumArray } from "../../utilities";

function ScoresPage() {
  const { level, setCharacteristics, startingScores, ancestry } = useContext(
    BuildCharacterContext
  );

  const getPoints = (level: number) =>
    isZero(level) ? 0 : level < 3 ? 2 : level < 7 ? 4 : 6;
  const isHuman = (maxPoints: number, ancestry: string) =>
    ancestry === "Human" ? maxPoints + 1 : maxPoints;

  const maxPoints = isHuman(getPoints(level), ancestry);
  const [scorePoints, setScorePoints] = useState(maxPoints);
  const [scoreChoices, setScoreChoices] = useState({
    strength: 0,
    agility: 0,
    will: 0,
    intellect: 0,
  });

  const onButtonClick = (scoreName: string, type: string) => {
    if (type === "Add") {
      setScorePoints(scorePoints - 1);
      setScoreChoices((prevState) => ({
        ...prevState,
        [scoreName]: scoreChoices[scoreName] + 1,
      }));
    } else {
      setScorePoints(scorePoints + 1);
      setScoreChoices((prevState) => ({
        ...prevState,
        [scoreName]: scoreChoices[scoreName] - 1,
      }));
    }
  };

  const onSubmitButtonClick = () => {
    const characteristicsArray = Object.entries(scoreChoices)
      .map(([key, value]) => ({ name: key, value, level: 0 }))
      .filter(({ value }) => value !== 0);
    console.log(characteristicsArray);
    setCharacteristics(characteristicsArray);
  };

  return (
    <>
      <p> You have {scorePoints} points remaining</p>
      {["Strength", "Agility", "Will", "Intellect"].map((score, i) => {
        const scoreName = score.toLowerCase();
        const choiceValue = scoreChoices[scoreName];
        const scoreValue = startingScores[scoreName] + choiceValue;

        return (
          <div key={i}>
            <TextField
              label={`${score}: ${scoreValue}`}
              variant="outlined"
              disabled
            />
            <Button
              onClick={() => onButtonClick(scoreName, "Add")}
              disabled={isZero(scorePoints) || choiceValue >= maxPoints / 2}
            >
              +
            </Button>
            <Button
              onClick={() => onButtonClick(scoreName, "Remove")}
              disabled={isZero(scoreChoices[scoreName])}
            >
              -
            </Button>
          </div>
        );
      })}
      <Button
        disabled={!isZero(scorePoints)}
        onClick={() => onSubmitButtonClick()}
      >
        Submit
      </Button>
    </>
  );
}

export default ScoresPage;

