import { render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {}
    disconnect() {}
  };
});

test("renders the main sections", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /renke cui/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /contact me/i })).toBeInTheDocument();
});
