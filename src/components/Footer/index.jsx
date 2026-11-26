import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <h2>We'd love to hear from you</h2>

      <p>Do you have a question or an idea you want to share?</p>

      <button className="contact">
        <a href="mailto:admin@sikarecipe.com">Contact us</a>
      </button>

      <div className="footer-bottom">© 2026 SikaRecipe</div>
    </footer>
  );
}
