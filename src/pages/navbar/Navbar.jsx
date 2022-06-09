import React from "react";
import { Header } from "../../components/header/Header";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">BibekBooking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
        <Header />
      </div>
    </div>
  );
};
