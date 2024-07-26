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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { AxiosPost } from "./Axios";

export default function Slidefive({slidefive}:{slidefive:any}) {
  const url = "users/subscribe";
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const Ref=useRef<HTMLDivElement | null>(null);
  const inView=useInView(Ref,{once:true})
  const mainControls= useAnimation()
  useEffect(()=>{
    if(inView){
      mainControls.start('visible')
    }

  },[inView,mainControls])
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [emailError, setEmailError] = useState("");
  const toast = useToast()

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
      // setEmailError("")
     {(toast({
        title: 'Email',
        description:'Please enter a valid email address.',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'bottom-right',
      }))};
      return false
    }


    setLoading(true);
    try {
      const res = await AxiosPost(url, formData);
      setLoading(false);
      if (res) {
        toast({
          title: "success",
          description: 'thanks for subscribing with us',
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

  

  return (
    <Box ref={Ref}>
    <motion.div
    variants={{
      hidden:{opacity:0,y:75},
      visible:{opacity:1,y:0}
    }}
    initial='hidden'
    animate={mainControls}
    transition={{duration:0.7,delay:0.4}}>
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
          <Box mb={["25px"]}>
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
                  color={'white'}
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
                  color={'white'}
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
                onClick={()=>{handleSubmit(formData)}}
                isLoading={loading}
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
