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
  Link,
  Input,
  border,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
// import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { MdSearch } from "react-icons/md";
import Blogcard from "../components/Blogcard";
import { blog, subblog } from "../components/blogcontent";
import Footer from "../Footer";
// import page from './page';

export default function page() {

  return (

    <VStack height="full" w={"full"} cursor={"pointer"} bg={'white'}>
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
        px={{base:"30px", lg:"50px",md:'30px'}}
        // pl={'800px'}
      >
        <VStack w={"full"} display={"flex"} justifyContent={"center"}>
          <Box>
          <Fade direction="up" triggerOnce={true}>
            <Button
              color={"white"}
              bg={"#047857"}
              fontWeight={"600"}
              fontSize={"16px"}
              _hover={""}
              rounded={"20px"}
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
          <Box mb={"20px"}>
          <Fade direction="left" triggerOnce={true}>
            <Text
              fontWeight={"600"}
              fontSize={["14px", "18px"]}
              color={"#051F25"}
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
                 focusBorderColor='transparent'
              />
            </Box>
          </HStack>
          </Fade>
          <SimpleGrid pb={['','']}
          pt={'50px'}
      templateColumns={['repeat(1, 1fr)','repeat(3, 1fr)']}
      justifyContent={"center"}
      gap={{ lg: "20px", md: "14px", base: "14px" }}
       alignItems={"center"}
    >
       
      {subblog.map((blog, index) => (
        <GridItem colSpan={1} key={index}>
            <Fade direction={index===0?"left":index===1?'up':'right'} triggerOnce={true}>
          <Blogcard
            src={blog.image}
            content={blog.content}
            title={blog.title}
          /></Fade>
        </GridItem>
      ))}
    </SimpleGrid>
        </VStack>
       
      </Box>
      <SimpleGrid pb={['45px','70px']}
        //   pt={'50px'}
      templateColumns={['repeat(1, 1fr)','repeat(3, 1fr)']}
      justifyContent={"center"}
     
      gap={{ lg: "20px", md: "14px", base: "14px" }}
       alignItems={"center"}
       px={{base:"30px", lg:"50px",md:'15px'}}
       w={'full'}
    >
       
      {blog.map((blog, index) => (
        <GridItem colSpan={1} key={index}   w={'full'} >
            <Fade direction={index%2===0?"up":index%3===0?'right':'left'} triggerOnce={true}>
          <Blogcard
            src={blog.image}
            content={blog.content}
            title={blog.title}
          /></Fade>
        </GridItem>
      ))}
    </SimpleGrid>
    <Footer slideotwo={''}/>
    </VStack>
  );
}
