import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Header from ".";

describe("Header component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Displays a nav bar with four children", () => {
    const nav = screen.getByRole("navigation");

    expect(nav).toBeInTheDocument();
    expect(nav.childNodes.length).toEqual(4);
  });

  it("Changes location when a navlink is clicked", async () => {
    expect(window.location.href).not.toContain("/explore");

    const explore = screen.getByText("Explore");
    await userEvent.click(explore);

    expect(window.location.href).toContain("/explore");
  });
});
