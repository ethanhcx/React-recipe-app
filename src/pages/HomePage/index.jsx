import React from "react";
import "./homepage.css";

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="homepage">
        <div className="homepage-content">
          <span className="small-text"></span>

          <h1>
            <span> </span>
          </h1>

          <p>Discover delicious recipes</p>

          <div className="hero-buttons">
            <button className="primary-button">Build a recipe</button>

            
          </div>
        </div>

        <div className="hero-image">
          <img src="https://www.slazzer.com/static/images/design_templates/recipe_photo_designer/placeholder.png" alt="image of a pizza" />
        </div>
      </section>
    </main>
  );
}
