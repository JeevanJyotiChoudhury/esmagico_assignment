import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Form from "./Form";
import handshake from "../assets/istockphoto-1146425090-612x612 1.png"
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
          <Text fontSize="3xl" fontWeight="bold" w="40%" mt="-16">Grow with India’s Largest Network of Experts</Text>
          <Box >
            <Image src={handshake} />
            {/* <Image src={waterBg1} position="absolute" right="0" top="5%"/> */}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LargestNetwork;
