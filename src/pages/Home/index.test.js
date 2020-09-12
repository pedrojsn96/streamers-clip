import React from "react";
import { render } from "@testing-library/react";
import Home from "./";

test("renders home", () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/list of streamers/i);
  expect(linkElement).toBeInTheDocument();
});
