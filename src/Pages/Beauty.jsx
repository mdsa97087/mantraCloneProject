import { VStack } from "@chakra-ui/react";
import React from "react";
import Navbar from "../All_Router/Navbar";
import "./Style/AllInclude.css"

function Beauty() {
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
          src="https://www.culturalindia.net/iliimages/traditional-to-contemporary-6.jpg
        "
          alt=""
        />
        <img
          className="rotateimg"
          src="https://media.istockphoto.com/photos/set-of-cosmetic-products-for-makeup-with-natural-brushes-picture-id1178545014?k=20&m=1178545014&s=612x612&w=0&h=eVGLYcYpd5yHKVXxlZkCbTHQ_D0LqpCVaxsE1kwDm9Y=
        "
          alt=""
        />
        <img
          className="rotateimg"
          src="https://media.istockphoto.com/photos/woman-in-mask-on-face-in-spa-beauty-salon-picture-id921797424?k=20&m=921797424&s=612x612&w=0&h=-oKjXqOjxamu9dcOtcF-WggUrXE8mB1DDTmTbCuACrc=
        "
          alt=""
        />
        <img
          className="rotateimg"
          src="https://cdn.shopify.com/s/files/1/0070/7032/files/diy-product-photography.jpg?v=1599161908&width=1024
        "
          alt=""
        />
        <img
          className="rotateimg"
          src="https://img.freepik.com/premium-photo/feminine-accessories-collage-with-handbag-shoes-beauty-products-flat-lay-top-view_479776-1038.jpg?w=996
        "
          alt=""
        />
        <img
            className="rotateimg"
            src="https://cdn.flipshope.com/blog/wp-content/uploads/2022/09/Myntra-Big-Fashion-Festival-till-2nd-Oct.jpg
          "
            alt=""
          />
          <img
            className="rotateimg"
            src="
          https://cdn.flipshope.com/blog/wp-content/uploads/2022/02/Myntra-Birthday-Sale.png
          "
            alt=""
          />
      </div>
      </VStack>
      
    </>
  );
}

export default Beauty;
