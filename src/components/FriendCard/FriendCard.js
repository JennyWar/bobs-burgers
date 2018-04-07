import React from "react";
import "./FriendCard.css";


const FriendCard = props => (
    <div 
      className="card" 
      value={props.id} 
      onClick={() => props.handleClick(props.id)}
    >
      <div className="img-container">
        <img alt={props.name} src={props.image} width="100px" height="100px"/>
      </div>
    </div>
  );
  
export default FriendCard;