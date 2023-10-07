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

const Form = () => {
  return (
    <Box>
      <Box
        p="8"
        w="70%"
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
          <Text textAlign="center" fontSize={"2xl"} fontWeight="semibold">
            Welcome Form
          </Text>
          <Text textAlign="center" mb="8" fontSize={"xs"}>
            Submit Your Requirement
          </Text>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Enter email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Mobile Number</FormLabel>
            <Input placeholder="First name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Organization</FormLabel>
            <Input placeholder="Enter name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Select Date</FormLabel>
            <Input placeholder="DD/MM/YYYY" />
          </FormControl>
          <Text>Topic of the Session:</Text>
          <SimpleGrid columns="2" gap="2">
            <Button leftIcon={<TiTickOutline />} borderRadius="3xl" size="sm" variant='outline'>
              Business Leadership
            </Button>
            <Button leftIcon={<TiTickOutline />} borderRadius="3xl" size="sm" variant='outline'>
              Motivation During Crisis
            </Button>
            <Button leftIcon={<TiTickOutline />} borderRadius="3xl" size="sm" variant='outline'>
              Spirituality
            </Button>
          </SimpleGrid>
          <br />
          <Button w="100%" borderRadius="3xl" bg="#538dd7" py="6" color="white">
            REGISTER
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
