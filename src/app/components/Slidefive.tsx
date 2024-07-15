'use client'

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function Slidefive({slidefive}:{slidefive:any}) {

  const Ref=useRef<HTMLDivElement | null>(null);
  const inView=useInView(Ref,{once:true})
  const mainControls= useAnimation()
  useEffect(()=>{
    if(inView){
      mainControls.start('visible')
    }

  },[inView,mainControls])
    const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Form data:", formData);
    };
  return (
    <Box ref={Ref}>
    <motion.div
    variants={{
      hidden:{opacity:0,y:75},
      visible:{opacity:1,y:0}
    }}
    initial='hidden'
    animate={mainControls}
    transition={{duration:0.5,delay:0.25}}>
    <Box height="full" w={"full"} cursor={"pointer"} ref={slidefive}>
      <Box
        overflow={"hidden"}
        h="full"
        w={"full"}
        display="flex"
        justifyContent="center"
        alignContent={"center"}
        alignItems="center"
        backgroundImage="/Image/bgtwo.svg" // Setting the background image
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        pt={["30px", "50px"]}
        pb={["35px", "50px"]}
        // flexDirection={'row'}
      >
        <VStack w={"full"}>
          <Box mb={"25px"}>
            <Text
              fontWeight={"600"}
              fontSize={["35px","45px"]}
              bgGradient="linear(to-r, #E7F9F4, green.200, green.700)"
              bgClip="text"
            >
              Be the first to know <br></br>{" "}
              <span
                style={{
                  justifyContent: "center",
                  width: "full",
                  display: "flex",
                }}
              >
                when we launch
              </span>
            </Text>
          </Box>
          
          <SimpleGrid columns={[1, 2]} gap={"24px"} w={"55%"}>
            <GridItem colSpan={1}>
              <FormControl>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  bg={"#06795D1A"}
                  rounded={"20px"}
                  boxShadow="0px -4px 6px rgba(128, 128, 128, 0.2),0px 4px 6px rgba(128, 128, 128, 0.1)"
                  border={"none"}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1} w={"full"}>
              <FormControl>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  bg={"#06795D1A"}
                  rounded={"20px"}
                  boxShadow="0px -4px 6px rgba(128, 128, 128, 0.2),0px 4px 6px rgba(128, 128, 128, 0.1)"
                  border={"none"}
                />
              </FormControl>
            </GridItem>
            <GridItem
              colSpan={[1, 2]}
              w={"full"}
              display={"flex"}
              justifyContent={"center"}
            >
              <Button
                onClick={handleSubmit}
                w={["full", "55%"]}
                size={["lg", "lg"]}
                bg={"#E7F9F4"}
                rounded={"20px"}
                boxShadow="0px -4px 6px rgba(128, 128, 128, 0.2),0px 4px 6px rgba(128, 128, 128, 0.1)"
                border={"none"}
              >
                Join waitlist
              </Button>
            </GridItem>
          </SimpleGrid>
       
        </VStack>
      </Box>
    </Box>
    </motion.div>
    </Box>
  );
}
