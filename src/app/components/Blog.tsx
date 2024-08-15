import { Box, Button, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Blogcard, { Blogcard2 } from "./Blogcard";
import { subblog } from "./blogcontent";
import { Fade } from "react-awesome-reveal";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { AxiosGet } from "./Axios";
import Blogcardrebuild from "./blogcardrebuild";
export default function Blog() {
  const Ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(Ref, { once: true });
  const mainControls = useAnimation();
  
 
  
 
  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView, mainControls]);
  return (
    <>
      <Box ref={Ref}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <GridItem
            display={"flex"}
            w={"full"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Fade direction="right" triggerOnce={true}>
              <Box mb={["40px"]}>
                <Text
                  fontWeight={"700"}
                  fontSize={["30px", "35px"]}
                  color={"#021D17"}
                >
                  Read our blog
                </Text>
              </Box>
            </Fade>
          </GridItem>
          <SimpleGrid
            pb={["45px", "70px"]}
            columns={{ base: 1, lg: 3, md: 3 }}
            px={{ md: 4, base: 8, lg: 20 }}
            display={"flex"}
            justifyContent={"center"}
            gap={{ lg: "20px", md: "14px", base: "14px" }}
            flexDirection={{ base: "column", lg: "row", md: "row" }}
            alignItems={"center"}
          >
           
              <GridItem colSpan={1} >
                <Blogcardrebuild/>
              </GridItem>
         
          </SimpleGrid>
          <GridItem
            pb={["45px", "70px"]}
            colSpan={{ base: 1, lg: 3, md: 3 }}
            justifyContent={"center"}
            w={"full"}
            display={"flex"}
          >
            <Fade direction="up" triggerOnce={true}>
              <Link href={"/Blog"}>
                <Button bg={"#0CBF94"} color={"#021D17"} rounded={"20px"} size={'md'} px={'70px'}>
                  See Blogs
                </Button>
              </Link>
            </Fade>
          </GridItem>
        </motion.div>
      </Box>
    </>
  );
}
// function AxiosGet(url: any) {
//   throw new Error("Function not implemented.");
// }

