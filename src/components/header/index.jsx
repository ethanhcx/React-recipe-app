import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function header() {
  return (
    <>
      <header className="header">
        <NavLink to="/" className="logo">
          Sik<span>a</span>Recipe
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/favourites">Favourites</NavLink>
          <NavLink to="/explore">Explore</NavLink>

          <NavLink to="/buildrecipe" className="search-button">
            Build a recipe
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
