import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import firstImg from "../assets/1 7.png";
import secondImg from "../assets/preview 1.png";
import thirdImg from "../assets/1 7.png";
import fourthImg from "../assets/1530217060-8738 1.png";
import fifthImg from "../assets/5 1.png";
import imageDot from "../assets/Group 1047.png";
import imageHover1 from "../assets/Rectangle 96.png";
import imageHover2 from "../assets/Rectangle 97.png";
import imageHover3 from "../assets/Rectangle 98.png";
import imageHover4 from "../assets/Rectangle 99.png";
import imageHover5 from "../assets/Rectangle 100.png";

const dataArray = [
  {
    img: firstImg,
    desc: "Leadership and Executive coach",
    imageHover: imageHover1,
  },
  {
    img: secondImg,
    desc: "Change Management and Reboot Training",
    imageHover: imageHover2,
  },
  {
    img: thirdImg,
    desc: "Employee Motivation and Engagement",
    imageHover: imageHover2,
  },
  {
    img: fourthImg,
    desc: "Employee Upskill Sessions",
    imageHover: imageHover4,
  },
  {
    img: fifthImg,
    desc: "Soft skills Training",
    imageHover: imageHover5,
  },
];
const LearningSession = () => {
  return (
    <Box bg="#eef4fb" py="20" w="100%">
      <Box w={{ base: "100%", md: "80%" }} mx={"auto"} px={"2"}>
        <Box>
          <Button bg="#ff8e4f" color="white" fontSize="11px">
            Trending
          </Button>
          <Text fontSize={{ base: "16px", md: "18px" }} fontWeight={"600"}>
            Live Learning Sessions
          </Text>
        </Box>
        <SimpleGrid columns={{ base: "2", md: "3", xl: "5" }} mt="10" gap="7">
          {dataArray.map((elem) => {
            return (
              <Box bg="white" borderRadius="xl">
                <Box borderRadius="xl" overflow="hidden" position="relative">
                  <Image src={elem.img} w="100%" />
                  <Image src={imageDot} position="absolute" top="2" left="2" />
                  <Image
                    src={elem.imageHover}
                    top="0"
                    left="0"
                    w="100%"
                    position="absolute"
                  />
                </Box>
                <Text
                  p="4"
                  color="#606060"
                  fontSize={{ base: "10px", md: "15px" }}
                  fontWeight={"500"}
                >
                  {elem.desc}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default LearningSession;
