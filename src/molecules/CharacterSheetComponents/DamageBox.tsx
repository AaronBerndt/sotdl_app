import React, { useState } from "react";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

interface DamageBoxProps {
  healthTotal: number;
}

const DamageButton = styled(Button)`
background-color:red
background:white
`;

const HealButton = styled(Button)`
background-color:green
background:white
`;

function DamageBox({ healthTotal }: DamageBoxProps) {
  const [damage, setDamage] = useState(0);
  const [amount, setAmount] = useState(0);

  const addDamage = () => setDamage(damage + Number(amount));
  const removeDamage = () => {
    const newDamage = damage - Number(amount);
    setDamage(newDamage <= 0 ? 0 : newDamage);
  };
  const onChange = (e) => setAmount(e.target.value);

  return (
    <>
      <p>{`Damage: ${damage}`}</p>
      {damage === healthTotal ? <p>Make Death Saves</p> : null}
      <TextField onChange={onChange} />
      <DamageButton variant="contained" onClick={addDamage}>
        Damage
      </DamageButton>
      <HealButton variant="contained" onClick={removeDamage}>
        Heal
      </HealButton>
    </>
  );
}

export default DamageBox;
