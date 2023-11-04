import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';


const Card = ({ name, speed, color, idfr }) => {

  let props = useParams();

  return (
      <div className="crewmate-card"  id = {color} >
            <img className="image" alt="crewmate" height="150px" width="auto" src="https://shimmering-stardust-c75334.netlify.app/assets/crewmate.ce385016.png" />
            <h3>Name of Crewmate: <span> {name} </span> </h3>
            <h3>Speed of Crewmate: <span> {speed} </span> </h3>
            <h3>Color of Crewmate: <span> {color} </span> </h3>
            <Link
              to={`/${idfr}`}
            >
              View Crewmate
            </Link>
            <Link
              to={`/${idfr}/edit`}
            >
              Edit Crewmate
            </Link>
        </div>
  );
};

export default Card;