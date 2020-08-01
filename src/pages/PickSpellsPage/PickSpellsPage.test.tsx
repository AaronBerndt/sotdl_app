import React from "react";
import { withMagic as PickSpellsPage } from "./PickSpellsPage.stories";
import { render, fireEvent } from "@testing-library/react";

describe("Pick Spell Page", () => {
  it("it renders", async () => {
    render(<PickSpellsPage />);
  });
  it("description", async () => {
    const { getByPlaceholderText, queryByText } = render(<PickSpellsPage />);
    fireEvent.change(getByPlaceholderText("Traditions"), {
      target: { value: "Air" },
    });
    expect(queryByText("Traditions")).toHaveTextContent("Air");
    expect(getByPlaceholderText("Tradition Pool")).toHaveTextContent("0");
  });
});

