import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./header.css";
export const Header = () => {
  return (
    <div className="header">
      <div className="headerList">
        <div ClassName="headerListItem active">
          <FontAwesomeIcon icon={faBed} />
          <span>Stays</span>
        </div>
        <div ClassName="headerListItem">
          <FontAwesomeIcon icon={faPlane} />
          <span>Plane</span>
        </div>
        <div ClassName="headerListItem">
          <FontAwesomeIcon icon={faCar} />
          <span>Car</span>
        </div>
        <div ClassName="headerListItem">
          <FontAwesomeIcon icon={faTaxi} />
          <span>Taxi</span>
        </div>
        <div ClassName="headerListItem">
          <FontAwesomeIcon icon={faBed} />
          <span>Attractions</span>
        </div>
        <h1 className="headerTitle">Discounts!!!</h1>
        <p className="headerDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          temporibus.
        </p>
        <button className="headerBtn">Book Now</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <input
              type="text"
              placeholder="Where are you up to?"
              className="headerSearchInput"
            />
          </div>
        </div>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <input
              type="text"
              placeholder="Where are you up to?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearch">
            <div className="headerSearchItem">
              <input
                type="text"
                placeholder="Where are you up to?"
                className="headerSearchInput"
              />
            </div>
          </div>
          <div className="headerSearch">
            <div className="headerSearchItem">
              <input
                type="text"
                placeholder="Where are you up to?"
                className="headerSearchInput"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
