import React from "react";
import { Snackbar } from "@material-ui/core";
import styled from "styled-components";
import { isZero, sumArray, notZeroAndUndefined } from "../../utilities";

interface DiceResultSnackBarProps {
  rollReason: any;
  rollType: string;
  diceResult: number;
  boonResult?: number;
  baneResult?: number;
  modifier?: number;
  extraNumber?: number;
}

interface RollTypeProps {
  rollType: string;
}

const RollType = styled.h2`
  color: ${({ rollType }: RollTypeProps) => {
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
  extraNumber,
}: DiceResultSnackBarProps) {
  const isUndefined = (value: number) => (value === undefined ? 0 : value);

  const finalResult =
    rollType === "Damage"
      ? sumArray([diceResult, isUndefined(extraNumber), isUndefined(modifier)])
      : sumArray(
          [diceResult, boonResult, modifier, -baneResult].map((number) =>
            parseInt(`${number}`)
          )
        );

  console.log(finalResult);
  const finalResultMessage =
    rollType === "Challenge"
      ? `${finalResult >= 10 ? "Pass" : "Fail"}(${finalResult})`
      : finalResult;

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={rollReason !== ""}
        message={
          <div>
            <div>
              <RollReason>{`${rollReason}: `}</RollReason>
              <RollType rollType={rollType}>{rollType}</RollType>
            </div>
            <div>
              {rollType === "Damage" ? (
                <DiceResult>{`${diceResult} ${
                  notZeroAndUndefined(modifier) ? `+ (${modifier})` : ""
                }
			${notZeroAndUndefined(extraNumber) ? `+ ${extraNumber}` : ""}`}</DiceResult>
              ) : (
                <>
                  <DiceResult>{`${diceResult} + (${modifier}) `}</DiceResult>
                  {!isZero(boonResult) && (
                    <BoonResult>{` + ${boonResult}`}</BoonResult>
                  )}
                  {!isZero(baneResult) && (
                    <BaneResult>{` - ${baneResult}`}</BaneResult>
                  )}
                </>
              )}
              <FinalResult>{` = ${finalResultMessage}`}</FinalResult>
            </div>
          </div>
        }
      ></Snackbar>
    </>
  );
}

export default DiceResultSnackBar;
