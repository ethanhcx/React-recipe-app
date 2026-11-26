import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";

import * as matches from '@testing-library/jest-dom/matchers'
expect.extend(matches)

import MealTypeFilter from ".";

describe('MealTypeFilter components', () => {

    beforeEach(() => {
        render(<MealTypeFilter />)
    })

    it('displays a dropdown of the different meal type the user can filter through',  () => {
        const typeFilter = screen.getByRole('combobox')
        expect(typeFilter).toBeInTheDocument()
        expect(typeFilter).toHaveLength(5)
        expect(typeFilter).toHaveTextContent('Breakfast')
        expect(typeFilter).toHaveTextContent('Lunch')
        expect(typeFilter).toHaveTextContent('Dinner')
        expect(typeFilter).toHaveTextContent('Snack')

    })
})