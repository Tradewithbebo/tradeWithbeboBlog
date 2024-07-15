import {
  CardBody,
  Card,
  Text,
  SimpleGrid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import React from "react";

export default function CarD({
  image,
  Textthree,
  Texttwo,
  Textone,
  Title,
}: {
  image: any;
  Textthree: any;
  Texttwo: any;
  Textone: any;
  Title: any;
}) {
  return (
    <Card
    size={{base:'sm',md:'sm',lg:'md'}}
      w={"100%"}
      border={"1px"}
      borderColor="gray.200"
      borderRadius="xl"
      bg={"#064737"}
      _hover={{
        transform: "scale(1.1)",
      }}
      transition="transform 0.5s ease-in-out, background-color 0.7s ease"
    >
      <CardBody w={"full"} display={"flex"} justifyContent={"center"}>
        <SimpleGrid w={"full"}>
          <GridItem
            w={"full"}
            display={"flex"}
            justifyContent={"center"}
            mb={"20px"}
          >
            <Image
              boxSize={"25px"}
              objectFit="cover"
              src={image}
              alt="Bebo"
              mr={"10px"}
            />
          </GridItem>
          <GridItem
            w={"full"}
            display={"flex"}
            justifyContent={"center"}
            mb={"10px"}
            color={"#FFFFFFE5"}
          >
            <Text fontSize={"15px"} fontWeight={"700"}>
              {Title}
            </Text>
          </GridItem>
          <GridItem w={"full"} display={"flex"} justifyContent={"center"}>
            <Text fontSize={"12px"} fontWeight={"500"} color={"#FFFFFFE5"}>
              {Textone}
            </Text>
          </GridItem>
          <GridItem w={"full"} display={"flex"} justifyContent={"center"}>
            <Text fontSize={"12px"} fontWeight={"500"} color={"#FFFFFFE5"}>
              {Texttwo}
            </Text>
          </GridItem>
          <GridItem w={"full"} display={"flex"} justifyContent={"center"}>
            <Text fontSize={"12px"} fontWeight={"500"} color={"#FFFFFFE5"}>
              {Textthree}
            </Text>
          </GridItem>
        </SimpleGrid>
      </CardBody>
    </Card>
  );
}
