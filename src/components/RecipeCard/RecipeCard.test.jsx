import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import RecipeCard from ".";
import { FavouritesProvider } from "../../context/FavouritesContext";

const mockRecipe = {
      "id": 3,
      "name": "Chocolate Chip Cookies",
      "ingredients": [
        "All-purpose flour",
        "Butter, softened",
        "Brown sugar",
        "White sugar",
        "Eggs",
        "Vanilla extract",
        "Baking soda",
        "Salt",
        "Chocolate chips"
      ],
      "instructions": [
        "Preheat the oven to 350°F (175°C).",
        "In a bowl, cream together softened butter, brown sugar, and white sugar.",
        "Beat in eggs one at a time, then stir in vanilla extract.",
        "Combine flour, baking soda, and salt. Gradually add to the wet ingredients.",
        "Fold in chocolate chips.",
        "Drop rounded tablespoons of dough onto ungreased baking sheets.",
        "Bake for 10-12 minutes or until edges are golden brown.",
        "Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
      "prepTimeMinutes": 15,
      "cookTimeMinutes": 10,
      "caloriesPerServing": 150
}

describe("Recipe card component", () => {
    beforeEach(() => {
        render(
            <FavouritesProvider>
                <RecipeCard recipe={mockRecipe}/>
            </FavouritesProvider>
        )
        
    })

    afterEach(() => cleanup())

    it("Recipe name renders as a heading", () => {
        const element = screen.getByRole("main-heading")
        expect(element).toBeInTheDocument()
        expect(element.textContent).toBe("Chocolate Chip Cookies")
    })

    it("Correct recipe image renders", () => {
        const image = screen.getByRole("img")
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('src', mockRecipe.image)
    })

    it("Renders te recipe card with the correct ingredients", () => {
        const ingredients = screen.getByRole("ingredients-list")
        expect(ingredients).toBeInTheDocument()
        expect(ingredients).toHaveTextContent("Chocolate chips")
    })
    it("Renders te recipe card with the correct steps", () => {
        const steps = screen.getByRole("steps-list")
        expect(steps).toBeInTheDocument()
        expect(steps).toHaveTextContent("Bake for 10-12 minutes or until edges are golden brown.")
    })
})

