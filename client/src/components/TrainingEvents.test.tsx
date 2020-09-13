import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { EventModel } from "../models/EventModel";
import { LocationModel } from "../models/LocationModel";
import EventsList from "./EventsList";

import TrainingEvents from "./TrainingEvents";

let container: any = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders TrainingEvents and test the text content", () => {
  act(() => {
    render(<TrainingEvents />, container);
  });
  expect(container.textContent).toMatch(/Training Events/i);
  expect(container.textContent).toMatch(/Come Visit Us At Our Events/i);
  expect(container.textContent).toMatch(/Filter Location/i);
});

it("renders EventsList component and test the list item", () => {
  act(() => {
    render(
      <EventsList
        data={[
          new EventModel(
            "Melbourne Cricket Ground",
            "12/02/2020",
            "image url",
            new LocationModel("Melbourne", "Victoria", "Australia")
          ),
        ]}
      />,
      container
    );
  });
  expect(container.textContent).toMatch(/Melbourne Cricket Ground/i);
  expect(container.textContent).toMatch(/Victoria, Australia/i);
  expect(container.textContent).toMatch(/Date: 12\/2\/2020/i);
});
