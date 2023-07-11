import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";

const Footer = () => {
  return (
    <div className="footer  text-center bg-primary text-light">
      <div className="text-center bg-primary text-light">
        &copy; {new Date().getFullYear()} Copyright:
        <NavLink className="text-dark" to="http://roysoft.co.in/rs/">
          Roysoft
        </NavLink>
      </div>
      <div className="div2">
        <ul>
          <li>
            <FacebookRoundedIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <LocalPhoneRoundedIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
