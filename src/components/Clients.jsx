import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import banner from "../assets/Screenshot 2020-11-27 at 7.16ibm.png";

const Clients = () => {
  return (
    <Box w="100%" mt='12'>
      <Box textAlign="center" w={{base:"60%",md:"50%",xl:"31%"}} mx="auto">
        <Box>
          <Heading as="h2">Your SpeakIn is Trusted by the Best of Clients</Heading>
        </Box>
        <Box>
          <Text mt="6">
            SpeakIn speakers have enthralled audiences across top-of-the-line
            businesses in varied sectors globally.
          </Text>
        </Box>
      </Box>
      <Box>
        <Image src={banner} w="100%" />
      </Box>
    </Box>
  );
};

export default Clients;
