import React from "react";
import logo from "./images/logo.svg";
import avatar from "./images/avatar.png";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-dark" style={{ backgroundColor: "#101010" }}>
      <div className="container-fluid mx-2">
        <li className="nav-item mx-4 my-2" style={{ listStyle: "none" }}>
          <img src={logo} alt="logo" />
        </li>
        <div className="d-flex mx-4">
          <h5 className=" mx-3 my-3 text-light text-decoration-none">
            {props.user.name}
          </h5>
          <li className="nav-item my-2" style={{ listStyle: "none" }}>
            <img src={avatar} alt="logo" />
          </li>
        </div>
      </div>
    </nav>
  );
}
