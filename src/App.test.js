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

test("renders person image", () => {
  const image = screen.getByRole("img");
  expect(image).toHaveAttribute("src", lib.image);
  expect(image).toHaveAttribute("alt", lib.name);
});

test("renders person about list points", () => {
  {
    lib.aboutList.map((item) => {
      const linkElement = screen.getByText(item);
      expect(linkElement).toBeInTheDocument();
    });
  }
});

test("renders person social links", () => {
  {
    lib.links.map((item) => {
      const linkElement = screen.getByText(item.name);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", item.url);
    });
  }
});
