import React, { useState } from "react";
import filter from "./images/filter.png";
import map from "./images/map.png";
import { Link } from "react-router-dom";

export default function Home(props) {
  document.body.style.backgroundColor = "#292929";
  const [text1, setText1] = useState("text-decoration-none");
  const [text2, setText2] = useState("text-decoration-none");
  const [text3, setText3] = useState("text-decoration-none");
  const [filters, setFilter] = useState("invisible");
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");

  const underline1 = () => {
    setText1("");
    setText2("text-decoration-none");
    setText3("text-decoration-none");
  };
  const underline2 = () => {
    setText1("text-decoration-none");
    setText2("");
    setText3("text-decoration-none");
  };
  const underline3 = () => {
    setText1("text-decoration-none");
    setText2("text-decoration-none");
    setText3("");
  };
  const filterSwitch = () => {
    if (filters.length === 0) {
      setFilter("invisible");
    } else {
      setFilter("");
    }
  };
  const removeFilter = () => {
    setFilter("invisible");
  };

  const dt = new Date(props.data.Ride[0].date * 1000);
  const trdate = dt.toDateString().split(" ");
  const trtime = dt.toTimeString().substring(0, 5);
  const txtDate = `${trdate[2]}th ${trdate[1]} ${trdate[3]} ${trtime}`;
  let distance1 = 0;
  let distance2 = 0;
  let distance3 = 0;

  const select = () => {
    let val = document.getElementsByClassName("new")[0].value;
    console.log(val);
    if (val === "0") {
      setVal1("");
      setVal2("");
      setVal3("");
    } else if (val === "1") {
      setVal1("");
      setVal2("d-none");
      setVal3("d-none");
    } else if (val === "2") {
      setVal1("d-none");
      setVal2("");
      setVal3("d-none");
    } else if (val === "3") {
      setVal1("d-none");
      setVal2("d-none");
      setVal3("");
    }
  };

  props.arr[0].forEach((element) => {
    if (element < props.user.station_code) {
      distance1++;
    }
  });
  props.arr1[0].forEach((element) => {
    if (element < props.user.station_code) {
      distance2++;
    }
  });
  props.arr2[0].forEach((element) => {
    if (element < props.user.station_code) {
      distance3++;
    }
  });

  return (
    <>
      <div className="container-fluid row" onMouseLeave={removeFilter}>
        <div className="col mx-4 my-4">
          <Link
            to="/nearestrides"
            className={`my-4 ${text1} text-light text-bold`}
            onClick={underline1}
          >
            <strong>Nearest rides</strong>
          </Link>
          <Link
            to="/upcomingrides"
            className={`mx-5 my-4 ${text2} text-light text-bold`}
            onClick={underline2}
          >
            <strong>Upcoming rides ({props.data.Ride.length})</strong>
          </Link>
          <Link
            to="/pastrides"
            className={`my-4 ${text3} text-light text-bold`}
            onClick={underline3}
          >
            <strong>Past rides ({props.data.Ride.length})</strong>
          </Link>
        </div>
        <div className="col d-inline-flex justify-content-end mx-1 my-4">
          <li>
            <img
              className="col-md-4"
              src={filter}
              alt="logo"
              onClick={filterSwitch}
            />
          </li>
          <h6 className="mx-1 my-1 text-light" onClick={filterSwitch}>
            Filters
          </h6>
        </div>

        <div className="w-100"></div>

        <div
          className={`card mx-5 my-4 ${filters}`}
          style={{
            backgroundColor: "#101010",
            width: "14rem",
            height: "12rem",
            color: "#A5A5A5",
            borderRadius: "15px",
            position: "absolute",
            top: "80px",
            right: "-20px",
            zIndex: 1,
          }}
        >
          <div className="card-body" onMouseLeave={removeFilter}>
            <h5 className="mx-3">Filters</h5>
            <hr className="mx-2" />
            <select
              className="form-select form-select-md mb-3 bg-dark text-light shadow-none new"
              aria-label=".form-select-md example"
              style={{ borderColor: "#000000" }}
              onClick={select}
            >
              <option value="0">State</option>
              <option value="1" className={`${val1}`}>
                {props.data.Ride[0].state}
              </option>
              <option value="2" className={`${val2}`}>
                {props.data.Ride[1].state}
              </option>
              <option value="3" className={`${val3}`}>
                {props.data.Ride[2].state}
              </option>
            </select>

            <select
              className="form-select form-select-md mb-3 bg-dark text-light shadow-none new"
              aria-label=".form-select-md example"
              style={{ borderColor: "#000000" }}
              onClick={select}
            >
              <option value="0">City</option>
              <option value="1" className={`${val1}`}>
                {props.data.Ride[0].city}
              </option>
              <option value="2" className={`${val2}`}>
                {props.data.Ride[1].city}
              </option>
              <option value="3" className={`${val3}`}>
                {props.data.Ride[2].city}
              </option>
            </select>
          </div>
        </div>

        <div className={`container mx-3 my-2 ${val1}`} onChange={select}>
          <div
            className="card"
            style={{
              backgroundColor: "#101010",
              borderRadius: "15px",
              listStyle: "none",
            }}
          >
            <div className="card-body row text-light">
              <li className="nav-item mx-3 my-3 col w-25">
                <img src={map} alt="logo" />
              </li>
              <li className="my-3 col w-50">
                <li className="my-1" style={{ marginLeft: "-285px" }}>
                  Ride Id: {props.data.Ride[0].id}
                </li>
                <li className="my-1" style={{ marginLeft: "-285px" }}>
                  Origin Station: {props.data.Ride[0].origin_station_code}
                </li>
                <li className="my-1" style={{ marginLeft: "-285px" }}>
                  station_path: {props.data.Ride[0].station_path}
                </li>
                <li className="my-1" style={{ marginLeft: "-285px" }}>
                  Date: {txtDate}
                </li>
                <li className="my-1" style={{ marginLeft: "-285px" }}>
                  Distance: {props.arr[0][distance1] - props.user.station_code}
                </li>
              </li>
              <li className="my-3 col w-25">
                <button
                  type="button"
                  className="btn btn-dark rounded-pill shadow-none"
                  style={{ marginLeft: "300px" }}
                >
                  {props.data.Ride[0].state}
                </button>
                <button
                  type="button"
                  className="btn btn-dark rounded-pill mx-4 shadow-none"
                  style={{ marginRight: "300px" }}
                >
                  {props.data.Ride[0].city}
                </button>
              </li>
            </div>
          </div>
        </div>
        <div className={`container mx-3 my-2 ${val2}`} onChange={select}>
          <div
            className="card"
            style={{
              backgroundColor: "#101010",
              borderRadius: "15px",
              listStyle: "none",
            }}
          >
            <div className="card-body row text-light">
              <li className="nav-item mx-3 my-3 col w-25">
                <img src={map} alt="logo" />
              </li>
              <li className="my-3 col w-50">
                <li className="my-1" style={{ marginLeft: "-285px" }}>
                  Ride Id: {props.data.Ride[1].id}
                </li>
                <li className="my-1" style={{ marginLeft: "-285px" }}>
                  Origin Station: {props.data.Ride[1].origin_station_code}
                </li>
                <li className="my-1" style={{ marginLeft: "-285px" }}>
                  station_path: {props.data.Ride[1].station_path}
                </li>
                <li className="my-1" style={{ marginLeft: "-285px" }}>
                  Date: {txtDate}
                </li>
                <li className="my-1" style={{ marginLeft: "-285px" }}>
                  Distance: {props.arr1[0][distance2] - props.user.station_code}
                </li>
              </li>
              <li className="my-3 col w-25">
                <button
                  type="button"
                  className="btn btn-dark rounded-pill shadow-none"
                  style={{ marginLeft: "300px" }}
                >
                  {props.data.Ride[1].state}
                </button>
                <button
                  type="button"
                  className="btn btn-dark rounded-pill mx-4 shadow-none"
                  style={{ marginRight: "300px" }}
                >
                  {props.data.Ride[1].city}
                </button>
              </li>
            </div>
          </div>
        </div>
        <div className={`container mx-3 my-2 ${val3}`} onChange={select}>
          <div
            className="card"
            style={{
              backgroundColor: "#101010",
              borderRadius: "15px",
              listStyle: "none",
            }}
          >
            <div className="card-body row text-light">
              <li className="nav-item mx-3 my-3 col w-25">
                <img src={map} alt="logo" />
              </li>
              <li className="my-3 col w-50">
                <li className="my-1" style={{ marginLeft: "-285px" }}>
                  Ride Id: {props.data.Ride[2].id}
                </li>
                <li className="my-1" style={{ marginLeft: "-285px" }}>
                  Origin Station: {props.data.Ride[2].origin_station_code}
                </li>
                <li className="my-1" style={{ marginLeft: "-285px" }}>
                  station_path: {props.data.Ride[2].station_path}
                </li>
                <li className="my-1" style={{ marginLeft: "-285px" }}>
                  Date: {txtDate}
                </li>
                <li className="my-1" style={{ marginLeft: "-285px" }}>
                  Distance: {props.arr2[0][distance3] - props.user.station_code}
                </li>
              </li>
              <li className="my-3 col w-25">
                <button
                  type="button"
                  className="btn btn-dark rounded-pill shadow-none"
                  style={{ marginLeft: "300px" }}
                >
                  {props.data.Ride[2].state}
                </button>
                <button
                  type="button"
                  className="btn btn-dark rounded-pill mx-4 shadow-none"
                  style={{ marginRight: "300px" }}
                >
                  {props.data.Ride[2].city}
                </button>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
