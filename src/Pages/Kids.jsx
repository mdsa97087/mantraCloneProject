import { VStack } from "@chakra-ui/react";
import React from "react";
import Navbar from "../All_Router/Navbar";
import ChildApi from "../Components/ChildApi";
import "./Style/AllInclude.css";
// import "./Style/Home.css";

function Kids() {
  return (
    <>
      <div
        className="navbardiv"
        style={{
          height: "57px",
          marginBottom: "10px",
          // position:'fixed'
        }}
      >
        <Navbar />
      </div>
      
      <div
        style={{
          margin: "auto",
          border: "1px solid white",
          width: "1200px",
          // marginTop:'500px'
          // height:'1000px',
        }}
      >
    
        <div className="container">
          <div className="rotatediv">
            <img
              className="rotateimg"
              src="https://cdn.flipshope.com/blog/wp-content/uploads/2022/07/Myntra-Fashion-Carnival.jpg
      "
              alt=""
            />

            <img
              className="rotateimg"
              src="https://cdn.flipshope.com/blog/wp-content/uploads/2022/08/Myntra-Right-to-Fashion-Sale.png
      "
              alt=""
            />
            <img
              className="rotateimg"
              src="https://www.bigcommerce.com/blog/wp-content/uploads/2018/08/baby-kids-ecommerce-design.png
      "
              alt=""
            />
            <img
              className="rotateimg"
              src="https://www.bigcommerce.com/blog/wp-content/uploads/2018/08/Scentos-750x398.jpg
      "
              alt=""
            />
            <img
              className="rotateimg"
              src="https://www.bigcommerce.com/blog/wp-content/uploads/2018/08/See-Kai-Run-750x397.jpg
      "
              alt=""
            />
            <img
              className="rotateimg"
              src="https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/244314308_201195142101767_5745221908885252169_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=DGXsMds5KYsAX--bXMb&_nc_ht=scontent-del1-1.xx&oh=00_AT-5b-clyGanxrjtXHY93ZWsc-HK25pUjMg3H3Ua8TJ7Dw&oe=634287A1
      "
              alt=""
            />
          </div>
        </div>
         
        <div
        style={{
              // border:"blue",
              marginTop:'550px',
              height:'500px'
            }}
          >
          <ChildApi />
        </div>
      </div>
    </>
  );
}

export default Kids;
