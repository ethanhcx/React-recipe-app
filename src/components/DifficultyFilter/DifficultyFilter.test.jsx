import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";

import * as matches from '@testing-library/jest-dom/matchers'
expect.extend(matches)

import DifficultyFilter from ".";

describe('DifficultyFilter components', () => {

    beforeEach(() => {
        render(<DifficultyFilter />)
    })

    // afterEach(() => {
    //     cleanup()
    // })

    it('displays a dropdown of different difficulty of the recipes',  () => {
        const diffElement = screen.getByRole('combobox')
        expect(diffElement).toBeInTheDocument()
        expect(diffElement).toHaveLength(3)
        expect(diffElement).toHaveTextContent('Easy')
        expect(diffElement).toHaveTextContent('Medium')

    })

})