import React from "react";
import "./list.css";
import Header from "../../components/header/Header";
import { Navbar } from "../navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format, setDate } from "date-fns";
import { DateRange } from "react-date-range";

export const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
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
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOPtionText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="text" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOPtionText">
                    Max Price <small>per night</small>
                  </span>
                  <input type="text" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOPtionText">
                    Min Price <small>per night</small>
                  </span>
                  <input
                    type="text"
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOPtionText">Adult</span>
                  <input
                    type="text"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOPtionText">Children</span>
                  <input
                    type="text"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOPtionText">Room</span>
                  <input type="text" className="lsOptionInput" min={1} />
                </div>
              </div>
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};
