import React from "react";
import { Featured } from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import { Navbar } from "../navbar/Navbar";
import "./home.css";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
      </div>
    </div>
  );
};
