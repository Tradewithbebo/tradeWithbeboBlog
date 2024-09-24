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
  import './blog.css'
  import { AxiosGet } from '@/app/components/Axios';
  import React, { useEffect, useState } from 'react'
  // import page from '../../Blog/page';
  import Blognav from "@/app/Blognav";
  import { MdSearch } from "react-icons/md";
  import Footer from "@/app/Footer";
  
  export default function Blognew({isLoading,setIsLoading,params}:{isLoading:any,setIsLoading:any,params:any}) {
    const {id}=params

    const formatDate = (dateString: any) => {
      const date = new Date(dateString);
      const formatter = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
    
      // Extract the date parts
      const parts = formatter.formatToParts(date);
      const day = parts.find(part => part.type === 'day')?.value;
      const month = parts.find(part => part.type === 'month')?.value;
      const year = parts.find(part => part.type === 'year')?.value;
    
      // Return formatted date with punctuation (e.g., "02 September, 2024")
      return `${day} ${month}, ${year}.`;
    };
    
    interface BlogItem {
      slug: string;
      sourceUrl: any;
      title: any;
      content: any;
      featuredImage: any;
      tags: string[];
      updatedAt: any
    }
  
    const url = `blog/${id}`;
  
    const [Blogdata, setBlogdata] = useState<BlogItem>();
  
    const [errorMessage, setErrorMessage] = useState("");
    // setIsLoading(true);
  
    // const [isLoading, setIsLoading] = useState(true);
    const getBlogPost = async () => {
      setIsLoading(true);
      try {
        const res = await AxiosGet(url);
        setIsLoading(false);
        if (res) {
          const items = res.data;
          console.log("Blog Items:", items);
          // const blogData = res.data.items.find((blog: any) => blog.slug === id);

          setBlogdata(items);
          console.log("Blog Items:", items);

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
  columns={{ base: 1, md: 2, lg: 3 }} // responsive column layout
  justifyContent="center"
  gap={{ base: "14px", md: "14px", lg: "20px" }} // consistent gap across screen sizes
  alignItems="center"
  px={{ base: "10px", md: "30px", lg: "50px" }} // responsive padding
  w="full"
>
  <GridItem w="full" display="flex" justifyContent="center">
    <Heading size={{ base: "sm", md: "md", lg: "lg" }} textAlign="center">
      <div
        dangerouslySetInnerHTML={{
          __html: Blogdata?.title,
        }}
      />
    </Heading>
  </GridItem>

  <GridItem w="full" display="flex" justifyContent="center">
    <Image
      src={Blogdata?.featuredImage}
      alt="BEBO"
      borderRadius="lg"
      width={{ base: "90%", md: "80%", lg: "60%" }} // responsive width
      maxH="auto"
      objectFit="cover"
    />
  </GridItem>

  <GridItem w="full">
    <HStack wrap="wrap" justifyContent="center">
      {Blogdata?.tags && Blogdata.tags.length > 0 ? (
        Blogdata.tags.map((tag, index) => (
          <Text
            key={index}
            p={2}
            bg="gray.100"
            borderRadius="md"
            mb={2}
            w="fit-content"
            textAlign="center"
            fontSize={{ base: "sm", md: "md", lg: "md" }} // responsive font size
          >
            {tag}
          </Text>
        ))
      ) : (
        <Text>No tags available</Text>
      )}
    </HStack>
  </GridItem>

  <GridItem w="full" px={{ base: "10px", md: "20px" }}>
    <div
      className="blog"
      dangerouslySetInnerHTML={{
        __html: Blogdata?.content,
      }}
    />
  </GridItem>

  <GridItem w="full" px={{ base: "10px", md: "20px" }} mt="20px">
    <HStack gap="1px">
      <Box mb="10px" fontSize="15px" fontWeight="400" color="grey">
        Last modified on
      </Box>
      <Box pb="10px" fontSize="15px" fontWeight="400" color="grey" dangerouslySetInnerHTML={{ __html: formatDate(Blogdata?.updatedAt) }} />
    </HStack>
  </GridItem>
</SimpleGrid>

      
      </>
    );
  }