import {render, screen} from "@testing-library/react";
import SortButton from "./SortButton";

describe('SortButton', () => {
    test('It is not sorted when no option is selected', () => {
        render(<SortButton/>);
        expect(screen.getByTestId('noOptionSelected')).toBeInTheDocument();
    })
});