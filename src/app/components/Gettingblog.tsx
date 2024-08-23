"use client";
import {
  Box,
  Button,
  VStack,
  Image,
  Text,
  HStack,
  SimpleGrid,
  GridItem,
  //   Link,
  Input,
  border,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
// import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { MdSearch } from "react-icons/md";
import Blogcard from "../components/Blogcard";
import { blog, subblog } from "../components/blogcontent";
import Footer from "../Footer";
import Blognav from "../Blognav";
import { FaArrowDown } from "react-icons/fa6";
import { AxiosGet } from "../components/Axios";
import Link from "next/link";
import Blogcardrebuild, { Blogcardrebuild2 } from "./blogcardrebuild";

export default function Getblog() {

  const url = "blog";
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <VStack height="full" w={"full"} cursor={"pointer"} bg={"white"}>
      <Box
        w={"full"}
        position="sticky"
        top={"0px"}
        left="0"
        width="100%"
        zIndex="1000"
      >
        <Blognav />
      </Box>
      <Box
        // bg={'#6ee7b7'}
        overflow={"hidden"}
        h={["full"]}
        w={"full"}
        display="flex"
        justifyContent="center"
        alignContent={"center"}
        alignItems="center"
        backgroundImage="/Image/bgblog.svg" // Setting the background image
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        pt={["35px", "60px"]}
        // boxSize={'100%'}
        px={{ base: "30px", lg: "50px", md: "30px" }}
        // pl={'800px'}
      >
        <VStack w={"full"} display={"flex"} justifyContent={"center"}>
          <Box>
            <Fade direction="up" triggerOnce={true}>
              <Button
                // color={"white"}
                bg={"#047857"}
                fontWeight={"500"}
                fontSize={"18px"}
                color={"#FFFFFFE5"}
                _hover={""}
                rounded={"20px"}
                size={["md", "md"]}
              >
                Our blog
              </Button>
            </Fade>
          </Box>
          <Box mb={"10px"}>
            <Fade direction="right" triggerOnce={true}>
              {" "}
              <Text
                fontWeight={"700"}
                fontSize={["25px", "45px"]}
                color={"#051F25"}
              >
                <span
                  style={{
                    justifyContent: "center",
                    width: "full",
                    display: "flex",
                  }}
                >
                  {" "}
                  Resources and insights
                </span>
              </Text>
            </Fade>
          </Box>
          <Box mb={"20px"} display={{ base: "none", lg: "flex", md: "flex" }}>
            <Fade direction="left" triggerOnce={true}>
              <Text
                fontWeight={"600"}
                fontSize={["14px", "18px"]}
                color={"#051F25"}
                textAlign={"center"}
              >
                Read about what Bebo is doing, and about trends
                <span
                  style={{
                    justifyContent: "center",
                    width: "full",
                    display: "flex",
                  }}
                >
                  {" "}
                  in the crypto space generally.
                </span>
              </Text>
            </Fade>
          </Box>
          <Box mb={"20px"} display={{ base: "flex", lg: "none", md: "none" }}>
            <Fade direction="left" triggerOnce={true}>
              <Text
                fontWeight={"600"}
                fontSize={["14px", "18px"]}
                color={"#051F25"}
                textAlign={"center"}
              >
                Read about what Bebo is doing,
                <span
                  style={{
                    justifyContent: "center",
                    width: "full",
                    display: "flex",
                  }}
                >
                  {" "}
                  and about trends space generally.
                </span>
              </Text>
            </Fade>
          </Box>
          {/* search bar */}
          <Fade direction="up" triggerOnce={true}>
            <HStack
              bg={"white"}
              borderRadius={"10px"}
              border={""}
              px={"10px"}
              // borderColor={"#9ca3af"}
            >
              <Box>
                <MdSearch size={"20px"} color="grey" />
              </Box>
              <Box flex={1}>
                <Input
                  border={"none"}
                  size={"sm"}
                  placeholder="Search"
                  focusBorderColor="transparent"
                />
              </Box>
            </HStack>
          </Fade>
          <Box w={["100%", "100%"]} pb={"10px"} pt={"60px"}>
          <Fade direction="left" triggerOnce={true}>
            <Blogcardrebuild isLoading={isLoading} setIsLoading={setIsLoading} />
            </Fade>
          </Box>
          
        </VStack>
      </Box>
      <SimpleGrid
        pb={["45px", "70px"]}
        pt={"50px"}
        // templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        justifyContent={"center"}
        gap={{ lg: "70px", md: "14px", base: "14px" }}
        alignItems={"center"}
        px={{ base: "30px", lg: "50px", md: "30px" }}
        w={"full"}
      >
         <Fade direction="left" triggerOnce={true}>
        <Blogcardrebuild2 />
        </Fade>
      </SimpleGrid>

      <Box
        w="full"
        display={{
          base: isLoading ? "none" : "flex",
          md: "flex",
          lg: "flex",
        }}
      >
        <Footer slideotwo="" />
      </Box>
    </VStack>
  );
}
