import React from "react";
import { getQueriesForElement } from "@testing-library/react";
import ReactDom from "react-dom";
import Checkboxwithlabel from "../Checkboxwithlabel";

describe("testing Checkboxwithlabel", () => {
  test("checks for correct label", () => {
    const root = document.createElement("div");
    ReactDom.render(
      <Checkboxwithlabel
        mainLabel={"Portugal"}
        label={"Aasiya Jayavant"}
        onChange={() => {}}
      />,
      root
    );
    const { queryByLabelText, getByLabelText } = getQueriesForElement(root);
    expect(getByLabelText("Aasiya Jayavant")).not.toBeNull();
  });
});
