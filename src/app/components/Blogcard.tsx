import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
  HStack,
} from "@chakra-ui/react";
import { MdArrowOutward } from "react-icons/md";
import React from "react";

export default function Blogcard({
  src,
  content,
  title,
}: {
  src: any;
  content: any;
  title: any;
}) {
  return (
    <Card size={{base:'sm',md:'sm',lg:'md'}}>
      <CardBody>
        <Image src={src} alt="BEBO" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size={["sm", "md"]}>
            <HStack>
              <Text flex={1}>{title} </Text>
              <MdArrowOutward />
            </HStack>
          </Heading>
          <Text>{content}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export  function Blogcard2({
  src,
  content,
  title,
}: {
  src: any;
  content: any;
  title: any;
}) {
  
  return (
    <Card size={{base:'sm',md:'sm',lg:'sm'}}>
      <CardBody>
        <Image src={src} alt="BEBO" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size={["sm", "md"]}>
            <HStack>
              <Text flex={1}>{title} </Text>
              <MdArrowOutward />
            </HStack>
          </Heading>
          <Text>{content}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
