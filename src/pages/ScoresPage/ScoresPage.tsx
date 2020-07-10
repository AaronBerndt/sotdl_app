import React, { useContext, useState } from "react";
import BuildCharacterContext from "../../context/BuildCharacterContext";
import { Button, TextField } from "@material-ui/core";
import { isZero } from "../../utilities";

function ScoresPage() {
  const { level, setCharacteristics, startingScores } = useContext(
    BuildCharacterContext
  );

  const getPoints = (level) =>
    isZero(level) ? 0 : level < 3 ? 2 : level < 7 ? 4 : 6;

  const [scorePoints, setScorePoints] = useState(getPoints(level));
  return (
    <>
      <p> You have {scorePoints} points remaining</p>
      {["Strength", "Agility", "Will", "Intellect"].map((score, i) => (
        <div key={i}>
          <TextField
            label={`${score}: ${startingScores[score.toLowerCase()]}`}
            variant="outlined"
            disabled
          />
          <Button>+</Button>
          <Button>-</Button>
        </div>
      ))}
      <Button>Submit</Button>
    </>
  );
}

export default ScoresPage;

