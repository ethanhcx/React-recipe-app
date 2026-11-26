import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { FavouritesProvider } from '../../context/FavouritesContext';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import BuildTheRecipe from '.';

global.fetch = vi.fn();

function createFetchResponse(data) {
    return { json: () => new Promise((resolve) => resolve(data)) }
}

describe("BuildTheRecipe Component", () => {

    afterEach(() => {
        cleanup();        
    })

    it("Displays one recipe when the API returns one recipe", async () => {

        const data = {
            recipes: [
                {
                    id: 1,
                    name: "Chicken Pasta",
                    image: "chicken.jpg",
                    ingredients: ["Chicken", "Pasta"],
                    instructions: ["Cook the pasta", "Add chicken"],
                    mealType: ["Lunch"],
                    difficulty: "Easy",
                    caloriesPerServing: 450,
                    prepTimeMinutes: 10,
                    cookTimeMinutes: 20
                }
            ]
        }

        fetch.mockResolvedValue(createFetchResponse(data));

        render(
                <FavouritesProvider>
                    <BuildTheRecipe />
                </FavouritesProvider>
              );

        const recipe = await screen.findByRole("main-heading");

        expect(recipe).toHaveTextContent("Chicken Pasta");
        expect(recipe).toBeInTheDocument();
    })
})