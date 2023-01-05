import { render, screen } from "@testing-library/react";
import MealsSummary from "./MealsSummary";

describe("Meals Summary component tests", () => {
  test("Meals Info", () => {
    render(<MealsSummary />);
    const linkElement = screen.getByText("Delicious Food, Delivered To You");
    expect(linkElement).toBeInTheDocument();
  });
});
