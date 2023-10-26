import React from "react";
import "./navbar.scss";
import { FaBars } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
const Navbar = ({ showSide, setShowSide }) => {
  return (
    <div className="Navbar">
      <div className="Sub-Nav">
        <div className="Nav-baricon" onClick={() => setShowSide(!showSide)}>
          <FaBars />
        </div>
        <div className="Nav-Logo">Meez</div>
        <div className="Nav-Right-Icon">
          <div className="Nav-settingicon">
            <BsThreeDotsVertical />
          </div>
          <div className="Nav-settingicon">
            <CiSettings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
