import React from "react";
import "./navbar.scss";
import { FaBars } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
const Navbar = ({showSide,setShowSide}) => {
    
  return (
    <div className="Navbar">
    <div className="Sub-Nav">
    <div className="Nav-baricon" onClick={()=>setShowSide(!showSide)}><FaBars /></div>
     <div className="Nav-settingicon"><CiSettings /></div>
    </div>
    </div>
  );
};

export default Navbar;
