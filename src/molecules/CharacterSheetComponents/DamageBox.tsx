import React, { useState } from "react";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";
import { AttributeBox } from "../../molecules";

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

  const isDying = currentDamage >= healthTotal;
  return (
    <>
      <p>{`Damage: ${currentDamage}/${healthTotal}`}</p>
      {isDying ? <p>Make Death Saves</p> : null}
      <TextField onChange={onChange} />

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
    </>
  );
}

export default DamageBox;
