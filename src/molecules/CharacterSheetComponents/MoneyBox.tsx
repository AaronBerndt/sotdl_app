import React from "react";
import { Button } from "@material-ui/core";

interface MoneyBoxProps {
  moneyObject: any;
}
function MoneyBox({ moneyObject }: MoneyBoxProps) {
  const { bits, copper, silver, gold } = moneyObject;
  const notZero = (value: number) => value !== 0;
  const formatMoney = (value: number, type: string) => {
    const abbreviationObject = {
      bits: "b",
      copper: "cp",
      silver: "ss",
      gold: "gc",
    };

    return notZero(value) ? `${abbreviationObject[type]}: ${value}` : ``;
  };

  return (
    <>
      <Button>
        <p>{`${formatMoney(bits, "bits")} ${formatMoney(
          copper,
          "copper"
        )} ${formatMoney(silver, "silver")} ${formatMoney(gold, "gold")}
	      `}</p>
      </Button>
    </>
  );
}

export default MoneyBox;
