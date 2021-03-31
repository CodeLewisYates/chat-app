import React from 'react';
import "./InfoBar.css";
import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";

const InfoBar = ({room}) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="onlineicon"/>
      </div>
      <h3>{room}</h3>
      <div className="rightInnerContainer">
        <a href="/"><img src={closeIcon} alt="closeicon"/></a>
      </div>
    </div>
  );
}

export default InfoBar;