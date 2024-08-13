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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { AxiosGet } from "./Axios";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { FaArrowDown } from "react-icons/fa6";
export default function Blogcardrebuild() {
  interface BlogItem {
    slug: string;
    sourceUrl: any;
    title: any;
    content: any;
    // add other properties as needed, e.g., image, content, etc.
  }

  const url = "blog";

  const [Blogdata, setBlogdata] = useState<BlogItem[]>([]);

  const [errorMessage, setErrorMessage] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const getBlogPost = async () => {
    setIsLoading(true);
    try {
      const res = await AxiosGet(url);
      setIsLoading(false); // Set loading state to false after the request is complete

      if (res && res.data && res.data.items) {
        const items = res.data.items;

        // items.forEach((item: any) => {
        //   console.log('k',item.author);
        // });

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
    return <Box><HStack gap={['15px','40px']} display={'flex'} justifyContent={'center'}>
      <Fade key={key} cascade damping={0.1}>
      <Text fontSize={['20px','60px']} fontWeight={'700'} color={'#0AA07C'}>B</Text>
      <Text fontSize={['20px','60px']} fontWeight={'700'} color={'#0AA07C'}>E</Text>
      <Text fontSize={['20px','60px']}fontWeight={'700'} color={'#0AA07C'}>B</Text>
      <Text fontSize={['20px','60px']} fontWeight={'700'} color={'#0AA07C'}>O</Text>
      <Text fontSize={['20px','60px']} fontWeight={'700'} color={'#0AA07C'}>.</Text>
      <Text fontSize={['20px','60px']} fontWeight={'700'} color={'#0AA07C'}>.</Text>
      <Text fontSize={['20px','60px']} fontWeight={'700'} color={'#0AA07C'}>.</Text>
      <Text fontSize={['20px','60px']} fontWeight={'700'} color={'#0AA07C'}>.</Text>
      <Text fontSize={['20px','60px']} fontWeight={'700'} color={'#0AA07C'}>.</Text>
      </Fade>
      </HStack></Box>;
  }

  return (
    
    <SimpleGrid
      columns={{ base: 1, md: 3, lg: 3 }}
      spacing={6}
      width="100%"
      justifyContent="center"
      display="grid"
    >
      {Blogdata.slice(0, 3).map((blog, index) => (
        <Card key={index}>
          <CardBody>
            <Image src={""} alt="BEBO" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size={["sm", "md"]}>
                <SimpleGrid columns={5} w="full">
                  <GridItem colSpan={4} w="full">
                  <div
                // style={{ flex: 1 }}
                dangerouslySetInnerHTML={{
                  __html:
                  
                       blog.title
                }}
              />
                  </GridItem>
                  <GridItem colSpan={1} justifyContent="end" display="flex">
                    <MdArrowOutward />
                  </GridItem>
                </SimpleGrid>
              </Heading>
              <div
                style={{ flex: 1 }}
                dangerouslySetInnerHTML={{
                  __html:
                  
                       blog.content
                }}
              />
            </Stack>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
}
export function Blogcardrebuild2() {
  const ITEMS_PER_PAGE = 3;
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE + 3); // Start at 4th index
  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + ITEMS_PER_PAGE);
  };
  interface BlogItem {
    slug: string;
    sourceUrl: any;
    title: any;
    content: any;
    // add other properties as needed, e.g., image, content, etc.
  }

  const url = "blog";

  const [Blogdata, setBlogdata] = useState<BlogItem[]>([]);

  const [errorMessage, setErrorMessage] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const getBlogPost = async () => {
    setIsLoading(true);
    try {
      const res = await AxiosGet(url);
      setIsLoading(false); // Set loading state to false after the request is complete

      if (res && res.data && res.data.items) {
        const items = res.data.items;

        // items.forEach((item: any) => {
        //   console.log('k',item.author);
        // });

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

  useEffect(() => {
    getBlogPost();
  }, []);
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 3, lg: 3 }}
        spacing={6}
        width="100%"
        justifyContent="center"
        display="grid"
      >
        {Blogdata.slice(3, visibleItems).map((blog, index) => (
          //     <Fade key={index}
          //     direction={
          //       index % 2 === 0 ? "up" : index % 3 === 0 ? "right" : "left"
          //     }
          //     triggerOnce={true}
          //   >
          <Card key={index}>
            <CardBody>
              <Image src={""} alt="BEBO" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size={["sm", "md"]}>
                  <SimpleGrid columns={5} w="full">
                    <GridItem colSpan={4} w="full">
                      <Text>{blog.title}</Text>
                    </GridItem>
                    <GridItem colSpan={1} justifyContent="end" display="flex">
                      <MdArrowOutward />
                    </GridItem>
                  </SimpleGrid>
                </Heading>
                <Text flex={1}>
                  content=
                  {blog.content.length > 200
                    ? blog.content.slice(0, 200) + "..."
                    : blog.content}
                </Text>
              </Stack>
            </CardBody>
          </Card>
          //   </Fade>
        ))}
      </SimpleGrid>
      <Box>
        {visibleItems < Blogdata.length && (
          <Fade direction="up" triggerOnce={true}>
            <Box display={"flex"} w={"ull"} justifyContent={"center"}>
              <Button
                bg={"#0CBF94"}
                color={"#186B53"}
                onClick={handleLoadMore}
                rounded={"20px"}
              >
                {" "}
                <AttentionSeeker
                  effect="shakeY"
                  duration={4000}
                  className="animate__animated animate__shakeY animate__infinite "
                >
                  <Box>
                    <FaArrowDown />
                  </Box>
                </AttentionSeeker>{" "}
                &nbsp; Load more{" "}
              </Button>
            </Box>
          </Fade>
        )}
      </Box>
    </>
  );
}
