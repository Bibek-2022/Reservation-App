import React from "react";
import "./featured.css";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featured">
        <img
          src="https://unsplash.com/photos/_dS27XGgRyQ"
          alt="hotel"
          srcset=""
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featured">
        <img
          src="https://unsplash.com/photos/rlwE8f8anOc"
          alt="hotel"
          srcset=""
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featured">
        <img
          src="https://unsplash.com/photos/DGa0LQ0yDPc"
          alt="hotel"
          srcset=""
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  );
};
