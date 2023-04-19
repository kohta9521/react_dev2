import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNav = () => {
    setIsNavVisible(!isnavVisible);
  };

  return (
    <header className="Header">
      <h2 className="Logo">Logo</h2>
      <nav className="Nav">
        <a href="">Home</a>
        <a href="">Article</a>
        <a href="">About</a>
        <button>Login</button>
      </nav>
    </header>
  );
}
