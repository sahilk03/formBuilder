import React from "react";
import { getQueriesForElement } from "@testing-library/react";
import ReactDom from "react-dom";
import SelectedComponent from "../SelectedComponent";

describe("testing SelectedComponent", () => {
  test("checks for correct toast added", () => {
    const root = document.createElement("div");
    ReactDom.render(
      <SelectedComponent
        selectedList={{ Portugal: ["Aasiya Jayavant", "ABC"] }}
      />,
      root
    );
    const { getByPlaceholderText } = getQueriesForElement(root);
    expect(getByPlaceholderText("Aasiya Jayavant")).not.toBeNull();
    expect(getByPlaceholderText("ABC")).not.toBeNull();
  });
});
