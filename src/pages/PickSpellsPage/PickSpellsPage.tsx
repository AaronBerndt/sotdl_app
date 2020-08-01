import React, { useContext } from "react";
import BuildCharacterContext from "../../context/BuildCharacterContext";
import { Card, CardContent, CardActions, Button } from "@material-ui/core";
import { Form, Field, FormSpy } from "react-final-form";
import { OnChange } from "react-final-form-listeners";

import { FormDropdown, FormInput, SpellPanel } from "../../atoms";
import {
  sumArray,
  isZero,
  lengthIsZero,
  filterByProperties,
} from "../../utilities";
import MaterialTable from "material-table";

function PickSpellsPage() {
  const {
    spells,
    setSpells,
    traditions,
    setTraditions,
    features,
    spellList,
  } = useContext(BuildCharacterContext);

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
              const {
                traditionData,
                traditionPool,
                spellPool,
                bothPool,
              } = values;
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

                  {lengthIsZero(traditionData)
                    ? null
                    : filterByProperties(
                        spellList,
                        traditionData,
                        "tradition"
                      ).map(
                        (
                          {
                            name,
                            tradition,
                            description,
                            spellProperties,
                            level,
                          },
                          i: number
                        ) => (
                          <SpellPanel
                            name={name}
                            tradition={tradition}
                            description={description}
                            spellProperties={spellProperties}
                            level={level}
                            isPicked={false}
                            key={i}
                          />
                        )
                      )}
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

