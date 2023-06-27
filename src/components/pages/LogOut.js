import React from "react";
import "../../styles/LogOut.css";
import { Link } from "react-router-dom";

const LogOut = () => {
  return (
    <>
      <h2 className="title">
        Leaving the stage, but the melody lingers on. Thank you for joining the symphony!
      </h2>
      <div className="card-container">
        <div className="front">
          <p className="out-text">Thank you for the musical moments!</p>
        </div>
        <div className="back">
          <p className="out-text">Go back to your melody!</p>
          <button className="btns">
            <Link to="/Login" className="btn">LogIn</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default LogOut;

