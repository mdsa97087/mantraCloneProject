import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../All_Router/Navbar";
import "./Login.css";

function Login() {
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
      <div className="backpink">
        <div className="loginmaindiv">
          <div>
            <img
              src="
              https://assets.myntassets.com/assets/images/2022/9/2/d9320d46-aa9d-444f-bf1f-c39780b31e321662057043860-offer-banner-300-1080x496-code-_-MYNTRA300.jpg
            "
              alt=""
            />
          </div>

          <h1
            style={{
              marginTop: "25px",
              display: "flex",
              fontSize: "25px",
              // border:'1px solid red',
              fontWeight: "700",
              gap: "10px",
              alignItems: "center",
            }}
          >
            Login
            <span>
              <p
                style={{
                  display: "flex",
                  fontSize: "25px",
                  // border:'1px solid red',
                  fontWeight: "330",
                }}
              >
                or
              </p>
            </span>
            Signup
          </h1>

          <div className="inputmaindiv">
            <div>+91 |</div>
            <div>
              <input
                className="inputdiv"
                type="text"
                placeholder="Mobile Number *"
              />
            </div>
          </div>

          <h3>
            By continuing, I agree to the{" "}
            <span className="pinkcolor">Terms of Use</span> &{" "}
            <span className="pinkcolor">Privacy Policy</span>
          </h3>

          <button className="pinkbutton">CONTINUE</button>
          <h3>
            Have trouble logging in ?{" "}
            <Link className="pinkcolor">Get help</Link>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Login;
