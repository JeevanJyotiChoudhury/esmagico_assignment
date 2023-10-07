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
          <Heading as="h4" size="xl" textAlign="center">
            Trending Speakers
          </Heading>
        </Box>
        <SimpleGrid columns={5} mt="10" gap="3">
          {dataArray.map((elem) => {
            return (
              <Box borderRadius="xl">
                <Box borderRadius="xl" overflow="hidden" position="relative">
                  <Image src={elem.img} w="100%" h="80%" />
                  <Image src={imageDot} position="absolute" top="2" right="2" />
                  {/* <Image
                    src={imageHover}
                    top="0"
                    left="0"
                    w="100%"
                    position="absolute"
                  /> */}
                  <Box
                    position="absolute"
                    bottom="0"
                    bg="#538dd7"
                    color="white"
                    w="100%"
                    textAlign="center"
                    py="1"
                  >
                    <Text px="4" fontSize="md" mb="1.5">
                      {elem.name}
                    </Text>
                    <Text px="4" fontSize="xs">
                      {elem.d1}
                    </Text>
                    <Text px="4" fontSize="xs">
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
