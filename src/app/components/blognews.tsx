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
  
  export default function Blognew({isLoading,setIsLoading,params}:{isLoading:any,setIsLoading:any,params:any}) {
    const {id}=params
    interface BlogItem {
      slug: string;
      sourceUrl: any;
      title: any;
      content: any;
      featuredImage: any;
    }
  
    const url = "blog";
  
    const [Blogdata, setBlogdata] = useState<BlogItem>();
  
    const [errorMessage, setErrorMessage] = useState("");
    // setIsLoading(true);
  
    // const [isLoading, setIsLoading] = useState(true);
    const getBlogPost = async () => {
      setIsLoading(true);
      try {
        const res = await AxiosGet(url);
        setIsLoading(false); // Set loading state to false after the request is complete
        // const btcData = res.data.find((crypto: any) => crypto.name === "Bitcoin");
        if (res && res.data && res.data.items) {
          const items = res.data.items;
          const blogData = res.data.items.find((blog: any) => blog._id === id);
    
  
          setBlogdata(blogData);
          console.log("Blog Items:", blogData);
  
          setErrorMessage(""); // Clear error message on success
          return true;
        }
      } catch (err: any) {
        setIsLoading(false);
        let message = "Check your Network and try again.";
        if (err.response && err.response.data && err.response.data.message) {
          message = err.response.data.message;
        }
        setErrorMessage(message);
      }
    };
    // function RepeatingFadeText() {
    const [key, setKey] = useState(0);
    const reanimationTime = 2000;
  
    useEffect(() => {
      const interval = setInterval(() => {
        setKey((prevKey) => prevKey + 1);
      }, reanimationTime);
  
      return () => clearInterval(interval);
    }, [reanimationTime]);
    useEffect(() => {
      getBlogPost();
    }, []);
    if (isLoading) {
      return (
        <Box>
          <HStack
            gap={["15px", "40px"]}
            display={"flex"}
            justifyContent={"center"}
          >
            <Fade key={key} cascade damping={0.1}>
              <Text
                fontSize={["20px", "60px"]}
                fontWeight={"700"}
                color={"#0AA07C"}
              >
                B
              </Text>
              <Text
                fontSize={["20px", "60px"]}
                fontWeight={"700"}
                color={"#0AA07C"}
              >
                E
              </Text>
              <Text
                fontSize={["20px", "60px"]}
                fontWeight={"700"}
                color={"#0AA07C"}
              >
                B
              </Text>
              <Text
                fontSize={["20px", "60px"]}
                fontWeight={"700"}
                color={"#0AA07C"}
              >
                O
              </Text>
              <Text
                fontSize={["20px", "60px"]}
                fontWeight={"700"}
                color={"#0AA07C"}
              >
                .
              </Text>
              <Text
                fontSize={["20px", "60px"]}
                fontWeight={"700"}
                color={"#0AA07C"}
              >
                .
              </Text>
              <Text
                fontSize={["20px", "60px"]}
                fontWeight={"700"}
                color={"#0AA07C"}
              >
                .
              </Text>
              <Text
                fontSize={["20px", "60px"]}
                fontWeight={"700"}
                color={"#0AA07C"}
              >
                .
              </Text>
              <Text
                fontSize={["20px", "60px"]}
                fontWeight={"700"}
                color={"#0AA07C"}
              >
                .
              </Text>
            </Fade>
          </HStack>
        </Box>
      );
    }
  
    return (
      <>
   <SimpleGrid
        pb={["45px", "70px"]}
        // pt={"50px"}
        // templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        justifyContent={"center"}
        gap={{ lg: "70px", md: "14px", base: "14px" }}
        alignItems={"center"}
        px={{ base: "30px", lg: "50px", md: "30px" }}
        w={"full"}
      > <div
                          // style={{ flex: 1 }}
                          dangerouslySetInnerHTML={{
                            __html: Blogdata?.content
                          }}
                        /> </SimpleGrid>
     </>
    )
  }