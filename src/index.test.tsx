import ReactDOM from "react-dom";
import App from "App";
import React from "react";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  it("renders the app component without crashing", () => {
    const containerId = "root";

    const div = document.createElement("div");
    div.id = containerId;

    document.body.appendChild(div);
    require("./index.tsx");

    expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div);
  });
});
