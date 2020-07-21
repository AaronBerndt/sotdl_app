import React, { useContext } from "react";
import BuildCharacterContext from "../../context/BuildCharacterContext";
import { Card, CardContent, CardActions, Button } from "@material-ui/core";
import { Form, Field, FormSpy } from "react-final-form";
import { OnChange } from "react-final-form-listeners";

import { FormDropdown, FormInput } from "../../atoms";
import { sumArray, isZero, lengthIsZero } from "../../utilities";

function PickSpellsPage() {
  const { spells, setSpells, traditions, setTraditions, features } = useContext(
    BuildCharacterContext
  );

  const magicArray = features
    .filter(({ name }) => name === "Magic")
    .map(({ extra }) => {
      return extra;
    })
    .flat();

  const filterByNameAndSumValue = (array: any, filterName: string) =>
    sumArray(
      array.filter(({ name }) => name === filterName).map(({ value }) => value)
    );

  const maxSpellPool = filterByNameAndSumValue(magicArray, "Spell");
  const maxTraditionPool = filterByNameAndSumValue(magicArray, "Tradition");
  const maxBothPool = filterByNameAndSumValue(magicArray, "Both");

  const convertToNameArray = (arrayOfString) =>
    arrayOfString.map((name) => ({ name }));

  const traditionArray = convertToNameArray([
    "Air",
    "Alchemy",
    "Alteration",
    "Arcana",
    "Battle",
    "Celestial",
    "Chaos",
    "Conjuration",
    "Curse",
    "Death",
    "Demonology",
    "Destruction",
    "Divination",
    "Eath",
    "Enchantment",
    "Fey",
    "Fire",
    "Forbidden",
    "Illusion",
    "Invocation",
    "Life",
    "Metal",
    "Nature",
    "Necromancy",
    "Order",
    "Primal",
    "Protection",
    "Rune",
    "Shadow",
    "Soul",
    "Spiritualism",
    "Storm",
    "Technomancy",
    "Telekinesis",
    "Telepathy",
    "Teleportation",
    "Theurgy",
    "Time",
    "Transformation",
    "Water",
  ]);

  const onSubmit = (values) => console.log(values);

  const WhenFieldChanges = ({
    field,
    condition,
    changeField,
    newValue,
    oldValue,
  }) => {
    return (
      <Field name={changeField} subscription={{}}>
        {({ input: { onChange } }) => (
          <FormSpy subscription={{}}>
            {({ form }) => (
              <OnChange name={field}>
                {(value, prevousValue) => {
                  if (
                    !value.every((r) => prevousValue.includes(r)) &&
                    condition
                  ) {
                    onChange(oldValue - 1);
                  } else {
                    onChange(oldValue + 1);
                  }
                }}
              </OnChange>
            )}
          </FormSpy>
        )}
      </Field>
    );
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              traditionData: [],
              spellData: [],
              traditionPool: maxTraditionPool,
              spellPool: maxSpellPool,
              bothPool: maxBothPool,
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => {
              const { traditionData, traditionPool, bothPool } = values;
              const setComp = !isZero(traditionPool)
                ? "traditionPool"
                : bothPool === maxBothPool
                ? "traditionPool"
                : "bothPool";

              const defaultPool =
                setComp === "traditionPool" ? traditionPool : bothPool;
              return (
                <>
                  <WhenFieldChanges
                    field="traditionData"
                    condition={!lengthIsZero(traditionData)}
                    changeField={setComp}
                    newValue={defaultPool - 1}
                    oldValue={defaultPool}
                  />
                  <FormInput
                    label="Tradition Pool"
                    name="traditionPool"
                    disabled={true}
                  />
                  <FormInput
                    label="Spell Pool"
                    name="spellPool"
                    disabled={true}
                  />
                  <FormInput
                    label="Spell/Tradition Pool"
                    name="bothPool"
                    disabled={true}
                  />

                  <FormDropdown
                    label="Traditions"
                    name="traditionData"
                    data={traditionArray}
                    multiple={true}
                    disabled={isZero(traditionPool) && isZero(bothPool)}
                  />
                  <CardActions>
                    <Button onClick={() => handleSubmit()}>Submit</Button>
                  </CardActions>
                </>
              );
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default PickSpellsPage;

