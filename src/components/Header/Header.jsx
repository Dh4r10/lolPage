import React from "react";
import Logo from "../../assets/images/lol_logo.png";
import "../Header/Header.css";
import { alpha, styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Dark from "../../functions/Dark";
import "../Header/DarkHeader.css";

function Header() {
  const GreenSwitch = styled(Switch)(({ theme }) => ({
    position: "relative",
    top: 37,
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: "#882F7B",
      opacity: 0.8,
      "&:hover": {
        backgroundColor: alpha(purple[500], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: theme.palette.mode === "dark" ? "#000000" : "#fff",
      opacity: 0.1,
    },
  }));

  return (
    <div className="header" data-aos="fade-down">
      <div className="switch">
        <div className="sun">
          <FontAwesomeIcon icon={faSun} />
        </div>
        <GreenSwitch onClick={Dark} />
        <div className="moon">
          <FontAwesomeIcon icon={faMoon} />
        </div>
      </div>
      <div className="logoLol">
        <img src={Logo} alt="img" />
      </div>
    </div>
  );
}

export default Header;
