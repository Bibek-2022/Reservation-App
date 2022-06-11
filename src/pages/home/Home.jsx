import React from "react";
import { Featured } from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import { PropertyList } from "../../components/propertyList/propertyList";

import { Navbar } from "../navbar/Navbar";
import "./home.css";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Home Title</h1>
        <PropertyList />
      </div>
    </div>
  );
};
