import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [man, setman] = useState(false);
  const [women, setWomen] = useState(false);
  const [kids, setKids] = useState(false);
  const [home_living, setHome_living] = useState(false);
  const [beauty, setBeauty] = useState(false);
  const [studio, setStudio] = useState(false);
  const [data, setData] = useState("");
  const [profile, setProfile] = useState(false);

  // -----------------------------FOR man ---------------------

  function handleMouseoverman() {
    setman(true);
  }
  function handleMouseOutman() {
    setman(false);
  }

  // ----------------------FOR WOMEN----------------------------

  function handleMouseoverWomen() {
    setWomen(true);
  }
  function handleMouseOutWomen() {
    setWomen(false);
  }

  // ---------------------FOR KIDS-----------------------------

  function handleMouseoverKids() {
    setKids(true);
  }
  function handleMouseOutKids() {
    setKids(false);
  }

  // ----------------------HOME_LIVING------------------------

  function handleMouseoverHome_living() {
    setHome_living(true);
  }
  function handleMouseOutHome_living() {
    setHome_living(false);
  }

  // -----------------------BEAUTY -----------------------------

  function handleMouseoverBeauty() {
    setBeauty(true);
  }
  function handleMouseOutBeauty() {
    setBeauty(false);
  }

  // --------------------------STUDIO------------------------------

  function handleMouseoverStudio() {
    setStudio(true);
  }
  function handleMouseOutStudio() {
    setStudio(false);
  }

  //  -----------------------FOR INPUT TAG -----------------------

  const handleChange = (event) => {
    setData(event.target.value);
    console.log(data);
  };

  // -------------------------------------FOR PROFILE----------------

  function handleMouseoverProfile() {
    setProfile(true);
  }
  function handleMouseOutProfile() {
    setProfile(false);
  }

  return (
    <>
      <Box
        bg="white"
        w="100%"
        // p={4}
        color="#2C3333"
        h={"65px"}
        style={{
          // border: "1px solid red",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontWeight: "700",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          position: "fixed",
          zIndex: "9999",
        }}
      >
        <Box
          style={{
            // border: "1px solid blue",
            display: "flex",
            alignItems: "center",
            width: "750px",
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <div>
              <img
                style={{
                  // boder:'5px solid green',
                  width: "150px",
                  height: "60px",
                }}
                src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png"
                alt=""
              />
            </div>
          </Link>
          <Link
            to="/men"
            onMouseOver={handleMouseoverman}
            onMouseOut={handleMouseOutman}
          >
            <div
              style={{
                // border:'1px solid red',
                height: "60px",
                display: "flex",
                alignItems: "center",
              }}
            >
              MEN
            </div>
          </Link>
          {/* <Box></Box> */}

          <Link
            to="/women"
            onMouseOver={handleMouseoverWomen}
            onMouseOut={handleMouseOutWomen}
          >
            <div
              style={{
                // border:'1px solid red',
                height: "60px",
                display: "flex",
                alignItems: "center",
              }}
            >
              WOMEN
            </div>
          </Link>
          <Link
            to="/kids"
            onMouseOver={handleMouseoverKids}
            onMouseOut={handleMouseOutKids}
          >
            <div
              style={{
                // border:'1px solid red',
                height: "60px",
                display: "flex",
                alignItems: "center",
              }}
            >
              KIDS
            </div>
          </Link>
          <Link
            to="/home_living"
            onMouseOver={handleMouseoverHome_living}
            onMouseOut={handleMouseOutHome_living}
          >
            <div
              style={{
                // border:'1px solid red',
                height: "60px",
                display: "flex",
                alignItems: "center",
              }}
            >
              HOME & LIVING
            </div>
          </Link>

          <Link
            to="/beauty"
            onMouseOver={handleMouseoverBeauty}
            onMouseOut={handleMouseOutBeauty}
          >
            <div
              style={{
                // border:'1px solid red',
                height: "60px",
                display: "flex",
                alignItems: "center",
              }}
            >
              BEAUTY
            </div>
          </Link>
          <Link
            to="/studio"
            onMouseOver={handleMouseoverStudio}
            onMouseOut={handleMouseOutStudio}
          >
            <div
              style={{
                // border:'1px solid red',
                height: "60px",
                display: "flex",
                alignItems: "center",
              }}
            >
              STUDIO
              <sup
                style={{
                  color: "red",
                }}
              >
                NEW
              </sup>{" "}
            </div>
          </Link>
        </Box>
        <Box
          style={{
            backgroundColor: "#F1EFDC",
            border: "1px solid red",
            display: "flex",
            alignItems: "center",
            // width: "800px",
            gap: "2px",
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          <img
            className="navbarlogoimg"
            style={{
              marginLeft: "5px",
              marginRight: "5px",
              width: "20px",
            }}
            src="https://cdn.iconscout.com/icon/free/png-64/search-1941-1143726.png
        "
            alt=""
          />
          <input
            style={{
              width: "400px",
              padding: "10px",
              border: "none",
              outline: "none",
            }}
            type="text"
            value={data}
            onChange={handleChange}
            placeholder="Search for products, brands and more"
          />
        </Box>
        <Box
          style={{
            // border: "1px solid red",
            display: "flex",
            width: "250px",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Link to="/profile">
            <Box
              className="profileboxmain"
              onMouseOver={handleMouseoverProfile}
              onMouseOut={handleMouseOutProfile}
            >
              <img
                className="navbarlogoimg"
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/90-3108288-2595273.png
            "
                alt=""
              />
              Profile
            </Box>
          </Link>

          <Box>
            <Link to="/wishlist">
              <img
                className="navbarlogoimg"
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/wishlist-4464374-3703219.png
          "
                alt=""
              />
              Wishlist
            </Link>
          </Box>
          <Box>
            <Link to="/bag">
              <img
                className="navbarlogoimg"
                src="https://cdn.iconscout.com/icon/free/png-64/basket-cart-ecommerce-online-shopping-bag-27566.png
          "
                alt=""
              />
              Bag
            </Link>
          </Box>
        </Box>
      </Box>

      {/* --------------FOR MEN------------------------ */}

      {man && (
        <Grid
          onMouseOver={handleMouseoverman}
          onMouseOut={handleMouseOutman}
          className="mendiv"
          templateColumns="repeat(5, 1fr)"
          gap={15}
        >
          <Grid>
            <GridItem color="red.400">Topwear</GridItem>
            <GridItem>T-Shirts</GridItem>
            <GridItem>Casual Shirts</GridItem>
            <GridItem>Formal Shirts</GridItem>
            <GridItem>Swetears</GridItem>
            <GridItem>Suits</GridItem>
            <GridItem>Blazers & Coats</GridItem>

            <GridItem color="red.400">Indian & Festive Wear</GridItem>
            <GridItem>Kurta</GridItem>
            <GridItem>Sherwanis</GridItem>
            <GridItem>Dhotis</GridItem>
            <GridItem>Nehru Jackets</GridItem>
          </Grid>
          <Grid>
            <GridItem color="red.400">Bottomwear</GridItem>
            <GridItem>Jeans</GridItem>
            <GridItem>Casual Trousers</GridItem>
            <GridItem>Formal Trousrs</GridItem>
            <GridItem>Shorts</GridItem>
            <GridItem color="red.400">Innerwear & Sleepwear</GridItem>
            <GridItem>Briefs & Trunks</GridItem>
            <GridItem>Boxers</GridItem>
            <GridItem>Vests</GridItem>
            <GridItem color="red.400">Plus Size</GridItem>
          </Grid>

          <Grid>
            <GridItem color="red.400">Footwear </GridItem>
            <GridItem>Casual Shoes</GridItem>
            <GridItem>Sports Shoes</GridItem>
            <GridItem>Formal Shoes</GridItem>
            <GridItem>Sneakers</GridItem>
            <GridItem>Socks</GridItem>
            <GridItem>Flips Floops</GridItem>
            <GridItem color="red.400">Personal Care & Grooming</GridItem>
            <GridItem color="red.400">Sunglasses & Frames</GridItem>
            <GridItem color="red.400">Watches</GridItem>
          </Grid>

          <Grid>
            <GridItem color="red.400">Sports & Active Wear</GridItem>
            <GridItem>Sport Shoes</GridItem>
            <GridItem>Active T-shirts</GridItem>
            <GridItem>Tracksuits</GridItem>
            <GridItem>Swimwear</GridItem>
            <GridItem>Sports Accessories</GridItem>
            <GridItem color="red.400">Gadgets</GridItem>
            <GridItem>Smart Wearables</GridItem>
            <GridItem>Fitness Gadgets</GridItem>
            <GridItem>Speakers</GridItem>
          </Grid>
          <Grid>
            <GridItem color="red.400">Fashion Accessories</GridItem>
            <GridItem>Wallets</GridItem>
            <GridItem>Belts</GridItem>
            <GridItem>Perfumes & Body Mists</GridItem>
            <GridItem>trimmers</GridItem>
            <GridItem>Helmets</GridItem>
            <GridItem>Rings & Wristwear</GridItem>
            <GridItem>Caps & Hats</GridItem>
            <GridItem color="red.400">Bags & Backpacks</GridItem>
            <GridItem color="red.400">Luggages & Trolleys</GridItem>
          </Grid>
        </Grid>
      )}

      {/* --------------------FOR WOMEN---------------- */}

      {women && (
        <Grid
          onMouseOver={handleMouseoverWomen}
          onMouseOut={handleMouseOutWomen}
          className="mendiv"
          templateColumns="repeat(5, 1fr)"
          gap={15}
        >
          <Grid>
            <GridItem color="red.400">Topwear</GridItem>
            <GridItem>T-Shirts</GridItem>
            <GridItem>Casual Shirts</GridItem>
            <GridItem>Formal Shirts</GridItem>
            <GridItem>Swetears</GridItem>
            <GridItem>Suits</GridItem>
            <GridItem>Blazers & Coats</GridItem>

            <GridItem color="red.400">Indian & Festive Wear</GridItem>
            <GridItem>Kurta</GridItem>
            <GridItem>Sherwanis</GridItem>
            <GridItem>Dhotis</GridItem>
            <GridItem>Nehru Jackets</GridItem>
          </Grid>
          <Grid>
            <GridItem color="red.400">Bottomwear</GridItem>
            <GridItem>Jeans</GridItem>
            <GridItem>Casual Trousers</GridItem>
            <GridItem>Formal Trousrs</GridItem>
            <GridItem>Shorts</GridItem>
            <GridItem color="red.400">Innerwear & Sleepwear</GridItem>
            <GridItem>Briefs & Trunks</GridItem>
            <GridItem>Boxers</GridItem>
            <GridItem>Vests</GridItem>
            <GridItem color="red.400">Plus Size</GridItem>
          </Grid>

          <Grid>
            <GridItem color="red.400">Footwear </GridItem>
            <GridItem>Casual Shoes</GridItem>
            <GridItem>Sports Shoes</GridItem>
            <GridItem>Formal Shoes</GridItem>
            <GridItem>Sneakers</GridItem>
            <GridItem>Socks</GridItem>
            <GridItem>Flips Floops</GridItem>
            <GridItem color="red.400">Personal Care & Grooming</GridItem>
            <GridItem color="red.400">Sunglasses & Frames</GridItem>
            <GridItem color="red.400">Watches</GridItem>
          </Grid>

          <Grid>
            <GridItem color="red.400">Sports & Active Wear</GridItem>
            <GridItem>Sport Shoes</GridItem>
            <GridItem>Active T-shirts</GridItem>
            <GridItem>Tracksuits</GridItem>
            <GridItem>Swimwear</GridItem>
            <GridItem>Sports Accessories</GridItem>
            <GridItem color="red.400">Gadgets</GridItem>
            <GridItem>Smart Wearables</GridItem>
            <GridItem>Fitness Gadgets</GridItem>
            <GridItem>Speakers</GridItem>
          </Grid>
          <Grid>
            <GridItem color="red.400">Fashion Accessories</GridItem>
            <GridItem>Wallets</GridItem>
            <GridItem>Belts</GridItem>
            <GridItem>Perfumes & Body Mists</GridItem>
            <GridItem>trimmers</GridItem>
            <GridItem>Helmets</GridItem>
            <GridItem>Rings & Wristwear</GridItem>
            <GridItem>Caps & Hats</GridItem>
            <GridItem color="red.400">Bags & Backpacks</GridItem>
            <GridItem color="red.400">Luggages & Trolleys</GridItem>
          </Grid>
        </Grid>
      )}

      {/* ---------------FOR KIDS------------------ */}

      {kids && (
        <Grid
          onMouseOver={handleMouseoverKids}
          onMouseOut={handleMouseOutKids}
          className="mendiv"
          templateColumns="repeat(5, 1fr)"
          gap={15}
        >
          <Grid>
            <GridItem color="red.400">Topwear</GridItem>
            <GridItem>T-Shirts</GridItem>
            <GridItem>Casual Shirts</GridItem>
            <GridItem>Formal Shirts</GridItem>
            <GridItem>Swetears</GridItem>
            <GridItem>Suits</GridItem>
            <GridItem>Blazers & Coats</GridItem>

            <GridItem color="red.400">Indian & Festive Wear</GridItem>
            <GridItem>Kurta</GridItem>
            <GridItem>Sherwanis</GridItem>
            <GridItem>Dhotis</GridItem>
            <GridItem>Nehru Jackets</GridItem>
          </Grid>
          <Grid>
            <GridItem color="red.400">Bottomwear</GridItem>
            <GridItem>Jeans</GridItem>
            <GridItem>Casual Trousers</GridItem>
            <GridItem>Formal Trousrs</GridItem>
            <GridItem>Shorts</GridItem>
            <GridItem color="red.400">Innerwear & Sleepwear</GridItem>
            <GridItem>Briefs & Trunks</GridItem>
            <GridItem>Boxers</GridItem>
            <GridItem>Vests</GridItem>
            <GridItem color="red.400">Plus Size</GridItem>
          </Grid>

          <Grid>
            <GridItem color="red.400">Footwear </GridItem>
            <GridItem>Casual Shoes</GridItem>
            <GridItem>Sports Shoes</GridItem>
            <GridItem>Formal Shoes</GridItem>
            <GridItem>Sneakers</GridItem>
            <GridItem>Socks</GridItem>
            <GridItem>Flips Floops</GridItem>
            <GridItem color="red.400">Personal Care & Grooming</GridItem>
            <GridItem color="red.400">Sunglasses & Frames</GridItem>
            <GridItem color="red.400">Watches</GridItem>
          </Grid>

          <Grid>
            <GridItem color="red.400">Sports & Active Wear</GridItem>
            <GridItem>Sport Shoes</GridItem>
            <GridItem>Active T-shirts</GridItem>
            <GridItem>Tracksuits</GridItem>
            <GridItem>Swimwear</GridItem>
            <GridItem>Sports Accessories</GridItem>
            <GridItem color="red.400">Gadgets</GridItem>
            <GridItem>Smart Wearables</GridItem>
            <GridItem>Fitness Gadgets</GridItem>
            <GridItem>Speakers</GridItem>
          </Grid>
          <Grid>
            <GridItem color="red.400">Fashion Accessories</GridItem>
            <GridItem>Wallets</GridItem>
            <GridItem>Belts</GridItem>
            <GridItem>Perfumes & Body Mists</GridItem>
            <GridItem>trimmers</GridItem>
            <GridItem>Helmets</GridItem>
            <GridItem>Rings & Wristwear</GridItem>
            <GridItem>Caps & Hats</GridItem>
            <GridItem color="red.400">Bags & Backpacks</GridItem>
            <GridItem color="red.400">Luggages & Trolleys</GridItem>
          </Grid>
        </Grid>
      )}

      {/* ---------------HOME_LIVING------------------------- */}

      {home_living && (
        <Grid
          onMouseOver={handleMouseoverHome_living}
          onMouseOut={handleMouseOutHome_living}
          className="mendiv"
          templateColumns="repeat(5, 1fr)"
          gap={15}
        >
          <Grid>
            <GridItem color="red.400">Topwear</GridItem>
            <GridItem>T-Shirts</GridItem>
            <GridItem>Casual Shirts</GridItem>
            <GridItem>Formal Shirts</GridItem>
            <GridItem>Swetears</GridItem>
            <GridItem>Suits</GridItem>
            <GridItem>Blazers & Coats</GridItem>

            <GridItem color="red.400">Indian & Festive Wear</GridItem>
            <GridItem>Kurta</GridItem>
            <GridItem>Sherwanis</GridItem>
            <GridItem>Dhotis</GridItem>
            <GridItem>Nehru Jackets</GridItem>
          </Grid>
          <Grid>
            <GridItem color="red.400">Bottomwear</GridItem>
            <GridItem>Jeans</GridItem>
            <GridItem>Casual Trousers</GridItem>
            <GridItem>Formal Trousrs</GridItem>
            <GridItem>Shorts</GridItem>
            <GridItem color="red.400">Innerwear & Sleepwear</GridItem>
            <GridItem>Briefs & Trunks</GridItem>
            <GridItem>Boxers</GridItem>
            <GridItem>Vests</GridItem>
            <GridItem color="red.400">Plus Size</GridItem>
          </Grid>

          <Grid>
            <GridItem color="red.400">Footwear </GridItem>
            <GridItem>Casual Shoes</GridItem>
            <GridItem>Sports Shoes</GridItem>
            <GridItem>Formal Shoes</GridItem>
            <GridItem>Sneakers</GridItem>
            <GridItem>Socks</GridItem>
            <GridItem>Flips Floops</GridItem>
            <GridItem color="red.400">Personal Care & Grooming</GridItem>
            <GridItem color="red.400">Sunglasses & Frames</GridItem>
            <GridItem color="red.400">Watches</GridItem>
          </Grid>

          <Grid>
            <GridItem color="red.400">Sports & Active Wear</GridItem>
            <GridItem>Sport Shoes</GridItem>
            <GridItem>Active T-shirts</GridItem>
            <GridItem>Tracksuits</GridItem>
            <GridItem>Swimwear</GridItem>
            <GridItem>Sports Accessories</GridItem>
            <GridItem color="red.400">Gadgets</GridItem>
            <GridItem>Smart Wearables</GridItem>
            <GridItem>Fitness Gadgets</GridItem>
            <GridItem>Speakers</GridItem>
          </Grid>
          <Grid>
            <GridItem color="red.400">Fashion Accessories</GridItem>
            <GridItem>Wallets</GridItem>
            <GridItem>Belts</GridItem>
            <GridItem>Perfumes & Body Mists</GridItem>
            <GridItem>trimmers</GridItem>
            <GridItem>Helmets</GridItem>
            <GridItem>Rings & Wristwear</GridItem>
            <GridItem>Caps & Hats</GridItem>
            <GridItem color="red.400">Bags & Backpacks</GridItem>
            <GridItem color="red.400">Luggages & Trolleys</GridItem>
          </Grid>
        </Grid>
      )}

      {/* ----------------------BEAUTY-------------------------- */}

      {beauty && (
        <Grid
          onMouseOver={handleMouseoverBeauty}
          onMouseOut={handleMouseOutBeauty}
          className="mendiv"
          templateColumns="repeat(5, 1fr)"
          gap={15}
        >
          <Grid>
            <GridItem color="red.400">Topwear</GridItem>
            <GridItem>T-Shirts</GridItem>
            <GridItem>Casual Shirts</GridItem>
            <GridItem>Formal Shirts</GridItem>
            <GridItem>Swetears</GridItem>
            <GridItem>Suits</GridItem>
            <GridItem>Blazers & Coats</GridItem>

            <GridItem color="red.400">Indian & Festive Wear</GridItem>
            <GridItem>Kurta</GridItem>
            <GridItem>Sherwanis</GridItem>
            <GridItem>Dhotis</GridItem>
            <GridItem>Nehru Jackets</GridItem>
          </Grid>
          <Grid>
            <GridItem color="red.400">Bottomwear</GridItem>
            <GridItem>Jeans</GridItem>
            <GridItem>Casual Trousers</GridItem>
            <GridItem>Formal Trousrs</GridItem>
            <GridItem>Shorts</GridItem>
            <GridItem color="red.400">Innerwear & Sleepwear</GridItem>
            <GridItem>Briefs & Trunks</GridItem>
            <GridItem>Boxers</GridItem>
            <GridItem>Vests</GridItem>
            <GridItem color="red.400">Plus Size</GridItem>
          </Grid>

          <Grid>
            <GridItem color="red.400">Footwear </GridItem>
            <GridItem>Casual Shoes</GridItem>
            <GridItem>Sports Shoes</GridItem>
            <GridItem>Formal Shoes</GridItem>
            <GridItem>Sneakers</GridItem>
            <GridItem>Socks</GridItem>
            <GridItem>Flips Floops</GridItem>
            <GridItem color="red.400">Personal Care & Grooming</GridItem>
            <GridItem color="red.400">Sunglasses & Frames</GridItem>
            <GridItem color="red.400">Watches</GridItem>
          </Grid>

          <Grid>
            <GridItem color="red.400">Sports & Active Wear</GridItem>
            <GridItem>Sport Shoes</GridItem>
            <GridItem>Active T-shirts</GridItem>
            <GridItem>Tracksuits</GridItem>
            <GridItem>Swimwear</GridItem>
            <GridItem>Sports Accessories</GridItem>
            <GridItem color="red.400">Gadgets</GridItem>
            <GridItem>Smart Wearables</GridItem>
            <GridItem>Fitness Gadgets</GridItem>
            <GridItem>Speakers</GridItem>
          </Grid>
          <Grid>
            <GridItem color="red.400">Fashion Accessories</GridItem>
            <GridItem>Wallets</GridItem>
            <GridItem>Belts</GridItem>
            <GridItem>Perfumes & Body Mists</GridItem>
            <GridItem>trimmers</GridItem>
            <GridItem>Helmets</GridItem>
            <GridItem>Rings & Wristwear</GridItem>
            <GridItem>Caps & Hats</GridItem>
            <GridItem color="red.400">Bags & Backpacks</GridItem>
            <GridItem color="red.400">Luggages & Trolleys</GridItem>
          </Grid>
        </Grid>
      )}

      {/* -----------------------STUDIO------------------------- */}

      {studio && (
        <div
          onMouseOver={handleMouseoverStudio}
          onMouseOut={handleMouseOutStudio}
          className="mendiv"
          style={{
            width: "1000px",
            textAlign: "center",
            gap: "15px",
          }}
        >
          <img
            style={{
              margin: "auto",
            }}
            src="https://cdn.iconscout.com/icon/premium/png-64-thumb/studio-light-5910783-4961535.png
        "
            alt=""
          />
          <h4>Your daily inspiration for everything fashion</h4>
          <div className="studioimgdiv">
            <img
              className="studioimg"
              src="
            https://media.fashionnetwork.com/m/a1d6/f994/b45b/8a1a/f98f/14ec/f0d1/0351/c62f/e384/e384.jpeg
        
            "
              alt=""
            />
            <img
              className="studioimg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThE-ewNw5KT-GukxZ2-pdkfg_sj4BtO1LbdQ&usqp=CAU
            "
              alt=""
            />

            <img
              className="studioimg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSakBCon9ePU1_5rPTXC7CBipdAmfzV3WVeNw&usqp=CAU
            "
              alt=""
            />

            <img
              className="studioimg"
              src="
           https://www.mansworldindia.com/wp-content/uploads/2020/02/Virat-Anushka-Myntra.jpg
            "
              alt=""
            />
          </div>
          <button
            style={{
              padding: "15px",
              marginTop: "10px",

              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            EXPLORE STUDIO >>{" "}
          </button>
        </div>
      )}
      {/* -----------------------------------FOR PROFILE----------- */}
      {profile && (
        <div
          onMouseOver={handleMouseoverProfile}
          onMouseOut={handleMouseOutProfile}
          className="profilediv"
        >
          <h3>To access account and manage orders</h3>
          <Link to="/login">
            <Button className="profilebutton">LOGIN / SIGNUP</Button>
          </Link>
          <p>Orders</p>
          <p>Wishlist</p>
          <p>Gift Cards</p>
          <p>Contact US</p>
          <p>Myntra Insider</p>

          <br />
          <br />
          <p>Myntra Credit</p>
          <p>Coupons</p>
          <p>Saved Cards</p>
          <p>Saved VPA</p>
          <p>Saved Address</p>
        </div>
      )}
    </>
  );
}

export default Navbar;
