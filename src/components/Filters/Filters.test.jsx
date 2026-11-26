import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";

import * as matches from '@testing-library/jest-dom/matchers'
expect.extend(matches)

import Filters from ".";

describe('Filters components', () => {

    const mockRecipe1 =[
        {
            id: 1,
            name: "Food1",
            ingredients: ["ing1", "ing2"],
            difficulty: "easy",
            mealType: ["dinner"]
        },

        {
            id: 2,
            name: "Food2",
            ingredients: ["ing4", "ing3"],
            difficulty: "medium",
            mealType: ["breakfast"]
        }
    ]

    it('should show all the recipes when no parameter is passed', () => {
        const result = Filters({
            recipes: mockRecipe1,
            searchString1: "",
            searchString2: "",
            difficulty: "",
            mealType: ""
        })
        expect(result).toHaveLength(2)
        expect(result[0].name).toBe('Food1')
        expect(result[1].name).toBe('Food2')


    })

    it('filters the recipe list when the user selects a difficulty level', () => {
        const result = Filters({
            recipes: mockRecipe1,
            searchString1: "",
            searchString2: "",
            difficulty: "easy",
            mealType: ""
        })
        expect(result).toHaveLength(1)
        expect(result[0].name).toBe('Food1')

    })

    it('filters the recipe list when the user selects a meal type', () => {
        const result = Filters({
            recipes: mockRecipe1,
            searchString1: "",
            searchString2: "",
            difficulty: "",
            mealType: "breakfast"
        })
        expect(result).toHaveLength(1)
        expect(result[0].name).toBe('Food2')

    })

        it('filters the recipe list when the user inputs one ingredient', () => {
        const result = Filters({
            recipes: mockRecipe1,
            searchString1: "ing1",
            searchString2: "",
            difficulty: "",
            mealType: ""
        })
        expect(result).toHaveLength(1)
        expect(result[0].name).toBe('Food1')

    })

    it('filters the recipe list when the user inputs two ingredients', () => {
        const result = Filters({
            recipes: mockRecipe1,
            searchString1: "ing3",
            searchString2: "ing4",
            difficulty: "",
            mealType: ""
        })
        expect(result).toHaveLength(1)
        expect(result[0].name).toBe('Food2')

    })

    it('filters the recipe list when the user inputs two ingredients, selects a difficulty and meal type', () => {
        const result = Filters({
            recipes: mockRecipe1,
            searchString1: "ing3",
            searchString2: "ing4",
            difficulty: "medium",
            mealType: "breakfast"
        })
        expect(result).toHaveLength(1)
        expect(result[0].name).toBe('Food2')

    })

})