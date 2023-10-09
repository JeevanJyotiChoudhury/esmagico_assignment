import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideimage from "../assets/ashutosh-pandey-1 1cow.png"
import playbtn from "../assets/Vector 3playbtn.png"

let arrData = [
  {
    slideImg: slideimage,
    playBtn: playbtn,
    text: "Dr. Muhammad Yunis, Nobel Laureate and conomist",
  },
  {
    slideImg: slideimage,
    playBtn: playbtn,
    text: "Dr. Muhammad Yunis, Nobel Laureate and conomist",
  },
  {
    slideImg: slideimage,
    playBtn: playbtn,
    text: "Dr. Muhammad Yunis, Nobel Laureate and conomist",
  },
  {
    slideImg: slideimage,
    playBtn: playbtn,
    text: "Dr. Muhammad Yunis, Nobel Laureate and conomist",
  },
];

const RealPeople = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 500,
  };
  return (
    <Box bg="#68a0e8" pt="4" pb="24">
      <Box
        w={{ base: "100%", lg: "60%" }}
        mx="auto"
        px={{ base: "3", sm: "5", xl: "0" }}
      >
        <SimpleGrid columns={{ base: 1, lg: "2" }}>
          <Box color="white" pl={{ base: "4", lg: "16" }} mt="15%">
            <Text
              fontSize={{ sm: "24px", md: "42px" }}
              fontWeight="600"
              mb="-4"
            >
              Real People
            </Text>
            <Text
              fontSize={{ sm: "24px", md: "42px" }}
              fontWeight="600"
              mt={{ base: "4", md: "0" }}
            >
              {" "}
              Real Learnning
            </Text>
            <Text pr="20" fontSize={{ md: "18px",base:"12px" }} fontWeight="400">
              SpeakIn is Asia's largest on-demand network providing access to
              top regional speakers.
            </Text>
          </Box>
          <Box>
            <Slider {...settings}>
              {arrData.map((el) => {
                return (
                  <Box position="relative" p="5">
                    <Image src={slideimage} />
                    <Box position="absolute" left="45%" top="35%">
                      <Image src={playbtn} />
                    </Box>
                    <Text
                      position="absolute"
                      bottom="8"
                      color="white"
                      px="12"
                      fontWeight="500"
                      fontSize={{ md: "20px", base: "12px" }}
                    >
                      Dr. Muhammad Yunis, Nobel Laureate and conomist
                    </Text>
                  </Box>
                );
              })}
            </Slider>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default RealPeople;
