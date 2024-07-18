import {
  Box,
  GridItem,
  HStack,
  SimpleGrid,
  Image,
  Text,
  Button,
  FormControl,
  Input,
  VStack,
  Divider,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { AxiosPost } from "./components/Axios";

export default function Footer({ slideotwo }: { slideotwo: any }) {
  const [formData, setFormData] = useState({ email: "" });
  const [emailError, setEmailError] = useState("");
  const toast = useToast()
  const url = "users/subscribe";
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear email error when the user starts typing
    if (name === "email") {
      setEmailError("");
    }
  };

  const validateEmail = (email:any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


 
  const handleSubmit = async (formData:any) => {
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
     {emailError && (toast({
        title: 'Email',
        description:emailError,
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'bottom-right',
      }))};
      return;
    }


    setLoading(true);
    try {
      const res = await AxiosPost(url, formData);
      setLoading(false);
      if (res) {
        toast({
          title: "success",
          description: 'thanks for suscribing with us',
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "bottom-right",
        });
       
      }
    } catch (err: any) {
      setLoading(false);
      let message = "Check your Network and try again.";
      if (err.response && err.response.data && err.response.data.message) {
        message = err.response.data.message;
      }
      setErrorMessage(message = err.response.data.message ? 'you are already on the list' : message);
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "bottom-right",
      });
    }
  };


  // const handleSubmit = () => {
    // console.log("Form data:", formData);
  // };
  return (
    <>
    <Box display={['none','block']}> 
      <Box 
      w={"full"}
      display={"flex"}
      justifyContent={"center"}
      alignContent={"center"}
      pt={["50px", "100px"]}
    >
      <SimpleGrid
        columns={2}
        w={"full"}
        px={{ lg: "140px", md: "20px", base: "10px" }}
      >
        <GridItem colSpan={[2,1]}>
          <HStack gap={"1px"} mb={["12px", "50px"]}>
            <Image
              height="12px"
              width="10px"
              objectFit="cover"
              src="/image/logoblack.svg"
              alt="Bebo"
            />
            <Box height="13px" width="32px">
              <Image src="/image/beboblack.svg" alt="Bebo" />
            </Box>
          </HStack>
          <Box mb={{base:"10px", lg:"58px", md: "30px"}}>
            <Text fontWeight={"600"} fontSize={{base:"18px", lg:"20px", md: "16px"}}>
              Join our waitlist to be among our first users
            </Text>
          </Box>
          <SimpleGrid
            columns={{ base: 1, lg: 2, md: 1 }}
            w={"full"}
            gap={"20px"}
          >
            <GridItem colSpan={1} w={{base:"100%", lg:"full", md: "80%"}}>
              <FormControl>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  //   bg={"#06795D1A"}
                  rounded={"20px"}
                  boxShadow="0px -4px 6px rgba(128, 128, 128, 0.2),0px 4px 6px rgba(128, 128, 128, 0.1)"
                  border={"none"}
                  size={["sm", "md"]}
                />
              </FormControl>
            </GridItem>
            <GridItem
              colSpan={[2, 1]}
              w={"full"}
              display={"flex"}
              justifyContent={['center',"start"]}
            >
              <Button
                onClick={handleSubmit}
                isLoading={loading}
                w={["70%", "50%"]}
                size={["sm", "md"]}
                bg={"#0CBF94"}
                rounded={"20px"}
                boxShadow="0px -4px 6px rgba(128, 128, 128, 0.2),0px 4px 6px rgba(128, 128, 128, 0.1)"
                border={"none"}
              >
                Join waitlist
              </Button>
            </GridItem>
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={[2,1]} w={"full"} mb={"50px"} mt={['30px',""]}>
          <VStack w={"full"}>
            <HStack gap="26px" w={"full"}>
              <Box>
                <Link href={"https://wa.me/message/DMLINAXCGNQYP1"}>
                  <Text
                    fontWeight={"600"}
                    fontSize={["12px", "14px"]}
                    color={"black"}
                  >
                    Sell crypto
                  </Text>
                </Link>
              </Box>
              <Box>
                <Link href={"https://wa.me/message/DMLINAXCGNQYP1"}>
                  <Text
                    fontWeight={"600"}
                    fontSize={["12px", "14px"]}
                    color={"black"}
                  >
                    Buy crypto
                  </Text>
                </Link>
              </Box>
              <Box
                cursor={"pointer"}
                onClick={() => {
                  slideotwo.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <Text
                  fontWeight={"600"}
                  fontSize={["12px", "14px"]}
                  color={"black"}
                >
                  FAQS
                </Text>
              </Box>
            </HStack>
            <Box w={"full"}>
              <Text fontSize={["12px", "14px"]} fontWeight={"300"}>
                At BEBO, we empower you to seamlessly convert your
                cryptocurrencies into Naira,providing a secure and efficient
                gateway to navigate the dynamic world of digital assets. Our
                user-friendly platform ensures a hassle-free experience, making
                crypto-to-Naira conversions and transactions swift and reliable.
                Crypto to Naira Exchange: Convert your favorite cryptocurrencies
                such as Bitcoin, Ethereum, Litecoin, and more into Nigerian
                Naira quickly and securely. With our competitive exchange rates
                and transparent fees, you can trust BEBO to handle your
                conversions efficiently.
              </Text>
            </Box>
          </VStack>
        </GridItem>
        <GridItem colSpan={2} mb={{base:"10px", lg:"40px", md: "20px"}} w={"full"}>
          <Divider orientation="horizontal" size={"lg"} />
        </GridItem>
        <GridItem colSpan={2} mb={"50px"} w={"full"}>
          <SimpleGrid columns={2}>
            <GridItem colSpan={1}>
              <HStack>
                <Box>
                  <AiOutlineCopyrightCircle />
                </Box>
                <Box>
                  <Text>2024 Bebo.</Text>
                </Box>
              </HStack>
            </GridItem>
            <GridItem
              colSpan={1}
              w={"full"}
              justifyContent={"end"}
              display={['none','block']}
            >
              <HStack  w={"full"}
              justifyContent={"end"} >
                <Link href="https://www.instagram.com/tradewithbebo?igsh=eTRkcXl3d3R4bmRo">
                <Box border={"1px"} p={"10px"} color={"grey"} rounded={"50%"}>
                  <FiInstagram />
                </Box>
                </Link>
                <Box border={"1px"} p={"10px"} color={"grey"} rounded={"50%"}>
                  <RiTwitterXFill />
                </Box>
                <Box border={"1px"} p={"10px"} color={"grey"} rounded={"50%"}>
                  <LuFacebook />
                </Box>
              </HStack>
              </GridItem>
              <GridItem
              colSpan={1}
              w={"full"}
              justifyContent={"end"}
              display={['block','none']}
            >
              <HStack  w={"full"}
              justifyContent={"end"}>
                <Link href={"https://www.instagram.com/tradewithbebo?igsh=eTRkcXl3d3R4bmRo"}>
                <Box border={"1px"} p={"5px"} color={"grey"} rounded={"50%"}>
                  <FiInstagram size={'15px'}/>
                </Box></Link>
                <Box border={"1px"} p={"5px"} color={"grey"} rounded={"50%"}>
                  <RiTwitterXFill size={'15px'} />
                </Box>
                <Box border={"1px"} p={"5px"} color={"grey"} rounded={"50%"}>
                  <LuFacebook size={'15px'} />
                </Box>
              </HStack>
             
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    </Box>
    </Box><Box display={['block','none']}> 
      <Box 
      w={"full"}
      display={"flex"}
      justifyContent={"center"}
      alignContent={"center"}
      pt={["20px", "100px"]}
    >
      <SimpleGrid
        columns={2}
        w={"full"}
        px={{ lg: "140px", md: "20px", base: "20px" }}
      >
         {/* <GridItem colSpan={[2,1]} w={"full"} mb={['30px',"50px"]} >
          <VStack w={"full"}>
          <HStack gap={"1px"} mb={["10px", "50px"]} w={"full"}>
            <Image
              height="15px"
              width="13px"
              objectFit="cover"
              src="/image/logoblack.svg"
              alt="Bebo"
            />
            <Box height="13px" width="39px">
              <Image src="/image/beboblack.svg" alt="Bebo" />
            </Box>
          </HStack>
            <HStack gap="26px" w={"full"}>
              <Box>
                <Link href={"https://wa.me/message/DMLINAXCGNQYP1"}>
                  <Text
                    fontWeight={"600"}
                    fontSize={["14px", "14px"]}
                    color={"black"}
                  >
                    Sell crypto
                  </Text>
                </Link>
              </Box>
              <Box>
                <Link href={"https://wa.me/message/DMLINAXCGNQYP1"}>
                  <Text
                    fontWeight={"600"}
                    fontSize={["14px", "14px"]}
                    color={"black"}
                  >
                    Buy crypto
                  </Text>
                </Link>
              </Box>
              <Box
                cursor={"pointer"}
                onClick={() => {
                  slideotwo.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <Text
                  fontWeight={"600"}
                  fontSize={["14px", "14px"]}
                  color={"black"}
                >
                  FAQS
                </Text>
              </Box>
            </HStack> */}
            {/* <Box w={"full"}>
              <Text fontSize={["16px", "14px"]} fontWeight={"300"}>
                At BEBO, we empower you to seamlessly convert your
                cryptocurrencies into Naira,providing a secure and efficient
                gateway to navigate the dynamic world of digital assets.
              </Text>
            </Box> */}
          {/* </VStack>
        </GridItem>
        <GridItem colSpan={[2,1]}> */}
{/*          
          <Box mb={{base:"10px", lg:"58px", md: "30px"}}>
            <Text fontWeight={"600"} fontSize={{base:"18px", lg:"20px", md: "16px"}}>
              Join our waitlist to be among our first users
            </Text>
          </Box> */}
          {/* <SimpleGrid
            columns={{ base: 1, lg: 2, md: 1 }}
            w={"full"}
            gap={"20px"}
          >
            <GridItem colSpan={1} w={{base:"100%", lg:"full", md: "80%"}}>
              <FormControl>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  //   bg={"#06795D1A"}
                  rounded={"20px"}
                  boxShadow="0px -4px 6px rgba(128, 128, 128, 0.2),0px 4px 6px rgba(128, 128, 128, 0.1)"
                  border={"none"}
                  size={["sm", "md"]}
                />
              </FormControl>
            </GridItem>
            <GridItem
              colSpan={[2, 1]}
              w={"full"}
              display={"flex"}
              justifyContent={['start',"start"]}
              mb={'20px'}
            >
              <Button
                onClick={handleSubmit}
                w={["95%", "50%"]}
                size={["sm", "md"]}
                bg={"#0CBF94"}
                rounded={"20px"}
                boxShadow="0px -4px 6px rgba(128, 128, 128, 0.2),0px 4px 6px rgba(128, 128, 128, 0.1)"
                border={"none"}
              >
                Join waitlist
              </Button>
            </GridItem>
          </SimpleGrid> */}
        {/* </GridItem> */}
       
        {/* <GridItem colSpan={2} mb={{base:"10px", lg:"40px", md: "20px"}} w={"full"}>
          {/* <Divider orientation="horizontal" size={"lg"} /> */}
        {/* </GridItem> */} 
        <GridItem colSpan={2} mb={"50px"} w={"full"}>
          <SimpleGrid columns={2}>
            <GridItem colSpan={1}>
              <HStack>
                <Box>
                  <AiOutlineCopyrightCircle size={'10px'} />
                </Box>
                <Box>
                  <Text fontSize={'14px'}>2024 Bebo</Text>
                </Box>
              </HStack>
            </GridItem>
            <GridItem
              colSpan={1}
              w={"full"}
              justifyContent={"end"}
              display={['none','block']}
            >
              <HStack  w={"full"}
              justifyContent={"end"} >
                <Link href="https://www.instagram.com/tradewithbebo?igsh=eTRkcXl3d3R4bmRo">
                <Box border={"1px"} p={"10px"} color={"grey"} rounded={"50%"}>
                  <FiInstagram />
                </Box>
                </Link>
                <Box border={"1px"} p={"10px"} color={"grey"} rounded={"50%"}>
                  <RiTwitterXFill />
                </Box>
                <Box border={"1px"} p={"10px"} color={"grey"} rounded={"50%"}>
                  <LuFacebook />
                </Box>
              </HStack>
              </GridItem>
              <GridItem
              colSpan={1}
              w={"full"}
              justifyContent={"end"}
              display={['block','none']}
            >
              <HStack  w={"full"}
              justifyContent={"end"}>
                 <Link href={"https://www.instagram.com/tradewithbebo?igsh=eTRkcXl3d3R4bmRo"}>
                <Box border={"1px"} p={"5px"} color={"grey"} rounded={"50%"}>
                  <FiInstagram size={'15px'}/>
                </Box></Link>
                <Box border={"1px"} p={"5px"} color={"grey"} rounded={"50%"}>
                  <RiTwitterXFill size={'15px'} />
                </Box>
                <Box border={"1px"} p={"5px"} color={"grey"} rounded={"50%"}>
                  <LuFacebook size={'15px'} />
                </Box>
              </HStack>
             
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    </Box>
    </Box>
    </>
  );
}
