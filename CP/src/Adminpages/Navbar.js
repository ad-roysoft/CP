import { useState } from "react";

import { NavLink, Navigate } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../image/logo.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const { login } = useSelector((state) => ({ ...state.app }));
  const navigate = useNavigate();
  const doLogOut = () => {
    console.log("doLogOut");
    //login.token="";
    //login.status="N"
    navigate("/CP");
  };

  return (
    <div className="navbar_container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container">
          <NavLink className="navbar-brand">
            <img src={logo} className="logo" alt="century_logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MenuRoundedIcon />
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDarkDropdown">
            <ul className="navbar-nav ms-auto ">
              {login && login.ipRole && (
                <li class="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/default"
                  >
                    Summary
                  </NavLink>
                </li>
              )}
              {login && login.ipRole && (
                <li class="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/visitorentry"
                  >
                    Visitor Entry
                  </NavLink>
                </li>
              )}
              {login &&
                login.ipRole &&
                (login.ipRole == "IP99" || login.ipRole == "IP98") && (
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/reportpage"
                    >
                      Generate Report
                    </NavLink>
                  </li>
                )}
              {login && login.ipRole && (
                <li className="nav-item dropdown user-profile">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {login && login.userName}
                    <AccountCircleIcon />
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/profile">
                        Profile
                      </NavLink>
                    </li>
                    {login && login.ipRole && login.ipRole == "IP99" && (
                      <li>
                        <NavLink className="dropdown-item" to="/newProfile">
                          New Profile
                        </NavLink>
                      </li>
                    )}
                    <li>
                      <NavLink
                        className="dropdown-item"
                        onClick={() => doLogOut()}
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
