import {
  Box,
  Container,
  Grid,
  GridItem,
  Image,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../All_Router/Navbar";
import "./Style/AllInclude.css";
import one from "../Img/one.png";
import two from "../Img/two.png";
import "./Style/Home.css";
import { Link } from "react-router-dom";
import Api from "../Components/Api";

function Home() {
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
      <div
        style={{
          margin: "auto",
          border: "1px solid red",
          width: "1200px",
          // height:'1000px',
        }}
       >
        {/* -----------------for ROTATE----------------------- */}
        <div className="container">
          <div className="rotatediv">
            <img
              className="rotateimg"
              src="https://cdn.flipshope.com/blog/wp-content/uploads/2021/10/Myntra-Diwali-Sale.png"
              alt=""
            />

            {/* <img
              className="rotateimg"
              src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/a857386febb6aefc.jpg
            "
              alt=""
            /> */}
            <img
              className="rotateimg"
              src="https://assets.indiadesire.com/images/myntra%20buy%201%20get%203%20free.jpg"
              alt=""
            />
            <img
              className="rotateimg"
              src="https://www.whiteteak.com/media/fishpig/webp/customimages/Main-banner-3_1700x450.webp

          "
              alt=""
            />

            <img
              className="rotateimg"
              src="https://cdn.flipshope.com/blog/wp-content/uploads/2022/09/Myntra-Upcoming-Sale.jpg"
              alt=""
            />

            <img
              className="rotateimg"
              src="https://cdn.flipshope.com/blog/wp-content/uploads/2021/12/Myntra-Year-End-Sale-2021.png"
              alt=""
            />
            <img
              className="rotateimg"
              src="
          https://cdn.flipshope.com/blog/wp-content/uploads/2022/02/Myntra-Birthday-Sale.png
          "
              alt=""
            />
            <img
              className="rotateimg"
              src="https://cdn.flipshope.com/blog/wp-content/uploads/2022/02/Myntra-Clearance-Sale.png
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
              src="https://www.whiteteak.com/media/catalog/category/Chandelier-banner_10.jpg
           "
              alt=""
            />
          </div>
        </div>
        {/* -----------------------NET PART--------------- */}
        <Link to="#">
          <div
            style={{
              margin: "auto",
              // border: "1px solid green",
              width: "1200px",
              // height: "150px",
              marginTop: "520px",
            }}
          >
            <img
              style={{
                height: "300px",
                margin: "auto",
                width: "1200px",
              }}
              src={two}
              alt=""
            />
            <img
              style={{
                height: "200px",
                margin: "auto",
              }}
              src={one}
              alt=""
            />
          </div>
        </Link>

        {/* -----------------TOP CATOGERY------------------ */}

        <Link>
          <div
            style={{
              // border:'1px solid red',
              display: "flex",
              // width:'1200px',
              alignItems: "center",
              gap: "20px",
              padding: "20px",
              justifyContent: "center",
            }}
          >
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/flower-1303-801012.png
          "
              alt=""
            />
            <h1
              style={{
                fontSize: "50px",
                fontFamily: "times",
                fontWeight: "600",
                color: "#FFA400",
              }}
            >
              TOP CATEGORIES
            </h1>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/flower-1303-801012.png
            "
              alt=""
            />
          </div>
        </Link>
        {/* -----------------------------TOP CATEGORY PHOTO------------ */}
        <div className="linkimgdiv">
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/AohIQkm.png
              "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/XOHpnYI.png
              "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/w6YUpn5.png
              "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/Hx2OfrP.png
               "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/f2LhlbH.png
              "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/dEw3uv2.png
        "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/XOHpnYI.png
        "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/Fg230gI.png
        "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/jiLdyMm.png
        "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/SIWucWJ.png
        "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/MatyFJN.png
        "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/yKZqtjS.png
        "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/84yVXVD.png
        "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/po4hKJm.png
        "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/CaNOxME.png
        "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/XheL3Zu.png
        "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/TpTlVlb.png
        "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/r5gOfgG.png
        "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/XIeEWB1.png
        "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/d4wwbDi.png
        "
              alt=""
            />
          </Link>
          <Link to="#">
            <img
              className="linkimg"
              src="https://i.imgur.com/AohIQkm.png
        "
              alt=""
            />
          </Link>
        </div>

        {/* ----------------SHOP BY CATEGORY-------------------- */}

        <Link>
          <div
            style={{
              // border:'1px solid red',
              display: "flex",
              // width:'1200px',
              alignItems: "center",
              gap: "20px",
              padding: "20px",
              justifyContent: "center",
            }}
          >
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/flower-1303-801012.png
          "
              alt=""
            />
            <h1
              style={{
                fontSize: "50px",
                fontFamily: "times",
                fontWeight: "600",
                color: "#FFA400",
              }}
            >
              SHOP BY CATEGORIES
            </h1>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/flower-1303-801012.png
            "
              alt=""
            />
          </div>
        </Link>

        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/hv427P8.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/wJEkkeB.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/aT82fHs.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/4D0eUvr.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/t38A0h2.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/TAja61b.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/r1UZ61F.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/vI06hrA.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/AHbrbqp.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/sdl0A7u.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/FeIvW2t.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/s4cvmVi.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/bRbP4u5.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/xL7q51c.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/Qor9iIe.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/CJDcdjz.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/edlIlK9.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/bmthJIC.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/iWkHtZG.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/ZU10jWP.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/wluB1Yg.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/iri1cPW.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/xrgf8YQ.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/kEzPGXr.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/7M68K8N.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/pZEn2WI.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/AJs9SfL.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/gUEYq6K.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/NC5CxGj.png
                "
              alt=""
            />
          </Link>
          <Link>
            <img
              style={{
                width: "200px",
              }}
              src="https://i.imgur.com/YRx3bWI.png
                "
              alt=""
            />
          </Link>
        </Grid>
        <Api/>
      </div>
    </>
  );
}

export default Home;
