import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Player.css"

export default function Player({name, score, incrementScore, id = "Players"}) {

    const handleClick = () => {
        incrementScore(id)
    }

    return (
      <li className="player">
        <p className="name">{name}</p>
        <p className="score">{score}</p>
        <button className="plus-button" onClick={handleClick} >+</button>
      </li>
    );
  
}

Player.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    incrementScore: PropTypes.func.isRequired
}