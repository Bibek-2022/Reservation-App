import React from "react";
import "./list.css";
import Header from "../../components/header/Header";
import { Navbar } from "../navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar /> <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <div className="lsTitle">Search</div>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder="Destination" />
            </div>
            <div className="lsItem">
              <label>Check-In Date</label>
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};
