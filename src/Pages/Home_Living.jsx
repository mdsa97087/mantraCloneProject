import { VStack } from "@chakra-ui/react";
import React from "react";
import Navbar from "../All_Router/Navbar";
import "./Style/AllInclude.css"


function Home_Living() {
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
      <VStack className="container">
      <div className="rotatediv">
        <img
          className="rotateimg"
          src="https://www.whiteteak.com/media/catalog/category/Wall-Lights-banner.jpg
"
          alt=""
        />

        <img
          className="rotateimg"
          src="https://www.whiteteak.com/media/catalog/category/Pendant-Light-banner.jpg
"
          alt=""
        />

        <img
          className="rotateimg"
          src="https://www.whiteteak.com/media/catalog/category/Table-Lamp-banner.jpg
"
          alt=""
        />

        <img
          className="rotateimg"
          src="https://www.whiteteak.com/media/catalog/category/Desk_Study-Lamps.jpg
"
          alt=""
        />

        <img
          className="rotateimg"
          src="https://www.whiteteak.com/media/catalog/category/Designer-Fans-banner.jpg
"
          alt=""
        />

        <img
          className="rotateimg"
          src="https://www.whiteteak.com/media/catalog/category/Ceiling-Lights-banner.jpg
"
          alt=""
        />

        <img
          className="rotateimg"
          src="https://www.whiteteak.com/media/catalog/category/Outdoor-Wall-Lights-banner.jpg
"
          alt=""
        />

        <img
          className="rotateimg"
          src="https://www.whiteteak.com/media/catalog/category/Modern-Collection.jpg
"
          alt=""
        />
      </div>
      </VStack>
      
    </>
  );
}

export default Home_Living;
