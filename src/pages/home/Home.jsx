import React from "react";
import { Featured } from "../../components/featured/Featured";
import { FeaturedProperties } from "../../components/featuredProperties/FeaturedProperties";
import Header from "../../components/header/Header";
import { MailList } from "../../components/mailList/MailList";
import { PropertyList } from "../../components/propertyList/PropertyList";

import { Navbar } from "../navbar/Navbar";
import "./home.css";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by Property Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties />
        <MailList />
      </div>
    </div>
  );
};
