import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import { Footer } from "../../components";

export default function HomePage() {
  return (
    <>
      <main className="home-page">
        <section className="homepage-section">
          <div className="homepage-content">
            <span className="small-text">Don't know what to cook?</span>

            <h1>Leave it to us!</h1>

            <p>
              Build recipes by filtering on what ingredients you currently have
              or explore all available recipes.
            </p>
            <div className="homepage-buttons">
              <Link className="primary-button" to="/buildrecipe">
                Build a recipe
              </Link>
              <Link className="secondary-button" to="/explore">
                Explore recipes
              </Link>
            </div>
          </div>

          <div className="homepage-image">
            <img
              src="https://cdn.dummyjson.com/recipe-images/18.webp"
              alt="Korean Bibimbap"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
