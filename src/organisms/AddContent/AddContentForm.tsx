import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
} from "@material-ui/core";
import { DropDown, AddContentTable } from "../../atoms";

interface AddContentFormProps {
  contentType: any;
}

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

function AddContentForm({ contentType }: AddContentFormProps) {
  const [characteristicsArray, setCharacteristicsArray] = useState([]);
  const [featuresArray, setFeaturesArray] = useState([]);
  return (
    <Card>
      <CardHeader title={`Add ${contentType}`} />
      <CardContent>
        <TextField label="Name" variant="outlined" />
        <TextField label="Description." variant="outlined" />

        {contentType == "Ancestry" ? (
          <>
            <TextField label="Languages." variant="outlined" />
            <TextField label="Professions." variant="outlined" />
          </>
        ) : null}
        {contentType == "Path" ? (
          <DropDown
            label="Type"
            data={[{ name: "Novice" }, { name: "Expert" }, { name: "Master" }]}
            filterBy="name"
          />
        ) : null}
        {contentType == "Spell" ? (
          <>
            <DropDown
              label="Type"
              data={[{ name: "Attack" }, { name: "Utility" }]}
              filterBy="name"
            />
            <TextField label="Target." variant="outlined" />
            <TextField label="Area." variant="outlined" />
            <TextField label="Duration." variant="outlined" />
          </>
        ) : null}

        {contentType == "Ancestry" || contentType === "Path" ? (
          <>
            <AddContentTable name="Features" data={featuresArray} />
            <AddContentTable
              name="Characteristics"
              data={characteristicsArray}
            />
          </>
        ) : null}
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default AddContentForm;
