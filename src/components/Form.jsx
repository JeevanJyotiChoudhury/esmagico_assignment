import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import speakin from "../assets/speakin-logo 1.png";
import { TiTickOutline } from "react-icons/ti";
import tick from "../assets/Union (1).png";

const Form = () => {
  return (
    <Box>
      <Box
        p="8"
        w={{ sm: "95%", md: "75%" }}
        mx="auto"
        shadow="lg"
        borderRadius="20px"
        mt="-450px"
        zIndex={"1"}
        bg="white"
      >
        <Box h="auto" border="1px dashed" borderRadius="20px" p="10">
          <Flex justify="center">
            <Image src={speakin} />
          </Flex>
          <Text textAlign="center" fontSize={"26px"} fontWeight="500">
            Welcome Form
          </Text>
          <Text textAlign="center" mb="8" fontSize={"14px"} fontWeight="500">
            Submit Your Requirement
          </Text>
          <FormControl isRequired my="4">
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter name" />
          </FormControl>
          <FormControl isRequired my="4">
            <FormLabel>Email</FormLabel>
            <Input placeholder="Enter email" />
          </FormControl>
          <FormControl isRequired my="4">
            <FormLabel>Mobile Number</FormLabel>
            <Input placeholder="First name" />
          </FormControl>
          <FormControl isRequired my="4">
            <FormLabel>Organization</FormLabel>
            <Input placeholder="Enter name" />
          </FormControl>
          <FormControl isRequired my="4">
            <FormLabel>Select Date</FormLabel>
            <Input placeholder="DD/MM/YYYY" />
          </FormControl>
          <Text fontSize="18px" my="5" fontWeight="500">
            Topic of the Session:
          </Text>
          <Flex gap="2" w={"auto"} fontSize={"14px"} fontWeight={"600"}>
            <Flex
              align={"center"}
              borderRadius={"3xl"}
              border="1px solid #adb7c3"
              px="3"
              py="1"
              fontWeight={"semibold"}
            >
              <Image src={tick} />
              <Text ml="2">Business Leadership</Text>
            </Flex>
            <Flex
              align={"center"}
              borderRadius={"3xl"}
              border="1px solid #adb7c3"
              px="3"
              py="1"
              fontWeight={"semibold"}
            >
              <Image src={tick} />
              <Text ml="2">Motivation During Crisis</Text>
            </Flex>
          </Flex>
          <Box w="fit-content" mt="2" fontSize={"14px"} fontWeight={"600"}>
            {" "}
            <Flex
              align={"center"}
              borderRadius={"3xl"}
              border="1px solid #adb7c3"
              px="3"
              py="1"
            >
              <Image src={tick} />
              <Text ml="2"> Spirituality</Text>
            </Flex>
          </Box>
          <br />
          <Button
            w="100%"
            borderRadius="3xl"
            bg="#538dd7"
            py="6"
            color="white"
            fontWeight={"700"}
            fontSize={"14px"}
          >
            REGISTER
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
