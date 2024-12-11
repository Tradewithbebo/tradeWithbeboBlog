"use client";

import { Box, HStack, Text, Image, Button } from "@chakra-ui/react";
import Link from "next/link";
import React, { useRef } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AttentionSeeker } from "react-awesome-reveal";
import "animate.css/animate.min.css";
export default function Navbaar({
  slideone,
  slideotwo,
  slidefive,
}: {
  slideone: any;
  slideotwo: any;
  slidefive: any;
}) {
  // Function to restart the animation by updating the key

  return (
    <>
      <Box
        w={"full"}
        bg={"#033125"}
        cursor={"pointer"}
        display={{ base: "none", md: "none", lg: "block" }}
      >
        <Box py={"15px"} px={"80px"} w={"full"}>
          <HStack w={"full"} display={"flex"} justifyContent={"space-between"}>
           <HStack gap={"32px"}><Link href={"/"} > 
              <HStack gap={"5px"}>
                <Image
                  height="15px"
                  width="12px"
                  objectFit="cover"
                  src="/image/logo.png"
                  alt="Bebo"
                />
                <Box height="13px" width="39px">
                  <Image src="/image/Bebo.png" alt="Bebo" />
                </Box>
              
              </HStack> 
              </Link>
              <Box>
                <Link href={"https://wa.me/message/DMLINAXCGNQYP1"}>
                  <Text
                    fontWeight={"600"}
                    fontSize={"16px"}
                    color={"#FFFFFFE5"}
                  >
                    Sell crypto
                  </Text>
                </Link>
              </Box>
              <Box>
                <Link href={"https://wa.me/message/DMLINAXCGNQYP1"}>
                  <Text
                    fontWeight={"600"}
                    fontSize={"16px"}
                    color={"#FFFFFFE5"}
                  >
                    Buy crypto
                  </Text>
                </Link>
              </Box>
              <Box
                onClick={() => {
                  slideotwo.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <Text fontWeight={"600"} fontSize={"16px"} color={"#FFFFFFE5"}>
                  FAQS
                </Text>
              </Box>
              <Box>
                <Link href={"/Blog"}>
                  <Text
                    fontWeight={"600"}
                    fontSize={"16px"}
                    color={"#FFFFFFE5"}
                  >
                    Blogs
                  </Text>
                </Link>
              </Box>
            </HStack>
            <HStack gap={"40px"}>
              <Box>
                <Link href={"https://wa.me/message/DMLINAXCGNQYP1"}>
                  <AttentionSeeker
                    effect="heartBeat"
                    duration={2000}
                    className="animate__animated animate__heartBeat animate__infinite "
                  >
                    <Button
                      fontWeight={"700"}
                      fontSize={"16px"}
                      color={"#FFFFFFE5"}
                      bg={"#4C5C58"}
                      rounded={"50px"}
                      size={"lg"}
                      // _hover={{ color: "#021D17" }}
                      _hover={{
                        color: "#021D17",
                        transform: "scale(1.1)",
                      }}
                    >
                      <Image
                        boxSize={"22px"}
                        objectFit="cover"
                        src="/image/whatsapp.png"
                        alt="Bebo"
                        mr={"10px"}
                      />
                      Trade on WhatsApp
                    </Button>
                  </AttentionSeeker>
                </Link>
              </Box>
              <Box
                onClick={() => {
                  slidefive.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <Button
                  fontWeight={"700"}
                  fontSize={"16px"}
                  color={"##051F25"}
                  bg={"#E7F9F4"}
                  rounded={"50px"}
                  size={"lg"}
                  _hover={{
                    // color:'#021D17',
                    transform: "scale(1.1)",
                  }}
                >
                  Join waitlist
                </Button>
              </Box>
            </HStack>
          </HStack>
        </Box>
      </Box>
      <Box display={{ base: "block", md: "block", lg: "none" }} w={"100%"} >
        <Box
        px={['15px','5px']}
          display={"flex"}
          py={{ base: "15px", md: "15px" }}
          // px={{base: "20px", md:"60px"}}
          w={"full"}
          bg={"#033125"}
          justifyContent={"center"}
          mb={"-2px"}
        >
          <HStack w={"full"} justifyContent={"center"} display={"flex"}>
            <HStack gap={"32px"}>
            <HStack gap={"5px"}>
                <Image
                  height="15px"
                  width="12px"
                  objectFit="cover"
                  src="/image/logo.png"
                  alt="Bebo"
                />
                <Box height="13px" width="39px">
                  <Image src="/image/Bebo.png" alt="Bebo" />
                </Box>
              </HStack>
              <Box ml={"4px"}>
                <Link href={"https://wa.me/message/DMLINAXCGNQYP1"}>
                  <Text
                    fontWeight={"600"}
                    fontSize={"14px"}
                    color={"#FFFFFFE5"}
                  >
                    Buy & Sell crypto
                  </Text>
                </Link>
              </Box>
              {/* <Box>
                <Link href={"https://wa.me/message/DMLINAXCGNQYP1"}>
                  <Text
                    fontWeight={"600"}
                    fontSize={"14px"}
                    color={"#FFFFFFE5"}
                  >
                    Buy crypto
                  </Text>
                </Link>
              </Box> */}
              <Box
                onClick={() => {
                  slideotwo.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <Text fontWeight={"600"} fontSize={"14px"} color={"#FFFFFFE5"}>
                  FAQS
                </Text>
              </Box>
              <Box>
                <Link href={"/Blog"}>
                  <Text
                    fontWeight={"600"}
                    fontSize={"14px"}
                    color={"#FFFFFFE5"}
                  >
                    Blogs
                  </Text>
                </Link>
              </Box>
              <Box display={{ base: "none", md: "block", lg: "none" }}>
                <Link href={"https://wa.me/message/DMLINAXCGNQYP1"}>
                  <AttentionSeeker
                    effect="heartBeat"
                    duration={2000}
                    className="animate__animated animate__heartBeat animate__infinite "
                  >
                    <Button
                      fontWeight={"700"}
                      fontSize={"14px"}
                      color={"#FFFFFFE5"}
                      bg={"#4C5C58"}
                      rounded={"50px"}
                      size={"md"}
                      _hover={{ color: "#021D17" }}
                    >
                      <Image
                        boxSize={"14px"}
                        objectFit="cover"
                        src="/image/whatsapp.png"
                        alt="Bebo"
                        mr={"10px"}
                      />
                      Trade on WhatsApp
                    </Button>
                  </AttentionSeeker>
                </Link>
              </Box>

              <Box
                onClick={() => {
                  slidefive.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                display={{ base: "none", md: "block", lg: "none" }}
              >
                <Button
                  fontWeight={"700"}
                  fontSize={"10px"}
                  color={"##051F25"}
                  bg={"#E7F9F4"}
                  rounded={"50px"}
                  size={"md"}
                >
                  Join waitlist
                </Button>
              </Box>
            </HStack>
          </HStack>
        </Box>
      </Box>
    </>
  );
}
