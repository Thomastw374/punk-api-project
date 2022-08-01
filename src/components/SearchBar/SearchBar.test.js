import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar"


it("should render the searchbox", () => {
    render(<SearchBar/>);

    const searchBar = screen.getByRole("searchbox")

    expect(searchBar).toBeInTheDocument()
});