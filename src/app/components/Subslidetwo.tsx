import {
  Box,
  Button,
  Image,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  Link,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import Qrcodeone from "./Qrcodeone";
import { motion, useAnimation, useInView } from "framer-motion";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import Whybebocard, { Whybebocard2 } from "./Whybebocard";

export default function Subslidetwo() {
  const Ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(Ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView, mainControls]);
  const dataone = [
    {
      icon: (
        <Image
          objectFit="cover"
          src="/image/icoonecard.svg"
          alt="Bebo"
          boxSize={"38px"}
        />
      ),
      title: "Lightning-Fast Transactions",
    },
    {
      icon: (
        <Image
          objectFit="cover"
          src="/image/icontwocard.svg"
          alt="Bebo"
          boxSize={"38px"}
        />
      ),
      title: "Trade Directly on WhatsApp",
    },
    {
      icon: (
        <Image
          objectFit="cover"
          src="/image/iconthreecard.svg"
          alt="Bebo"
          boxSize={"38px"}
        />
      ),
      title: "Lowest Fees in the Market",
    },

    {
      icon: (
        <Image
          objectFit="cover"
          src="/image/iconfourcard.svg"
          alt="Bebo"
          boxSize={"38px"}
        />
      ),
      title: "Multi-Currency Support",
    },
    {
      icon: (
        <Image
          objectFit="cover"
          src="/image/iconfivecard.svg"
          alt="Bebo"
          boxSize={"38px"}
        />
      ),
      title: "Expert Support Team    ",
    },
  ];
  return (
    <Box ref={Ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div id="slide2">
          <Box display={{ base: "block", md: "block", lg: "block" }}>
            <VStack
              display={"flex"}
              pb={["5px", "80px"]}
              pt={"30px"}
              // px={"124px"}
              alignItems={"center"}
              w={"full"}
              h={"full"}
              justifyContent={"center"}
              spacing={"20px"} // Ensure vertical spacing between elements
            >
              <Fade direction="right" triggerOnce={true}>
                <Box mb={["-40px", "20px"]}>
                  <Text
                    fontWeight={"700"}
                    fontSize={["30px", "35px"]}
                    color={"#021D17"}
                  >
                    Why Choose Bebo?
                  </Text>
                </Box>
              </Fade>
              <Box
                gap={6}
                display={"flex"}
                justifyContent={"center"}
                w={"100%"}
              >
                <Box
                  w={"65%"}
                  display={{ base: "none", md: "block", lg: "block" }}
                >
                   <Fade direction="right" triggerOnce={true}>
                  <Whybebocard />{" "}
              </Fade>

                </Box>
              </Box>
              <Box
                gap={6}
                display={"flex"}
                justifyContent={"center"}
                w={["100%"]}
              >
                <Box
                  w={["45%"]}
                  display={{ base: "none", md: "block", lg: "block" }}
                >
                   <Fade direction="left" triggerOnce={true}>
                  <Whybebocard2 />
                  </Fade>
                </Box>
              </Box>

             <Box w={'100%'}  display={{ base: "block", md: "none", lg: "none" }}>
             <VStack w={"full"} display={"flex"} justifyContent={"center"}>
                {dataone.map((item, index) => (
                  <HStack
                    w={"60%"}
                    display={"flex"}
                    justifyContent={"start"}
                    key={index}
                  >
                    <Fade
                      direction="left"
                      delay={index * 200}
                      duration={index * 200}
                    >
                      <Box>{item.icon}</Box>
                      <Box>
                        <Text>{item.title}</Text>
                      </Box>
                    </Fade>
                  </HStack>
                ))}
              </VStack>
             </Box>
            </VStack>
          </Box>
        </div>
      </motion.div>
    </Box>
  );
}
