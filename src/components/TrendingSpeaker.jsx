import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import firstImg from "../assets/Dr.-Shashi-Tharoor-headshot 1.png";
import secondImg from "../assets/Dr.-Shashi-Tharoor-headshot 1 (1).png";
import thirdImg from "../assets/Dr.-Shashi-Tharoor-headshot 1 (2).png";
import fourthImg from "../assets/Dr.-Shashi-Tharoor-headshot 1 (3).png";
import fifthImg from "../assets/Dr.-Shashi-Tharoor-headshot 1 (4).png";
import imageDot from "../assets/Ellipse 6.png";

const dataArray = [
  {
    img: firstImg,
    name: "Michael Kapoor",
    d1: "Former Chairman and Managing",
    d2: "Director, Air India",
  },
  {
    img: secondImg,
    name: "Aditya Ghosh",
    d1: "Board Member, Fabindia Overseas Pvt",
    d2: "Ltd And OYO Rooms",
  },
  {
    img: thirdImg,
    name: "Bhupendra Chaubey",
    d1: "Executive Editor",
    d2: "CNN News18",
  },
  {
    img: fourthImg,
    name: "Dr.Arogyaswami Velumani",
    d1: "Founder Thyrocare",
    d2: "Technologies",
  },
  {
    img: fifthImg,
    name: "Shashi Tharoor",
    d1: "Member of Parliament Lok Sabha,",
    d2: "Indian National Congress",
  },
];

const TrendingSpeaker = () => {
  return (
    <Box py="20" mb="6">
      <Box w={"80%"} mx={"auto"} h={"100%"} px={"2"}>
        <Box>
          <Text fontSize="32px" fontWeight="600" textAlign="center">
            Trending Speakers
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 5 }} mt="10" gap="3">
          {dataArray.map((elem) => {
            return (
              <Box borderRadius="xl">
                <Box borderRadius="xl" overflow="hidden" position="relative">
                  <Image src={elem.img} w="100%" h="80%" />
                  <Image src={imageDot} position="absolute" top="2" right="2" />
                  
                  <Box
                    position="absolute"
                    bottom="0"
                    bg="#538dd7"
                    color="white"
                    w="100%"
                    textAlign="center"
                    py="3"
                  >
                    <Text px="4" fontSize="10" mb="1.5" fontWeight={"600"}>
                      {elem.name}
                    </Text>
                    <Text px="4" fontSize="8px" fontWeight={"400"}>
                      {elem.d1}
                    </Text>
                    <Text px="4" fontSize="8px" fontWeight={"400"}>
                      {elem.d2}
                    </Text>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default TrendingSpeaker;
