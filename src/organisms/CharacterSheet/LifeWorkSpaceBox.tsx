import React, { useReducer } from "react";
import { AttributeBox, DamageBox } from "../../molecules";
import { Grid, Button } from "@material-ui/core";
import { TextField } from "../../atoms";

interface LifeWorkSpaceBoxProps {
  health: number;
}

function LifeWorkSpaceBox({ health }: LifeWorkSpaceBoxProps) {
  const [damage, dispatch] = useReducer(reducer, 0);
  const healingRate = Math.floor(health / 4);

  function reducer(state, action) {
    const actionObject = {
      damage: () => state + action.value,
      heal: () => state - action.value,
      toZero: () => 0,
      toMax: () => health,
    };

    return actionObject[action.type]();
  }

  const addDamage = (amount) =>
    dispatch(
      amount + damage <= health
        ? { type: "toMax" }
        : { type: "damage", value: Number(amount) }
    );

  const removeDamage = (amount) => {
    const newDamage = damage - Number(amount);
    dispatch(
      newDamage <= 0 ? { type: "toZero" } : { type: "heal", value: amount }
    );
  };

  return (
    <>
      <Grid container direction="row" alignItems="flex-start">
        <AttributeBox
          name="Health"
          value={health}
          withMod={false}
          withNoRoll={true}
        />

        <Button onClick={() => removeDamage(healingRate)}>
          <TextField name="Healing Rate" value={Math.floor(health / 4)} />
        </Button>

        <DamageBox
          healthTotal={health}
          currentDamage={damage}
          healingButtonClick={removeDamage}
          damageButtonClick={addDamage}
        />
      </Grid>
    </>
  );
}

export default LifeWorkSpaceBox;
