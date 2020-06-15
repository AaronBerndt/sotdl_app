import React from "react";
import { Form } from "react-final-form";
import FormDropdown from "./FormDropdown";
import { action } from "@storybook/addon-actions";

export default {
  title: "Atoms/Form/FormDropdown",
  component: FormDropdown,
};

export const withProps = () => (
  <Form
    onSubmit={action("button-clock")}
    render={({ form }) => (
      <form>
        <FormDropdown label="Name" name="name" data={[{ name: "John" }]} />
      </form>
    )}
  />
);
