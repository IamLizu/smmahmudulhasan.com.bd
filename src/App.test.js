import { render, screen } from "@testing-library/react";
import App from "./App";
import lib from "../src/lib.json";

beforeEach(() => {
  render(<App />);
});

test("renders person name", () => {
  const linkElement = screen.getByText(lib.name);
  expect(linkElement).toBeInTheDocument();
});

test("renders person position", () => {
  const linkElement = screen.getByText(lib.position);
  expect(linkElement).toBeInTheDocument();
});
