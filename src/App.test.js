import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component tests", () => {
  test("title test", () => {
    render(<App />);
    const linkElement = screen.getByText("ReactMeals");
    expect(linkElement).toBeInTheDocument();
  });
});
