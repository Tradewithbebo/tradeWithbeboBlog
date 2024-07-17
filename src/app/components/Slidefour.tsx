// import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Button, VStack, Image, Text, Link, styled } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Accordions from "./Accordion";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Slidefour({ slidetwo }: { slidetwo: any }) {
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
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Box
          ref={slidetwo}
          w={"full"}
          pb={{ base: "55px", md: "150px", lg: "200px" }}
        >
          <VStack w={"full"} justifyContent={"center"} display={"flex"}>
            <Box
              mb={["20px", "33px"]}
              w={"full"}
              justifyContent={"center"}
              display={"flex"}
            >
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
                size={{ md: "sm", base: "md" }}
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
              <Text
                fontWeight={"600"}
                fontSize={{ md: "30px", lg: "30px" }}
                mb={["20px", "35px"]}
              >
                Here are answers to list of questions{" "}
                <span
                  style={{
                    width: "full",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  our customers have asked us
                </span>
              </Text>
            </Box>
            <Box width={["70%", "70%"]}>
              <Accordions
                title={"What does bebo really do ?"}
                content={
                  "Bebo is a new platform that allows you to easily and securely buy and sell cryptocurrency. "
                }
              />
            </Box>
            <Box width={["70%", "70%"]}>
              <Accordions
                title={
                  "What kind of cryptocurrency can I buy and sell on Bebo?"
                }
                content={" BTC, USDT, ETH, SOL "}
              />
            </Box>
            <Box width={["70%", "70%"]}>
              <Accordions
                title={"How do I sign up for Bebo ?"}
                content={
                  "You can join our waitlist by entering your email address on our landing page."
                }
              />
            </Box>
            <Box width={["70%", "70%"]}>
              <Accordions
                title={"When will Bebo be available ?"}
                content={
                  "We are currently in development and will be launching soon. Join our waitlist to be notified when we go live! "
                }
              />
            </Box>
            <Box width={["70%", "70%"]}>
              <Accordions
                title={"How do I buy cryptocurrency on Bebo ? "}
                content={
                 <Link _hover={{color:''}}>Until our app is ready you can send your buy request to us via WhatsApp (Insert the link)<span style={{color:"blue",marginLeft:'10px'}}>Click to Trade</span></Link>
                }
              />
            </Box>
            <Box width={["70%", "70%"]}>
              <Accordions
                title={"What payment methods do you accept ?"}
                content={"We accept payments in your local currency."}
              />
            </Box>
          </VStack>
        </Box>
      </motion.div>
    </Box>
  );
}
