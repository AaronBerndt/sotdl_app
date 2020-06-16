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
const typeArray = [{ name: "Novice" }, { name: "Expert" }, { name: "Master" }];
const traditionArray = [
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
].map((name) => ({ name: name }));

function AddContentForm({
  contentType,
  onChangeFunction,
}: AddContentFormProps) {
  const [characteristicsArray, setCharacteristicsArray] = useState([]);
  const [featuresArray, setFeaturesArray] = useState([]);

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
        render={({ handleSubmit, form, submitting }) => (
          <form onSubmit={handleSubmit} noValidate>
            <CardContent>
              <FormInput label="Name" name="name" />
              <FormInput label="Description." name="description" />) : null}
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
                    label="Type"
                    name="type"
                    data={[{ name: "Attack" }, { name: "Utility" }]}
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
            </CardActions>
          </form>
        )}
      />
    </Card>
  );
}

export default AddContentForm;
