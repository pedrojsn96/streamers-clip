import React from "react";
import { render } from "@testing-library/react";
import Home from "./";

test("renders home", () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/procurar/i);
  expect(linkElement).toBeInTheDocument();
});
