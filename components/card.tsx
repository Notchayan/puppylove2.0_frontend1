import React, { useState } from "react";
import "./card.css";

const Card = ({ student, onClick, clickedStudents }: any) => {
  const userName = student.u;
  const roll = student.i;

  const stylesss = {
    backgroundImage: `url("https://home.iitk.ac.in/~${userName}/dp"), url("https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/${roll}_0.jpg"), url("/_next/static/media/GenericMale.592f9e48.png")`,
  };

  const isClicked = clickedStudents ? clickedStudents.includes(student.i) : false;

  const clicked = () => {
    if (!isClicked) {
      onClick(student.i);
    } else {
      alert('This student has already been clicked!');
    }
  };

  return (
    <div className="card">
      <div className="image-box">
        <div className="profile" style={stylesss}></div>
      </div>
      <div className="carddetails">
        <p className="card-details">{student.n}</p>
        <button className="button" onClick={clicked}>
          {isClicked ? "Already Clicked" : "Send Heart"}
        </button>
      </div>
    </div>
  );
};

export default Card;
