'use client'
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
  HStack,
  SimpleGrid,
  Box,
  GridItem,
  Button,
  VStack,
  Input,
} from "@chakra-ui/react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

import { AxiosGet } from '@/app/components/Axios';
import React, { useEffect, useState } from 'react'
// import page from '../../Blog/page';
import Blognav from "@/app/Blognav";
import { MdSearch } from "react-icons/md";
import Footer from "@/app/Footer";
import Blognew from "@/app/components/blognews";


export default function page({params}:{params:any}) {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsLoading] = useState(true);
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
      
      <SimpleGrid
        pb={["45px", "70px"]}
        pt={["20px","20px","20px",]}
        // templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        justifyContent={"center"}
        // gap={{ lg: "70px", md: "14px", base: "14px" }}
        alignItems={"center"}
        // px={{ base: "30px", lg: "50px", md: "30px" }}
        w={"full"}
      >
        <Fade direction="left" triggerOnce={true}>
          <Blognew
            params={params}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
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
