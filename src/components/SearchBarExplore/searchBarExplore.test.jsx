import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import SearchBarExplore from ".";

describe("SearchBarExplore component", () => {
  afterEach(() => {
    cleanup();
  });

  it("Displays the correct placeholder", () => {
    render(<SearchBarExplore searchTerm="" setSearchTerm={() => {}} />);
    const display = screen.getByPlaceholderText("Search for a recipe...");

    expect(display).toBeInTheDocument();
  });

  it("Displays the current search term", () => {
    render(<SearchBarExplore searchTerm="Pizza" setSearchTerm={() => {}} />);

    const input = screen.getByDisplayValue("Pizza");

    expect(input).toBeInTheDocument();
  });
});
