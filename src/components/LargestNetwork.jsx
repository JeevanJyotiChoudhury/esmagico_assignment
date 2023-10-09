import { Box, Flex, Image, Text, Button, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import Form from "./Form";
import handshake from "../assets/istockphoto-1146425090-612x612_1-removebg-preview.png";
import waterBg from "../assets/Ellipse 24.png";
import waterBg1 from "../assets/Ellipse 25watermark.png";

const LargestNetwork = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <Box mt="80">
      <Flex direction={{ base: "column", md: "row" }}>
        <Box w={{ base: "100%", md: "50%" }}>
          {useBreakpointValue({ base: false, md: true }) && <Form />}
        </Box>
        <Flex
          w={{ base: "100%", md: "50%" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
        >
          {useBreakpointValue({ base: true, md: false }) && (
            <Button
              onClick={toggleFormVisibility}
              bg="#538dd7"
              color="white"
              mt={{ base: "4", md: "0" }}
              fontSize={"sm"}
              alignSelf={{ base: "flex-start", md: "auto" }}
            >
              {isFormVisible ? "Close Form" : "Register"}
            </Button>
          )}
          <Text
            fontSize={{ base: "16px", lg: "46px" }}
            fontWeight="bold"
            w={{ base: "100%", md: "55%", base: "30%" }}
            mt={{ base: "4", md: "-96" }}
            style={{fontFamily:"Poppins"}}
          >
            Grow with India’s Largest Network of Experts
          </Text>
          <Box position="relative">
            <Image src={waterBg} position="absolute" top="-24" />
            <Image src={waterBg1} position="absolute" top="-24" />
            <Image src={handshake} position="relative" />
          </Box>
        </Flex>
      </Flex>
      {useBreakpointValue({ base: true, md: false }) && isFormVisible && (
        <Form />
      )}
    </Box>
  );
};

export default LargestNetwork;
