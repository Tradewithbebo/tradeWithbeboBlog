import { Box, Button, VStack, Image, Text, HStack, SimpleGrid, GridItem, Link } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
// import Link from "next/link";
import React, { useEffect, useRef } from "react";

export default function Slideone({slideone,slidefive}:{slideone:any,slidefive:any}) {
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
  <div id="section1" ref={slideone}>
      <Box height="full" w={"full"} cursor={"pointer"} >
      <Box
        overflow={"hidden"}
        h="full"
        w={"full"}
        display="flex"
        justifyContent="center"
        alignContent={"center"}
        alignItems="center"
        backgroundImage="/Image/Herobody.svg" // Setting the background image
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        pt={['20px',"60px"]}
        pb={["30px","120px"]}
      >
        <VStack w={"full"} display={"flex"} justifyContent={"center"}>
          <Box mb={"10px"}>
            <Button
              _hover={{ bg: "" }}
              _focus={{ bg: "" }}
              _active={{ bg: "" }}
              fontWeight={"600"}
              fontSize={["7px", "14px"]}
              color={"#FFFFFFE5"}
              bg={"#06795D1A"}
              rounded={"20px"}
              boxShadow="0px -4px 6px rgba(128, 128, 128, 0.2),0px 4px 6px rgba(128, 128, 128, 0.1)"
            >
              <Image
                boxSize={"16px"}
                objectFit="cover"
                src="/image/bitcoin.png"
                alt="Bebo"
                mr={"10px"}
              />
              The sure platform for all your crypto transactions
            </Button>
          </Box>
          <Box mb={"10px"}>
            <Text
              fontWeight={"700"}
              fontSize={["35px", "55px"]}
              color={"#FFFFFFE5"}
            >
              Your platform for
              <br />
              everything about<br></br>
              <span
                style={{
                  justifyContent: "center",
                  width: "full",
                  display: "flex",
                }}
              >
                {" "}
                crypto and fiat{" "}
              </span>
            </Text>
          </Box>
          <Box mb={"20px"}>
            <Text
              fontWeight={"600"}
              fontSize={["9px", "16px"]}
              color={"#FFFFFFE5"}
            >
              Instantly spend your crypto to cash and vice versa super fast and
              super
              <span
                style={{
                  justifyContent: "center",
                  width: "full",
                  display: "flex",
                }}
              >
                {" "}
                easy with fast support when needed
              </span>
            </Text>
          </Box>
          <SimpleGrid
          columns={[1,2]} rowGap={['24px','']}>
            <GridItem colSpan={[1]}  width={'full'} justifyContent={['center','start']} display={'flex'}>
            <Link variant='unstyled'href={"https://wa.me/message/DMLINAXCGNQYP1"}>
              <Button
                fontWeight={"700"}
                fontSize={["12px", "16px"]}
                color={"#FFFFFFE5"}
                bg={"#4C5C58"}
                rounded={"50px"}
                size={["lg", "lg"]}
              
                _hover={{
                  color:'#021D17',
                  transform: "scale(1.1)",
                }}
                transition="transform 0.5s ease-in-out, background-color 0.7s ease"
              >
                <Image
                  boxSize={["14px","22px"]}
                  objectFit="cover"
                  src="/image/whatsapp.png"
                  alt="Bebo"
                  mr={"10px"}
                  
                />
                Trade on WhatsApp
              </Button>
              </Link>
            </GridItem>
            <GridItem colSpan={[1]} width={'full'} justifyContent={['center','end']} display={'flex'}>
              <Button
                fontWeight={"700"}
                fontSize={["12px", "16px"]}
                color={"##051F25"}
                bg={"#0CBF94"}
                rounded={"50px"}
                size={["lg", "lg"]}
                _hover={{
                  transform: "scale(1.1)",
                  
                }}
                onClick={() => {
                  slidefive.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Join waitlist
              </Button>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Box>
    </Box>
  </div>
      </motion.div>
    </Box>
  );
}
