import React, { useState, useReducer } from "react";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

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

  const onChange = (e) => setAmount(e.target.value);

  return (
    <>
      <p>{`Damage: ${currentDamage}`}</p>
      {currentDamage >= healthTotal ? <p>Make Death Saves</p> : null}
      <TextField onChange={onChange} />

      <DamageButton
        variant="contained"
        onClick={() => damageButtonClick(amount)}
      >
        Damage
      </DamageButton>
      <HealButton
        variant="contained"
        onClick={() => healingButtonClick(amount)}
      >
        Heal
      </HealButton>
    </>
  );
}

export default DamageBox;
