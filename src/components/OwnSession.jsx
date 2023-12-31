import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import square from "../assets/Rectangle 444square.png";
import bgImg from "../assets/Own session.svg";

const arrData = [
  {
    img: square,
    desc:
      "Standard sessions do not personalize the learning for your audience",
  },
  {
    img: square,
    desc: "Pick & Choose the speakers who meet all your check boxes",
  },
  {
    img: square,
    desc: "Flexible schedule to meet your plans",
  },
  {
    img: square,
    desc: "Plug & Play with flawless technology backbone",
  },
  {
    img: square,
    desc: "Exclusive expert sessions on topic of your choice",
  },
];

const OwnSession = () => {
  return (
    <Box w={{ base: "90%", md: "70%", xl: "55%" }} mx="auto" mb="20" mt="28">
      <Heading
        pl="8"
        w="80%"
        fontSize={{ base: "16px", lg: "46px" }}
        fontWeight={"600"}
      >
        Why Curate Your Own Sessions?
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Box p="12">
          <Image src={bgImg} />
        </Box>
        <Box px="6">
          {arrData.map((elem) => {
            return (
              <Flex my="6" align="center">
                <Box w="10%">
                  <Image src={elem.img} />
                </Box>
                <Box w="90%" px="4">
                  <Text fontSize={{ base:"12px",md: "18px" }} fontWeight={"400"}>
                    {elem.desc}
                  </Text>
                </Box>
              </Flex>
            );
          })}
        </Box>
        
      </SimpleGrid>
    </Box>
  );
};

export default OwnSession;
