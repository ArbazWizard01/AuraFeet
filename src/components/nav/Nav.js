import React, { useState, useContext } from "react";
import "./nav.css";
import { CartContext } from "../../contexts/CartContext";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const handleChange = (link) => {
    setActiveLink(link);
  };
  const { cartOn } = useContext(CartContext);
  return (
    <nav className="navbar">
      <img
        src={`${window.location.origin}/AuraFeet/app-icon.png`}
        className="App-logo"
        alt="logo"
      />
      <div className="nav-section">
        <a
          className={activeLink === "Home" ? "active" : ""}
          onClick={() => handleChange("Home")}
          href="#"
        >
          Home
        </a>
        <a
          className={activeLink === "Product" ? "active" : ""}
          onClick={() => handleChange("Product")}
          href="#"
        >
          Product
        </a>
        <a
          className={activeLink === "Featured" ? "active" : ""}
          onClick={() => handleChange("Featured")}
          href="#"
        >
          Featured
        </a>
        <a
          className={activeLink === "Blog" ? "active" : ""}
          onClick={() => handleChange("Blog")}
          href="#"
        >
          Blog
        </a>
        <a
          className={activeLink === "News" ? "active" : ""}
          onClick={() => handleChange("News")}
          href="#"
        >
          News
        </a>
      </div>
      <div className="nav-icons">
        <span className="material-icons">favorite</span>
        <span className="material-icons" onClick={cartOn}>
          shopping_cart
        </span>
      </div>
    </nav>
  );
};

export default Nav;
