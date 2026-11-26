import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import RecipeGallery from ".";

describe("RecipeGallery component", () => {
  afterEach(() => {
    cleanup();
  });
  it("Displays the recipe images", () => {
    const recipes = [
      {
        id: 1,
        name: "Classic Margherita Pizza",
        image: "pizza.jpg",
        mealType: ["Dinner"],
        difficulty: "Easy",
        servings: 4,
      },
    ];

    render(
      <BrowserRouter>
        <RecipeGallery recipes={recipes} />
      </BrowserRouter>,
    );

    const image = screen.getByAltText("Classic Margherita Pizza");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "pizza.jpg");
  });
});
