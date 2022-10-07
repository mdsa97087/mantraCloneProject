import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../All_Router/Navbar";

// const getData = (page = 1 ,categorySortBy = "Child" ) => {
// //       const { titleSortBy = "ASC", } = args;
//       return axios.get(
//             `http://localhost:3000/clothing?_filter=${categorySortBy}&_page=${page}&_limit=9 `
//       )
// };


const getData = (page = 1) => {
  return axios.get(`http://localhost:3000/clothing`);
};

function ChildApi() {
const [categorySortBy, setCategorySortBy] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  // const [total, setTotal] = useState(5);
  const [page, setPage] = useState(1);

  // const [error, setError] = useState(false);

  useEffect(() => {
      setLoading(true);
    getData(page)
      .then((res) => {
        setData(res.data);
      //   setCategorySortBy(res.data)
        // setTotal(res.total);
        
        // setError(false);
        console.log(res.data);
      //   console.log(res.data)
      })
      .catch(() => {
        // setError(true);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
      getData();
  }, [page]);

  return (
    <>
     
      {/* ---------------------------MAP------------------------------- */}

      <Container
        maxW={{ base: "full", md: "container.xl" }}
        p={{ base: 2, lg: 0 }}
      >
      <input 
      // name="child"
      // value="child"
      type="text"
      // checked={false}
      // onClick={(e,res) => e === true ? e.target.value : res.data }
      onChange={(e)=> 
      setCategorySortBy(e.target.value)}     
       placeholder="search"/>
        <Grid
          w="full"
          // h='400px'
          border="1px solid red"
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap={4}
        >
          {/* ---------------------------MAP------------------------------- */}

          {
loading ? (<h1>Loading .. .</h1> ):(


            data.filter((value) => {
                  if(categorySortBy===""){
                        return value
                  } else if (value.category.toLowerCase().includes(categorySortBy.toLowerCase())){
                        return value;
                  }
            })
            .map((product) => (
              <GridItem key={product.id}>
                <Box
                  bg="gray.50"
                  columns={{ sm: 2, md: 4 }}
                  spacing="8"
                  p={2}
                  rounded="lg"
                  color="gray.600"
                  boxShadow="lg"
                  w="250px"
                  h="250px"
                  border="1px solid red"
                >
                  <Grid templateRows="repeat(24,1fr)" h="200">
                    <GridItem rowSpan={16}>
                      <Flex align="center" justify="center">
                        <Image
                          boxSize="xl"
                          src={product.images}
                          alt="prod-img"
                          w="160px"
                          h="120px"
                        />
                      </Flex>
                    </GridItem>

                    <GridItem rowSpan={3}>
                      <Flex align="center" justify="center">
                        <Box>
                          <Text textAlign="center">
                            Category:- {product.category}{" "}
                          </Text>
                        </Box>
                      </Flex>
                    </GridItem>

                    <GridItem rowSpan={2}>
                      <Flex align="center" justify="center">
                        <Box>
                          <Text>INR: {product.strike_price} </Text>
                        </Box>
                      </Flex>
                    </GridItem>
                    <GridItem rowSpan={2}>
                      <Flex align="center" justify="center">
                        <Box>
                          <Text>Title:- {product.title} </Text>
                        </Box>
                      </Flex>
                    </GridItem>
                    <GridItem rowSpan={2}>
                      <Flex align="center" justify="center">
                        <Box>
                          <Text>Subtitle: {product.subtitle} </Text>
                        </Box>
                      </Flex>
                    </GridItem>
                  </Grid>
                </Box>
              </GridItem>
            )))}
        </Grid>
      </Container>
      <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </Button>
      <Button>{page}</Button>
      <Button onClick={() => setPage(page + 1)}>NEXT</Button>
      
    </>
  );
}

export default ChildApi;
