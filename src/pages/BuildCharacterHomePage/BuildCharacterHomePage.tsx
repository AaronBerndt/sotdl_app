import React, { useContext } from "react";
import BuildCharacterContext from "../../context/BuildCharacterContext";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { Form } from "react-final-form";
import { FormInput, FormDropdown } from "../../atoms";

function BuildCharacterHomePage() {
  const { setName, setLevel, name, level } = useContext(BuildCharacterContext);

  const levelArray = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10].map((level) => ({
    name: `${level}`,
  }));

  const onSubmit = (values: any) => {
    const { name, level } = values;
    setName(name);
    setLevel(level);
  };
  return (
    <>
      <Card>
        <CardActions>
          <Button>Randomize Character</Button>
        </CardActions>
        <Form
          onSubmit={onSubmit}
          initialValues={{ name, level }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <CardContent>
                <FormInput label="Name" name="name" autoFocus={true} />
                <FormDropdown label="Level" name="level" data={levelArray} />
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
                  onClick={() => form.reset()}
                  disabled={submitting || pristine}
                >
                  Reset
                </Button>
              </CardActions>
            </form>
          )}
        />
      </Card>
    </>
  );
}

export default BuildCharacterHomePage;

