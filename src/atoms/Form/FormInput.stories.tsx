import React from "react";
import { Form } from "react-final-form";
import FormInput from "./FormInput";
import { action } from "@storybook/addon-actions";

export default {
  title: "Atoms/Form/FormInput",
  component: FormInput,
};

export const withProps = () => (
  <Form
    onSubmit={action("button-clock")}
    render={({ form }) => (
      <form>
        <FormInput label="Name" name="name" />
      </form>
    )}
  />
);
