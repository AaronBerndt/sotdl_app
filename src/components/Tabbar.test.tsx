import React from "react";
import { render } from "@testing-library/react";
import TabBar from "./Tabbar";

test("renders", () => {
  const tabArray = [{ name: "Home" }];
  const { getByText } = render(<TabBar tabs={tabArray} />);
  expect(true).toBe(true);
});
