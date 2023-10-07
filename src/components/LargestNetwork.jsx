import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Form from "./Form";
import handshake from "../assets/istockphoto-1146425090-612x612_1-removebg-preview.png"
import waterBg from "../assets/Ellipse 24.png"
import waterBg1 from "../assets/Ellipse 25watermark.png"

const LargestNetwork = () => {
  return (
    <Box mt="80">
      <Flex>
        <Box w="50%">
          <Form />
        </Box>
        <Flex w="50%" justify="space-between">
          <Text fontSize="5xl" fontWeight="bold" w="50%" mt="-16">
            Grow with India’s Largest Network of Experts
          </Text>
          <Box position="relative">
            <Image src={waterBg} position="absolute" top="-24"  />
            <Image src={waterBg1} position="absolute" top="-24"  />
            <Image src={handshake} position="relative" />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LargestNetwork;
