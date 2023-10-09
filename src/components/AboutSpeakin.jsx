import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import watermarkbg from "../assets/Rectangle 196wm5.png";
import watermarkbg2 from "../assets/open-mic 1.png";
import micbg from "../assets/Screenshot_2020-11-16_at_1.08bg-removebg-preview.png";
import mic from "../assets/unnamed 1.png";

const AboutSpeakin = () => {
  return (
    <Box
      backgroundImage={watermarkbg}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
    >
      <Image src={watermarkbg2} boxSize="80vh" objectFit="contain" w="100%" />
      <Box position="absolute" top="24" w="100%">
        <Flex>
          <Box
            w="45%"
            backgroundImage={micbg}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPosition="center"
            h="60vh"
          >
            <Image src={mic} w="20%"  position="absolute" bottom="6" left="52"/>
            {/* <Image src={mic} /> */}
          </Box>
          <Box w="40%" mt="4%" pl="24">
            <Text fontWeight="600" fontSize="32px" my="5">About SpeakIn</Text>
            <Text fontSize="18px" w="90%" fontWeight={"400"}>
              SpeakIn is Asia's largest on-demand network providing access to
              top regional speakers, thought leaders and their content. Enabling
              organizations to build performance agility and win over
              disruption, at SpeakIn only the best come together to inform,
              inspire and motivate.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutSpeakin;
