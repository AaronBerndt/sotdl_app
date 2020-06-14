import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
} from "@material-ui/core";
import { DropDown } from "../../atoms";

interface AddContentFormProps {
  contentType: any;
}

function AddContentForm({ contentType }: AddContentFormProps) {
  const [characteristicsArray, setCharacteristicsArray] = useState([]);
  const [featuresArray, setFeaturesArray] = useState([]);
  return (
    <Card>
      <CardHeader title={`Add ${contentType}`} />
      <CardContent>
        <TextField label="Name" variant="outlined" />
        <TextField label="Description." variant="outlined" />
        <DropDown
          label="Type"
          data={[{ name: "Novice" }, { name: "Expert" }, { name: "Master" }]}
          filterBy="name"
        />
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default AddContentForm;
