import React from 'react';
import onlineIcon from "../../icons/onlineIcon.png";
import "./TextContainer.css";

const TextContainer = ({users}) => {
  return (
    <div className="userContainer">
      <h1>People currently chatting:</h1>
      {users.map(user => {
        return (
          <div key={user.name} className="userBox">
            <h5 className="username">{user.name}</h5>
            <img alt="onlineicon" src={onlineIcon} />
          </div>
        )
      })}
    </div>
  )
}

export default TextContainer;