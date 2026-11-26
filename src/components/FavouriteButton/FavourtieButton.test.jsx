import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { FavouritesProvider } from "../../context/FavouritesContext";
import userEvent from "@testing-library/user-event";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import FavouriteButton from ".";

const mockRecipe = {
    id: 1,
    name: "Classic Margherita Pizza"
}

describe("Favourite Button component", () => {
    beforeEach(() => {
        render(
            <FavouritesProvider>
                <FavouriteButton recipe={mockRecipe}/>
            </FavouritesProvider>
        )
    })

    afterEach(() => cleanup())


    it("toggles the saved/save when the button is clicked", async () => {
        const button = screen.getByRole("button")

        await userEvent.click(button)
        expect(button).toHaveClass("favourite-button-active")
        expect(button).toHaveTextContent("Saved")

        await userEvent.click(button)
        expect(button).toHaveClass("favourite-button")
        expect(button).toHaveTextContent("Save")
        
    })

    it("Button starts as not saved", () => {
        const button = screen.getByRole("button")
        expect(button).toHaveTextContent("Save")
        expect(button).toHaveAttribute("aria-pressed", "false")
        expect(button).toHaveClass("favourite-button")
        expect(button).not.toHaveClass("favourite-button-active")
    })
})


