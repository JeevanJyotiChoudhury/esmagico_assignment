import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import img1 from "../assets/noun_form_3426131 1doc1.png";
import img2 from "../assets/Uniondoc2.png";
import img3 from "../assets/Uniondoc3.png";
import img4 from "../assets/Uniondo4.png";

const dataArray = [
  {
    img: img1,
    desc: "Express the interest by Filling the form",
  },
  {
    img: img2,
    desc: "Finalize Speakers, Date and Time",
  },
  {
    img: img3,
    desc: "Make payment through sent Payment Link",
  },
  {
    img: img4,
    desc: "Host your Fully Managed Live Session",
  },
];

const LiveSession = () => {
  return (
    <Box w="50%" mx="auto" textAlign="center" mb='20'>
      <Flex fontSize={{base:"md",sm:"xl",lg:"4xl"}} fontWeight="medium" justify="center" pt="10" pb="20">
        How
        <span>
          <Text color="#4467c3">Live Sessions</Text>
        </span>
        Work?
      </Flex>
      <SimpleGrid columns={{sm:"1",md:"2",xl:"4"}} gap="9">
        {dataArray.map((el) => {
          return (
            <Box shadow="2xl" borderRadius="lg">
              <Flex justify="center" align="center" pt="9" pb="5">
                <Image src={el.img} />
              </Flex>
              <Text pb="5" mx="6">
                {el.desc}
              </Text>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default LiveSession;
