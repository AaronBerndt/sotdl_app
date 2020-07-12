import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { Form } from "react-final-form";

import { FormInput, FormDropdown, AddContentTable } from "../../atoms";
import axios from "axios";

interface AddContentFormProps {
  contentType: any;
  onChangeFunction: any;
}
const convertToNameArray = (arrayOfString) =>
  arrayOfString.map((name) => ({ name }));

const typeArray = convertToNameArray(["Novice", "Expert", "Master"]);
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
const itemTypeArray = convertToNameArray(["Armor", "Weapon", "Other"]);

const availabilityArray = convertToNameArray([
  "Common",
  "Uncommon",
  "Rage",
  "Exotic",
]);

function AddContentForm({
  contentType,
  onChangeFunction,
}: AddContentFormProps) {
  const [characteristicsArray, setCharacteristicsArray] = useState([]);
  const [featuresArray, setFeaturesArray] = useState([]);
  const [propertiesArray, setPropertiesArray] = useState([]);
  const [spellPropertiesArray, setSpellPropertiesArray] = useState([]);

  const onSubmit = async (values: any) => {
    const typObject = {
      Ancestry: "ancestries",
      Path: "paths",
      Spell: "spells",
      Item: "items",
    };

    const contentObject =
      contentType === "Ancestry" || contentType === "Path"
        ? {
            ...values,
            features: featuresArray.map(({ name, description, level }) => ({
              name,
              description,
              level,
            })),
            characteristics: characteristicsArray.map(
              ({ name, value, level }) => ({ name, value, level })
            ),
          }
        : { ...values };
    try {
      await axios({
        /* url: "https://sotdl-api.herokuapp.com/insertInto", */
        url: "http://sotdl-api.herokuapp.com/insertInto",
        method: "post",
        params: {
          collectionName: typObject[contentType],
          documentObject: contentObject,
        },
      });

      onChangeFunction("Added to DB");
    } catch (e) {
      onChangeFunction("Failed to add to DB");
    }
  };
  return (
    <Card>
      <CardHeader title={`Add ${contentType}`} />
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <CardContent>
              <FormInput label="Name" name="name" autoFocus={true} />
              <FormInput label="Description." name="description" />
              {contentType === "Path" ? (
                <FormDropdown label="Type" name="type" data={typeArray} />
              ) : null}
              {contentType === "Spell" ? (
                <>
                  <FormDropdown
                    label="Tradition"
                    name="tradition"
                    data={traditionArray}
                  />
                  <FormDropdown
                    label="Attribute"
                    name="attribute"
                    data={[{ name: "Will" }, { name: "intellect" }]}
                  />
                  <FormDropdown
                    label="Type"
                    name="type"
                    data={[{ name: "Attack" }, { name: "Utility" }]}
                  />
                  <AddContentTable
                    name="Spell Proprieties"
                    data={spellPropertiesArray}
                    onChangeFunction={setSpellPropertiesArray}
                  />
                </>
              ) : null}
              {contentType === "Ancestry" || contentType === "Path" ? (
                <>
                  <AddContentTable
                    name="Features"
                    data={featuresArray}
                    onChangeFunction={setFeaturesArray}
                  />
                  <AddContentTable
                    name="Characteristics"
                    data={characteristicsArray}
                    onChangeFunction={setCharacteristicsArray}
                  />
                </>
              ) : null}
              {contentType === "Item" ? (
                <>
                  <FormInput label="Price." name="price" />
                  <FormDropdown
                    label="Item Type"
                    name="type"
                    data={itemTypeArray}
                  />
                  <FormDropdown
                    label="Availability"
                    name="availability"
                    data={availabilityArray}
                  />
                  {values.type === "Weapon" ? (
                    <>
                      <FormInput label="Damage." name="damage" />
                      <FormInput label="Hands" name="hands" />
                    </>
                  ) : null}
                  <AddContentTable
                    name="Properties"
                    data={propertiesArray}
                    onChangeFunction={setPropertiesArray}
                  />
                </>
              ) : null}
            </CardContent>

            <CardActions>
              <Button
                variant="outlined"
                color="primary"
                type="submit"
                disabled={submitting}
              >
                Submit
              </Button>
              <Button
                type="button"
                onClick={() => {
                  setCharacteristicsArray([]);
                  setFeaturesArray([]);
                  setSpellPropertiesArray([]);
                  setPropertiesArray([]);
                  form.reset();
                }}
                disabled={submitting || pristine}
              >
                Reset
              </Button>
            </CardActions>
          </form>
        )}
      />
    </Card>
  );
}

export default AddContentForm;
