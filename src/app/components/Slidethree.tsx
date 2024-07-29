import {
  Box,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import CarD from "./Card";
import { motion, useAnimation, useInView } from "framer-motion";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

export default function Slidethree() {
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
        <Box pt={{ base: "55px", md: "20px", lg: "20px" }}>
          <VStack
            display={"flex"}
            // pt={"80px"}
            // px={"124px"}
            gap={"16px"}
            w={"full"}
            // h={"full"}
            justifyContent={"center"}
          >
            <Box>
              <Text
                fontWeight={"700"}
                fontSize={["30px", "35px"]}
                color={"#051F25"}
              >
                Get paid in few Clicks
              </Text>
            </Box>
            <Box>
              <Text
                fontWeight={"600"}
                fontSize={["10px", "15px"]}
                color={"#051F25"}
              >
                Start your journey to freedom!
              </Text>
            </Box>
            <Box pb={{ md: "80px", lg: "80px", base: "60px" }}>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                gap={{ base: "10px", md: "10px", lg: "40px" }}
              >
                <Fade direction="left" triggerOnce={true}>
                  {" "}
                  <GridItem colSpan={1}>
                    <CarD
                      image={"/image/exchange.svg"}
                      Textthree={"Dogecoin, Binance Coin(BNB), TRC."}
                      Texttwo={"   network, Bitcoin(BTC), Ethereum(ETH),"}
                      Textone={" Bebo currently buy and sell USDT on all "}
                      Title={"Select the crypto to exchange to fiat"}
                    ></CarD>
                  </GridItem>
                </Fade>
                <Fade direction="up" delay={200} triggerOnce={true}>
                  <GridItem colSpan={1}>
                    <CarD
                      image={"/image/Bank.svg"}
                      Textthree={"payment every time you make a transaction."}
                      Texttwo={"You can add more than one account."}
                      Textone={" Add your local bank account to receive "}
                      Title={"Add/select your back account"}
                    />
                  </GridItem>
                </Fade>
               
                  <GridItem colSpan={{ base: 1, md: 2, lg: 1 }} w={"full"}>
                  <Fade direction="right" triggerOnce={true}>
                    <CarD
                      image={"/image/balance.svg"}
                      Textthree={" instantly."}
                      Texttwo={"address and wait for your payment within"}
                      Textone={"Make the crypto asset to the generated wallet"}
                      Title={"Wait for your payment"}
                    /> </Fade>
                  </GridItem>
               

                <GridItem
                  colSpan={{ base: 1, md: 2, lg: 3 }}
                  justifyContent={"center"}
                  display={"flex"}
                  mt={"30px"}
                >
                  <Box
                    mb={{ base: "20px", md: "40px", lg: "" }}
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                    transition="transform 0.5s ease-in-out, background-color 0.7s ease"
                  >
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
                        fontWeight={"700"}
                        fontSize={"16px"}
                        color={"#FFFFFFE5"}
                        bg={"#4C5C58"}
                        rounded={"50px"}
                        size={"lg"}
                        _hover={{ color: "#021D17" }}
                      >
                        <Image
                          boxSize={"22px"}
                          objectFit="cover"
                          src="/image/whatsapp.png"
                          alt="Bebo"
                          mr={"10px"}
                        />
                        Trade on WhatsApp
                      </Button>
                      </AttentionSeeker>
                    </Link>
                  </Box>
                </GridItem>
              </SimpleGrid>
              <Box
                overflow={"hidden"}
                boxSize={{ base: "110px", md: "130px", lg: "170px" }}
                position={"absolute"}
                marginLeft={{ base: "-40px", md: "-60px", lg: "-15px" }}
                marginTop={{ base: "-115px", md: "-165px", lg: "-250px" }}
                zIndex={"-1"}
              >
                <Image
                  // boxSize={"16px"}
                  objectFit="cover"
                  src="/image/spirogreen.svg"
                  alt="Bebo"
                  // mr={"10px"}
                />
              </Box>
              <Box
                overflow={"hidden"}
                boxSize={{ base: "100px", md: "130px", lg: "90px" }}
                // overflow={"hidden"}
                marginLeft={{ base: "210px", md: "480px", lg: "895px" }}
                marginTop={{ base: "-650", md: "-470px", lg: "-380px" }}
                zIndex={"-1"}
                position={"absolute"}
              >
                <Image
                  // boxSize={"16px"}
                  objectFit="cover"
                  src="/image/spiroyellow.svg"
                  alt="Bebo"
                  // mr={"10px"}
                  overflow={"hidden"}
                />
              </Box>
            </Box>
          </VStack>
        </Box>
      </motion.div>
    </Box>
  );
}
