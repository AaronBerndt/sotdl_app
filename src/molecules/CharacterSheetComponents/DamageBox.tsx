import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

interface DamageBoxProps {
  healthTotal: number;
}

function DamageBox({ healthTotal }: DamageBoxProps) {
  const [damage, setDamage] = useState(0);
  const [amount, setAmount] = useState(0);

  const addDamage = () => setDamage(damage + amount);
  const removeDamage = () => setDamage(damage - amount);
  const onChange = (e) => setAmount(e.target.value);

  return (
    <>
      <p>{`Damage: ${damage}`}</p>
      {damage === healthTotal ? <p>Make Death Saves</p> : null}
      <TextField onChange={onChange} />
      <Button onClick={addDamage}>Add Damage</Button>
      <Button onClick={removeDamage}>Heal Damage</Button>
    </>
  );
}

export default DamageBox;
