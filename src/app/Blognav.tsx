import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Home from "./page";
import { FaHouse } from "react-icons/fa6";

export default function Blognav() {
  return (
    <Box w={"full"} bg={"#0CBF94"} py={["15px"]} px={['20px',"80px"]} mb={"-9px"}>
      <HStack justifyContent={['space-between']} w={'full'} display={'flex'}>
        <Box  >
          <Button
            color={"white"}
            bg={"#047857"}
            fontWeight={"600"}
            fontSize={"16px"}
            _hover={""}
            rounded={"20px"}
            size={['sm',"md"]}
          >
            {" "}
            <Link href={"/"}>
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
          </Button>
        </Box>
        <Box>
          <Box>
            <Button
              color={"white"}
              bg={"#047857"}
              fontWeight={"600"}
              fontSize={"16px"}
              _hover={""}
              rounded={"20px"}
              size={['sm',"md"]}
            >
              {" "}
              <Link href={"/"}>
                <HStack gap={"5px"}>
                  {" "}
                  <FaHouse color="white" size={"18px"} />
                  <Text
                    fontWeight={"500"}
                    fontSize={"18px"}
                    color={"#FFFFFFE5"}
                  >
                    Home
                  </Text>
                </HStack>
              </Link>
            </Button>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}
