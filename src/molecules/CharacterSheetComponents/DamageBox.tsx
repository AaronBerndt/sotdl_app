import React, { useState } from "react";
import styled from "styled-components";
import { Button, TextField, ButtonGroup } from "@material-ui/core";

interface DamageBoxProps {
  healthTotal: number;
  currentDamage: number;
  damageButtonClick: any;
  healingButtonClick: any;
}

const DamageButton = styled(Button)`
  background-color: red;

  color: white;
`;

const HealButton = styled(Button)`
  background-color: green;
  color: white;
`;

function DamageBox({
  healthTotal,
  currentDamage,
  healingButtonClick,
  damageButtonClick,
}: DamageBoxProps) {
  const [amount, setAmount] = useState(0);

  const onChange = (e: any) => setAmount(e.target.value);

  const isDying = currentDamage >= healthTotal;
  return (
    <>
      <p>{`Damage: ${currentDamage}/${healthTotal}`}</p>
      {isDying ? <p>Make Death Saves</p> : null}
      <TextField onChange={onChange} />

      <ButtonGroup size="small">
        <DamageButton
          variant="contained"
          onClick={() => damageButtonClick(amount)}
          disabled={isDying}
        >
          Damage
        </DamageButton>
        <HealButton
          variant="contained"
          onClick={() => healingButtonClick(amount)}
        >
          Heal
        </HealButton>
      </ButtonGroup>
    </>
  );
}

export default DamageBox;
