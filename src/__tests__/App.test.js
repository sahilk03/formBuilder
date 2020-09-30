import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

describe("testing SelectedComponent", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
