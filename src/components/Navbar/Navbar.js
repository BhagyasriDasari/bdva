import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-inner">
        {/* Hamburger (mobile only) */}
        <button
          ref={btnRef}
          className="hamburger"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          ☰
        </button>

        {/* Left Links */}
        <nav className="nav-links desktop-nav">
          <a className="manuka_left" href="#which">Which Manuka Is For Me?</a>
          <a href="#shop">Shop</a>
          <a href="#explore">Explore</a>
        </nav>

        {/* Center Logo */}
        <div className="logo">
          <img src="https://res.cloudinary.com/ddnpmhq8v/image/upload/v1756689523/Vector_oxsiql.png" alt="New Zealand Honey Co." />
          <h3>NEW ZEALAND HONEY CO .</h3>
        </div>

        {/* Right Links */}
        <nav className="nav-links desktop-nav">
          <a href="#about">About</a>
          <a href="#rewards">Rewards</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Icons */}
        <div className="nav-actions">
          <button className="icon-btn">🔍</button>
          <button className="icon-btn">👤</button>
          <button className="icon-btn cart">
            🛒 <span className="badge">0</span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <nav
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu ${open ? "open" : ""}`}
      >
        <ul>
          <li><a href="#which">Which Manuka Is For Me?</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#explore">Explore</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#rewards">Rewards</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
