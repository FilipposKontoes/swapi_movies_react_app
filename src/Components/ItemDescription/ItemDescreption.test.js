import {render, screen} from "@testing-library/react";
import ItemDescription from "./ItemDescription";

describe('ItemDescription', () => {
test('It renders correctly when there is no selected movie', () => {
    render(<ItemDescription/>);
    expect(screen.getByTestId('noMovieDescription')).toBeInTheDocument()
})
test('It renders correctly when there is selected movie', () => {
    const selectedMovie = [];
    render(<ItemDescription selectedMovie={selectedMovie}/>);
    expect(screen.getByTestId('movieDescription')).toBeInTheDocument()
})
})