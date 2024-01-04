import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import logo from "./logo.png"
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  const nav = [
    "Home",
    "Bikes",
    "Gear",
    "Parts",
    "Tires",
    "Service-Info",
    "Catalogues",
    "Contact",
  ];

  return (
    <div className="row">
      <div className="mx-auto bg-color-navbar">
        <div className="row align-items-center">
          <div className="col-2 ps-4">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="col-8 d-flex justify-content-center">
            <ul className="navbarUl d-flex list-unstyled">
              {nav.map((item) => (
                <li key={item}>
                  <button>{item}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-2 d-flex justify-content-end pe-5">
            <button className="icons">
              <FontAwesomeIcon icon={faSearch as IconDefinition} />
            </button>
            <button className="icons">
              <FontAwesomeIcon icon={faShoppingBag as IconDefinition} />
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Navbar;
