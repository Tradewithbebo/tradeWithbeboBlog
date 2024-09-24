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
  Link,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { AxiosGet } from "./Axios";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { FaArrowDown } from "react-icons/fa6";
// import Link from "next/link";

export default function Blogcardrebuild({ isLoading, setIsLoading }: { isLoading: any, setIsLoading: any }) {
  interface BlogItem {
    slug: string;
    sourceUrl: any;
    title: any;
    content: any;
    featuredImage: any;
    _id: any;
    updatedAt: any;
  }

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short', // Abbreviates the month
      year: 'numeric',
    });
    return formatter.format(date);
  };
  

  const url = "blog";
  const [Blogdata, setBlogdata] = useState<BlogItem[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [key, setKey] = useState(0);
  const reanimationTime = 2000;

  const getBlogPost = async () => {
    try {
      const res = await AxiosGet(url);
      setIsLoading(false);

      if (res && res.data && res.data.items) {
        setBlogdata(res.data.items);
        setErrorMessage("");
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
        <HStack gap={["15px", "40px"]} display={"flex"} justifyContent={"center"}>
          <Fade key={key} cascade damping={0.1}>
            {["B", "E", "B", "O", ".", ".", ".", ".", "."].map((letter, idx) => (
              <Text key={idx} fontSize={["20px", "60px"]} fontWeight={"700"} color={"#0AA07C"}>
                {letter}
              </Text>
            ))}
          </Fade>
        </HStack>
      </Box>
    );
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} spacing={6} width="100%" justifyContent="center" display="grid">
      {Blogdata.slice(0, 3).map((blog, index) => (
        <Card key={index}>
          <Link href={`/Blognew/${blog.slug}`} _hover={{ textDecoration: "none" }}>
            <CardBody>
              <Image
                src={blog.featuredImage}
                alt="BEBO"
                borderRadius="lg"
                h={{ base: "300px", xl: "60px" }}
                width={{ base: "100%", xl: "60%" }}
              />
              <Stack mt="6" spacing="3">
                <Heading size={["sm", "md"]}>
                  <SimpleGrid columns={5} w="full">
                    <GridItem colSpan={4} w="full">
                      <HStack>
                        <Box
                          mb={'5px'}
                          p={"5px"}
                          fontSize={"15px"}
                          fontWeight={"400"}
                          bg="gray.50"
                          borderRadius="md"
                          borderWidth={1}
                          borderColor="gray.200"
                        >
                          Last Updated
                        </Box>
                        <Box
                          pb={"10px"}
                          fontSize={"15px"}
                          fontWeight={"400"}
                          // bg="gray.50"
                          dangerouslySetInnerHTML={{ __html: formatDate(blog.updatedAt) }}
                        />
                      </HStack>
                    </GridItem>
                    <GridItem colSpan={4} w="full">
                      <Link
                        _hover={{
                          color: "slateblue",
                          textDecoration: "underline",
                          textDecorationColor: "#7c3aed",
                          textDecorationThickness: "2px",
                        }}
                      >
                        <div dangerouslySetInnerHTML={{ __html: blog.title }} />
                      </Link>
                    </GridItem>
                    <GridItem colSpan={1} justifyContent="end" display="flex">
                      <MdArrowOutward />
                    </GridItem>
                  </SimpleGrid>
                </Heading>
              </Stack>
            </CardBody>
          </Link>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export function Blogcardrebuild2() {
  const ITEMS_PER_PAGE = 3;
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE + 3);
  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + ITEMS_PER_PAGE);
  };
  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short', // Abbreviates the month
      year: 'numeric',
    });
    return formatter.format(date);
  };
  
  interface BlogItem {
    slug: string;
    sourceUrl: any;
    title: any;
    content: any;
    featuredImage: any;
    _id: any;
    updatedAt: any;
  }

  const url = "blog";
  const [Blogdata, setBlogdata] = useState<BlogItem[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getBlogPost = async () => {
    setIsLoading(true);
    try {
      const res = await AxiosGet(url);
      setIsLoading(false);

      if (res && res.data && res.data.items) {
        setBlogdata(res.data.items);
        setErrorMessage("");
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

  useEffect(() => {
    getBlogPost();
  }, []);

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} spacing={6} width="100%" justifyContent="center" display="grid">
        {Blogdata.slice(3, visibleItems).map((blog, index) => (
          <Card key={index}>
            <Link href={`/Blognew/${blog.slug}`} _hover={{ textDecoration: "none" }}>
              <CardBody>
                <Image
                  src={blog.featuredImage}
                  alt="BEBO"
                  borderRadius="lg"
                  h={{ base: "300px", xl: "60px" }}
                  width={{ base: "100%", xl: "60%" }}
                />
                <Stack mt="6" spacing="3">
                  <Heading size={["sm", "md"]}>
                    <SimpleGrid columns={5} w="full">
                      <GridItem colSpan={4} w="full">
                        <HStack>
                          <Box
                            mb={'5px'}
                            p={"5px"}
                            fontSize={"15px"}
                            fontWeight={"400"}
                            bg="gray.50"
                            borderRadius="md"
                            borderWidth={1}
                            borderColor="gray.200"
                          >
                            Last Updated
                          </Box>
                          <Box
                            pb={"10px"}
                            fontSize={"15px"}
                            fontWeight={"400"}
                            // bg="gray.50"
                            dangerouslySetInnerHTML={{ __html: formatDate(blog.updatedAt) }}
                          />
                        </HStack>
                      </GridItem>
                      <GridItem colSpan={4} w="full">
                        <Link
                          _hover={{
                            color: "slateblue",
                            textDecoration: "underline",
                            textDecorationColor: "#7c3aed",
                            textDecorationThickness: "2px",
                          }}
                        >
                          <div dangerouslySetInnerHTML={{ __html: blog.title }} />
                        </Link>
                      </GridItem>
                      <GridItem colSpan={1} justifyContent="end" display="flex">
                        <MdArrowOutward />
                      </GridItem>
                    </SimpleGrid>
                  </Heading>
                </Stack>
              </CardBody>
            </Link>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}
