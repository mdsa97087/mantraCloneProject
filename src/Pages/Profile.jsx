import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../All_Router/Navbar";

function Profile() {
  return (
    <>
      <div
        className="navbardiv"
        style={{
          height: "57px",
          marginBottom: "10px",
        }}
      >
        <Navbar />
      </div>
     
    </>
  );
}

export default Profile;
