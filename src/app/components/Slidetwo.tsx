import {
  Box,
  Button,
  Image,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  Link,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import Qrcodeone from "./Qrcodeone";
import { motion, useAnimation, useInView } from "framer-motion";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

export default function Slidetwo() {
  const Ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(Ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView, mainControls]);
  return (
    <Box ref={Ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.4}}
      >
        <div id="slide2">
          <Box display={{ base: "block", md: "block", lg: "block" }}>
            <VStack
              display={"flex"}
              pb={['20px',"60px"]}
              pt={['60px',"80px"]}
              // px={"124px"}
              w={"full"}
              h={"full"}
              justifyContent={"center"}
              spacing={"20px"} // Ensure vertical spacing between elements
            >
              <Fade direction="left" triggerOnce={true}>
                 <Box>
                <Text fontWeight={"700"} fontSize={['18',"25px"]} color={"#021D17"}>
                  Over <span style={{ color: "#0CBF94" }}>NGN250 Million </span>
                  Traded Last Quarter
                </Text>
              </Box></Fade>
              <Fade direction="down" duration={200} triggerOnce={true}>
              <Box mb={""}>
                <Text fontWeight={"600"} fontSize={["11px"]} color={"#021D17"}>
                  More Than 1,500 Happy Customers Trust Us
                </Text>
              </Box>
              </Fade>
              <Fade direction="right" triggerOnce={true}>
              <Box>
                <Link
                  variant="unstyled"
                  href={"https://wa.me/message/DMLINAXCGNQYP1"}
                >
                  <AttentionSeeker
                    effect="heartBeat"
                    duration={2000}
                    className="animate__animated animate__heartBeat animate__infinite "
                  >
                    <Button
                      fontWeight={["700"]}
                      fontSize={["5px", "16px"]}
                      color={"#FFFFFFE5"}
                      bg={"#4C5C58"}
                      rounded={"50px"}
                      size={["sm", "lg"]}
                      _hover={{
                        color: "#021D17",
                        transform: "scale(1.1)",
                      }}
                      transition="transform 0.5s ease-in-out, background-color 0.7s ease"
                    >
                      <Image
                        boxSize={["14px", "22px"]}
                        objectFit="cover"
                        src="/image/whatsapp.png"
                        alt="Bebo"
                        mr={"10px"}
                      />
                     Join Our Trusted Community Today
                    </Button>
                  </AttentionSeeker>
                </Link>
              </Box>
              </Fade>
            </VStack>
          </Box>
        </div>
      </motion.div>
    </Box>
  );
}
