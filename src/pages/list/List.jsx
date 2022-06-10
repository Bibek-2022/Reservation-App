import React from "react";
import Header from "../../components/header/Header";
import { Navbar } from "../navbar/Navbar";

export const List = () => {
  return (
    <div>
      <Navbar /> <Header type="list" />
    </div>
  );
};
