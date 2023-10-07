import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/sprakin1 1.png";

const Footer = () => {
  return (
    <Box bg="#000000" color="white">
      <Flex
        flexDirection={{ md: "row", base: "column-reverse" }}
        justify="space-between"
        w="80%"
        mx="auto"
        py="12"
      >
        <Box>
          <Flex alignItems="center">
            <Image
              src={logo}
              mb="-2"
              w={{ base: "20%", sm: "30%" }}
            />

            <Text fontSize={{ base: "sm", md: "lg" }}>
              is India's largest network of experts
            </Text>
          </Flex>
          <Text fontSize={{ base: "sm", md: "xl" }}>
            delivering business learning content
          </Text>
          <Box mt="4">
            <Text fontSize="xs">@ 2020 SPEAKIN ALL RIGHTS RESERVED</Text>
          </Box>
        </Box>
        <Box color="white">
          <Flex
            gap="3"
            mt={{ base: "7", md: "0" }}
            flexDirection={{ base: "row", md: "row" }}
          >
            <Input
              type="text"
              placeholder="Enter your mail ID"
              w={{ sm: "auto", md: "250", xl: "350px" }}
            />
            <Button bg="#538dd7" color="white">
              Subscribe
            </Button>
          </Flex>
          <Text textAlign={{ base: "left", md: "right" }} mt="3">
            Subscribe to our news letter
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
