import {
  Box,
  Button,
  Image,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import Qrcodeone from "./Qrcodeone";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Slidetwo() {
  const Ref=useRef<HTMLDivElement | null>(null);
  const inView=useInView(Ref,{once:true})
  const mainControls= useAnimation()
  useEffect(()=>{
    if(inView){
      mainControls.start('visible')
    }

  },[inView,mainControls])
  return (
    <Box ref={Ref}>
    <motion.div
    variants={{
      hidden:{opacity:0,y:75},
      visible:{opacity:1,y:0}
    }}
    initial='hidden'
    animate={mainControls}
    transition={{duration:0.5,delay:0.5}}>
    <div id="slide2">
      <Box display={{ base: "none", md: "block", lg: "block" }}>
      <VStack
        display={"flex"}
        pt={"80px"}
        px={"124px"}
        w={"full"}
        h={"full"}
        justifyContent={"center"}
        spacing={"20px"} // Ensure vertical spacing between elements
      >
        <Box mb={"20px"}>
          <Button
            _hover={{ bg: "" }}
            _focus={{ bg: "" }}
            _active={{ bg: "" }}
            fontWeight={"400"}
            fontSize={["7px", "10px"]}
            rounded={"20px"}
            bg={"transparent"}
            border={"1px"}
            borderColor={"#0CBF94"}
            color={"#0CBF94"}
            size={{ md: "sm" }}
          >
            <Image
              boxSize={"16px"}
              objectFit="cover"
              src="/image/bitcoinGreen.png"
              alt="Bebo"
              mr={"10px"}
            />
            What makes us unique in the industry
          </Button>
        </Box>
        <Box mb={"20px"}>
          <Text
            fontWeight={"700"}
            fontSize={{ md: "30px", lg: "35px" }}
            color={"grey"}
          >
            <span
              style={{
                justifyContent: "center",
                width: "full",
                display: "flex",
              }}
            >
              Check out what&nbsp;{" "}
              <span
                style={{
                  color: "#021D17",
                }}
              >
                makes us
              </span>{" "}
            </span>
            <span
              style={{
                justifyContent: "center",
                width: "full",
                display: "flex",
              }}
            >
              {" "}
              <span
                style={{
                  color: "#021D17",
                }}
              >
                standout&nbsp;{" "}
              </span>{" "}
              with more coming!{" "}
            </span>
          </Text>
        </Box>
        <Box pb={{ md: "180px", lg: "250px" }}>
          <Qrcodeone />
        </Box>
      </VStack>
    </Box>
    </div>
    </motion.div>
    </Box>
  );
}
