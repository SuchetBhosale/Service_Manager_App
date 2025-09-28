import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
