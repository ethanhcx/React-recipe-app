import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import SearchForm from '.';

describe("SearchForm component", () => {

    const setSearchString1 = vi.fn();
    const setSearchString2 = vi.fn();

    beforeEach(() => {
        render(
            <SearchForm setSearchString1={setSearchString1} setSearchString2={setSearchString2}
            />
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("Displays two input fields", () => {
        const inputs = screen.getAllByRole("textbox");
        expect(inputs.length).toBe(2);
    });

    it("Submits the ingredients when the search button is clicked", async () => {
        const input1 = screen.getByPlaceholderText("Ingredient 1");
        const input2 = screen.getByPlaceholderText("Ingredient 2");
        const button = screen.getByRole("button");

        await userEvent.type(input1, "Chicken");
        await userEvent.type(input2, "Pasta");
        await userEvent.click(button);

        expect(setSearchString1).toHaveBeenCalledWith("Chicken");
        expect(setSearchString2).toHaveBeenCalledWith("Pasta");
    });
});