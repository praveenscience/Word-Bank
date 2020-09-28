import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders word bank title", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/word bank/i);
  expect(linkElement).toBeInTheDocument();
});
