import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders home page and check headings and inputs", () => {
  const { getByText } = render(<App />);
  const navBarHeading = getByText(/Training Events/i);
  const mapHeading = getByText(/Come Visit Us At Our Events/i);
  const input1 = getByText(/Filter Title/i);
  const input2 = getByText(/Filter Location/i);
  const input3 = getByText(/Filter By Date/i);
  const eventList = getByText(/No events found/i);
  expect(navBarHeading).toBeInTheDocument();
  expect(mapHeading).toBeInTheDocument();
  expect(input1).toBeInTheDocument();
  expect(input2).toBeInTheDocument();
  expect(input3).toBeInTheDocument();
  expect(eventList).toBeInTheDocument();
});
