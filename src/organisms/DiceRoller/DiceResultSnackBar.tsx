import React from "react";
import { Snackbar } from "@material-ui/core";
import styled from "styled-components";
import { isZero } from "../../utilities";

interface DiceResultSnackBarProps {
  rollReason: any;
  rollType: string;
  diceResult: number;
  boonResult: number;
  baneResult: number;
  modifier: number;
}

const RollType = styled.h2`
  color: ${({ rollType }) => {
    const colorObject = {
      attack: "#1b9af0",
      damage: "#d54f4f",
      challenge: "#8359ee",
    };

    return colorObject[rollType.toLowerCase()];
  }};
  float: right;
`;

const RollReason = styled.h2`
  float: left;
`;

const DiceResult = styled.h2`
  float: left;
`;

const BaneResult = styled.h2`
  float: left;
  color: red;
`;
const BoonResult = styled.h2`
  float: left;
  color: lightBlue;
`;

const FinalResult = styled.h2`
  float: right;
`;

function DiceResultSnackBar({
  rollReason,
  diceResult,
  rollType,
  modifier,
  boonResult,
  baneResult,
}: DiceResultSnackBarProps) {
  const finalResult = diceResult + boonResult + modifier - baneResult;
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={true}
        message={
          <div>
            <div>
              <RollReason>{`${rollReason}: `}</RollReason>
              <RollType rollType={rollType}>{rollType}</RollType>
            </div>
            <div>
              <DiceResult>{`${diceResult} + (${modifier}) `}</DiceResult>
              {!isZero(boonResult) && (
                <BoonResult>{` + ${boonResult}`}</BoonResult>
              )}
              {!isZero(baneResult) && (
                <BaneResult>{` - ${baneResult}`}</BaneResult>
              )}
              <FinalResult>{`= ${finalResult}`}</FinalResult>
            </div>
          </div>
        }
      ></Snackbar>
    </>
  );
}

export default DiceResultSnackBar;
