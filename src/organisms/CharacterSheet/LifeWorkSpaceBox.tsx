import React, { useReducer } from "react";
import { AttributeBox, DamageBox } from "../../molecules";

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
      amount + damage >= health
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
      <AttributeBox
        name="Health"
        value={health}
        onClickFuncion={() => null}
        withMod={false}
        withNoRoll={true}
      />
      <AttributeBox
        name="Healing Rate"
        value={Math.floor(health / 4)}
        onClickFuncion={() => removeDamage(healingRate)}
        withMod={false}
        withNoRoll={false}
      />
      <DamageBox
        healthTotal={health}
        currentDamage={damage}
        healingButtonClick={removeDamage}
        damageButtonClick={addDamage}
      />
    </>
  );
}

export default LifeWorkSpaceBox;
