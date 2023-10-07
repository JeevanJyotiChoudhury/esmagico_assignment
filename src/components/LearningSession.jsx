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
import imageHover from "../assets/Rectangle 97.png"

const dataArray = [
  {
    img: firstImg,
    desc: "Leadership and Executive coach",
  },
  {
    img: secondImg,
    desc: "Change Management and Reboot Training",
  },
  {
    img: thirdImg,
    desc: "Employee Motivation and Engagement",
  },
  {
    img: fourthImg,
    desc: "Employee Upskill Sessions",
  },
  {
    img: fifthImg,
    desc: "Soft skills Training",
  },
];
const LearningSession = () => {
  return (
    <Box bg="#eef4fb" py="20" w='100%'>
      <Box w={{sm:"100%",md:"80%"}} mx={"auto"} px={"2"}>
        <Box>
          <Button bg="#ff8e4f" color="white">
            Trending
          </Button>
          <Heading as="h3" size="lg">
            Live Learning Sessions
          </Heading>
        </Box>
        <SimpleGrid columns={{sm:'2',md:'3',xl:'5'}} mt="10" gap="7">
          {dataArray.map((elem) => {
            return (
              <Box bg="white" borderRadius="xl">
                <Box borderRadius="xl" overflow="hidden" position="relative">
                  <Image src={elem.img} w="100%" />
                  <Image src={imageDot} position="absolute" top="2" left="2" />
                  <Image
                    src={imageHover}
                    top="0"
                    left="0"
                    w="100%"
                    position="absolute"
                  />
                </Box>
                <Text p="4" color="#606060" fontSize="md">
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
