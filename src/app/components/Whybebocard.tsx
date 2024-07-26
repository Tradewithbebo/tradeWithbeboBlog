import { Box, Card, CardBody, SimpleGrid, Text, Image } from "@chakra-ui/react";
import React from "react";

export default function Whybebocard() {
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
  ];
  const datatwo = [
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
    <>
      <SimpleGrid
      w={'full'}
        columns={{ base: 2, md: 2, lg: 3 }}
        spacing={6}
        width="100%"
        justifyContent={"center"}
        display={"flex"}
      >
        {dataone.map((item1, index) => (
          <Card
          w={'100%'}
          
            size={"lg"}
            bg={"rgb(204 251 241)"}
            key={index}
            rounded={"20px"}
            transition="transform 0.5s ease-in-out, background-color 0.7s ease"
          >
            <CardBody boxShadow={"none"}>
              <Box mb={"20px"}>{item1.icon}</Box>
              <Box>
                <Text fontSize="13px" fontWeight="600">
                  {item1.title}
                </Text>
              </Box>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}

export function Whybebocard2() {
  const datatwo = [
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
      title: "Expert Support Team",
    },
  ];
  return (
    <>
      <SimpleGrid
        columns={{ base: 2, md: 2, lg: 2 }}
        spacing={6}
        width="100%"
        justifyContent={"center"}
        display={"flex"}
      >
        {datatwo.map((item1, index) => (
          <Card
          w={'full'}
            size={"lg"}
            bg={"rgb(204 251 241)"}
            key={index}
            rounded={"20px"}
            transition="transform 0.5s ease-in-out, background-color 0.7s ease"
          >
            <CardBody boxShadow={"none"}>
              <Box mb={"20px"}>{item1.icon}</Box>
              <Box w={"full"}>
              <Text fontSize="13px" fontWeight="600">
                  {item1.title}
                  {/* &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                </Text>
              </Box>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

      
    </>
  );
}
