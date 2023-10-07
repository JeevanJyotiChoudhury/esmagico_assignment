import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/sprakin1 1.png";

const Footer = () => {
  return (
    <Box bg="#000000" color="white">
      <Flex w="80%" mx="auto" justify="space-between" py="12">
        <Box>
          <Flex alignItems="center">
            <Image src={logo} mb="-2" />
            <span>
              <Text fontSize="xl">is India's largest network of experts</Text>
            </span>
          </Flex>
          <Text fontSize="xl">delivering business learning content</Text>
          <Box mt="4">
            <Text fontSize="sm">@ 2020 SPEAKIN ALL RIGHTS RESERVED</Text>
          </Box>
        </Box>
        <Box color="white">
          <Flex gap="3">
            <Input type="text" placeholder="Enter your mail ID" width="350px"/>
            <Button bg="#538dd7" color="white">
              Subscribe
            </Button>
          </Flex>
          <Text textAlign="right" mt="3">Subscribe to our news letter</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
