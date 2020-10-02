import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "./resume.png";

var Navigation = () => {
  return (
    <Navbar
      sticky="top"
      className="d-flex justify-content-between"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-center"
        />
        <span className="ml-3">Project Portfolio</span>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Navigation;
