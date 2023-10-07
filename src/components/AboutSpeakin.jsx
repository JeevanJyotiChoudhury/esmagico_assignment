import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import watermarkbg from "../assets/Rectangle 196wm5.png";
import watermarkbg2 from "../assets/open-mic 1.png";
import micbg from "../assets/Screenshot 2020-11-16 at 1.08bg.png";
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
            w="40%"
            backgroundImage={micbg}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPosition="center"
            h="60vh"
          >
            <Image src={mic} objectFit="cover" />
            {/* <Image src={mic} /> */}
          </Box>
          <Box w="60%">
            <Text>About SpeakIn</Text>
            <Text>
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
