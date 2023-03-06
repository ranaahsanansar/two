import { Button, Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const HeroMian = () => {
  return (
    <Box
      backgroundColor="rgba(87, 85, 85, 0.336)"
      borderRadius="10px"
      padding={5}
      h="100%"
      backdropFilter="blur(10px)"
    >
      <VStack spacing={2} h="100%">
        <Heading>Digitalizing Real Estate</Heading>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga alias
          aperiam cumque velit eum, non consequuntur nihil voluptates distinctio
          repellendus doloremque quaerat, nam, cum voluptatem explicabo eveniet
          deleniti itaque deserunt?
        </Text>
        <HStack>
          <Button>Connect Wallet</Button>
          <Button> Sell Property</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default HeroMian;
