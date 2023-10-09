import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import banner from "../assets/Wallpaper.jpg";
import banner1 from "../assets/Rectangle 191wm2.png";
import banner2 from "../assets/Rectangle 192wm1.png";
import banner3 from "../assets/Rectangle 195wm3.png";
import speanin from "../assets/sprakin1 1.png";
import plus from "../assets/Union.png";
import zoom from "../assets/Zoom.png";

const Banner = () => {
  return (
    <Box position="relative" zIndex="-1">
      <Image src={banner} w="100%" />
      <Image
        src={banner1}
        w="100%"
        position="absolute"
        bottom={{ sm: "12", md: "-56" }}
      />
      <Image
        src={banner3}
        w="100%"
        position="absolute"
        bottom={{ sm: "4", md: "-72" }}
      />
      <Image
        src={banner2}
        w="100%"
        position="absolute"
        bottom={{ sm: "12", md: "-52" }}
      />
      <Box width="45%" position={"absolute"} right={"5%"} top="10%">
        <Text
          color="white"
          fontSize={{ sm: "16px", md: "46px" }}
          fontWeight={"600"}
        >
          Curate Your own Training Sessions with top Keynote Speakers
        </Text>
      </Box>
      <Box
        width="35%"
        position={"absolute"}
        right={"15%"}
        top="35%"
        pl={{ sm: "-5", md: "12" }}
        py="10"
        borderRadius={"3xl"}
        bg="whiteAlpha.100"
      >
        <Flex>
          <Image src={speanin} w="50%" h="50%" />
          <Image src={plus} width="7%" h="2%" />
          <Image src={zoom} />
        </Flex>
        <Text
          color="white"
          fontSize={{ base: "8px", md: "22px" }}
          my={{ base: "0", md: "4" }}
          fontWeight={"400"}
        >
          = Your Own Live Session in 30 minutes
        </Text>
        <Button
          w="70%"
          borderRadius={"3xl"}
          bg="#ffde00"
          fontSize={{ base: "6px", md: "18px" }}
          fontWeight={"700"}
          textTransform={"uppercase"}
          size={{ sm: "sm", md: "lg" }}
          py={{ sm: "4", md: "0" }}
        >
          30 Minutes Schedule Now
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
