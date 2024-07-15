import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  VStack,
  Image,
  Text
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Accordions from "./Accordion";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Slidefour({slidetwo}:{slidetwo:any}) {
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
    transition={{duration:0.5,delay:0.25}}>
    <Box ref={slidetwo}
     w={"full"} pb={{ base: "55px", md: "150px", lg: "200px" }}>
      <VStack w={"full"} justifyContent={"center"} display={"flex"}>
        <Box mb={['20px',"33px"]} w={"full"} justifyContent={"center"} display={"flex"}>
          <Button
            _hover={{ bg: "" }}
            _focus={{ bg: "" }}
            _active={{ bg: "" }}
            fontWeight={"600"}
            fontSize={["7px", "14px"]}
            rounded={"20px"}
            bg={"transparent"}
            border={"1px"}
            borderColor={"#0CBF94"}
            color={"#0CBF94"}
            size={{ md: "sm",base:'md' }}
          >
            <Image
              boxSize={"16px"}
              objectFit="cover"
              src="/image/bitcoinGreen.png"
              alt="Bebo"
              mr={"10px"}
            />
            FAQS
          </Button>
        </Box>
        <Box>
          <Text  fontWeight={"600"}
            fontSize={{ md: "30px", lg: "30px" }} mb={['20px','35px']}>
          Here are answers to list of questions <span  style={{width:'full',display:'flex', justifyContent:'center'}}>
            our customers have asked us
          </span></Text>
        </Box>
        <Box width={['70%','70%']}>
          <Accordions
            title={"What does bebo really do"}
            content={
              "Instantly spend your crypto to cash and vice versa super fast and super easy with fast support "
            }
          />
        </Box>
        <Box width={['70%','70%']}>
          <Accordions
            title={"What does bebo really do"}
            content={
              "Instantly spend your crypto to cash and vice versa super fast and super easy with fast support "
            }
          />
        </Box>
        <Box width={['70%','70%']}>
          <Accordions
            title={"What does bebo really do"}
            content={
              "Instantly spend your crypto to cash and vice versa super fast and super easy with fast support "
            }
          />
        </Box>
        <Box width={['70%','70%']}>
          <Accordions
            title={"What does bebo really do"}
            content={
              "Instantly spend your crypto to cash and vice versa super fast and super easy with fast support "
            }
          />
        </Box>
        <Box width={['70%','70%']}>
          <Accordions
            title={"What does bebo really do"}
            content={
              "Instantly spend your crypto to cash and vice versa super fast and super easy with fast support "
            }
          />
        </Box>
        
      </VStack>
    </Box>
    </motion.div>
    </Box>
  );
}
