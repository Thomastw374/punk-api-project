import { render, screen } from "@testing-library/react";
import BeerCard from "./BeerCard"

it("should render the beer name", () => {
  render(<BeerCard />);

  const beerName = screen.getByRole("heading")

  expect(beerName).toBeInTheDocument();
});
