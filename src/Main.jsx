import React,{useState} from "react";
import "./Main.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
const Main = () => {
    const [showSide,setShowSide]=useState(false)
  return (
    <div className="Main-Container">
      <Navbar showSide={showSide} setShowSide={setShowSide}/>
      
      <div className="Main-Content">
      <Sidebar showSide={showSide} setShowSide={setShowSide}/>
      </div>
    </div>
  );
};

export default Main;
