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

  const onSubmit = (values) => {
    onChangeFunction({
      ...values,
      characteristics: characteristicsArray,
      features: featuresArray,
    });
  };
  return (
    <Card>
      <CardHeader title={`Add ${contentType}`} />
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, values, form }) => (
          <form>
            <CardContent>
              <FormInput label="Name" name="name" />
              <FormInput label="Description." name="description" />
              {contentType == "Ancestry" ? (
                <>
                  <FormInput label="Languages" name="languages" />
                  <FormInput label="Professions" name="professions" />
                </>
              ) : null}
              {contentType == "Path" ? (
                <FormDropdown label="Type" name="type" data={typeArray} />
              ) : null}
              {contentType == "Spell" ? (
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
              {contentType == "Ancestry" || contentType === "Path" ? (
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
              <Button onClick={() => handleSubmit()}>Submit</Button>
            </CardActions>
          </form>
        )}
      />
    </Card>
  );
}

export default AddContentForm;
