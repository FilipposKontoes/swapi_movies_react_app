import {render, screen} from "@testing-library/react";
import ItemDescription from "./ItemDescription";

describe('ItemDescription', () => {
test('It renders correctly when there is no selected movie', () => {
    render(<ItemDescription/>);
    expect(screen.getByTestId('noMovieDescription')).toBeInTheDocument();
})
test('It renders correctly when there is selected movie', () => {
    const selectedMovie = {'director': '1', 'title': '2', 'opening_crawl': '3' };
    render(<ItemDescription selectedMovie={selectedMovie}/>);
    expect(screen.getByTestId('movieDescription')).toBeInTheDocument();
    expect(screen.getByText('Directed by: 1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
})
});