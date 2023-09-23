import React from "react";

const Card = (props) => {
    return (
        <div 
        style={{margin: "10px", padding: "10px", border: "solid gray 2px", borderRadius: "5%"}}
        className="Card">
            <img src={props.cardImg} style={{width: "200px", height: "150px", objectFit: "cover"}}/>
            <h3>{props.cardName}</h3>
            <h4>{props.cardCategory}</h4>
            <button><a href={props.cardLink}>View</a></button>
        </div>
    )
}

export default Card;