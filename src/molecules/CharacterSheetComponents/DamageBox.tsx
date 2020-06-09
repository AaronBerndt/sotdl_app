import React, { useState, useReducer } from "react";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

interface DamageBoxProps {
  healthTotal: number;
}

const DamageButton = styled(Button)`
  background-color: red;

  color: white;
`;

const HealButton = styled(Button)`
  background-color: green;
  color: white;
`;

function DamageBox({ healthTotal }: DamageBoxProps) {
  const [amount, setAmount] = useState(0);
  const [damage, dispatch] = useReducer(reducer, 0);
  function reducer(state, action) {
    const actionObject = {
      damage: () => state + action.value,
      heal: () => state - action.value,
      toZero: () => 0,
    };

    return actionObject[action.type]();
  }

  const addDamage = () => dispatch({ type: "damage", value: Number(amount) });
  const removeDamage = () => {
    const newDamage = damage - Number(amount);
    dispatch(
      newDamage <= 0 ? { type: "toZero" } : { type: "heal", value: amount }
    );
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
