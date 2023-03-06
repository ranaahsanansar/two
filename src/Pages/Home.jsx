import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import HeroMian from "../Components/HeroMian";
import WeOfferCard from "../Components/WeOfferCard";

const Home = () => {
  return (
    <>
      <Box as="section" pt={10}>
        {/* Hero Section  */}
        <HStack
          flexWrap={{
            sm: "wrap",
            md: "nowrap",
            lg: "nowrap",
            xl: "nowrap",
            base: "wrap",
          }}
        >
          {/* For Hero Text  */}
          <HeroMian />
          {/* For Image  */}
          <VStack>
            <Image src="main.png" />
          </VStack>
        </HStack>
      </Box>

      

      <Box as="section" padding={8} m="10px 0px"
        borderRadius="20px" backgroundColor="rgba(87, 85, 85, 0.336)" >
      <TableContainer h="400px" overflowY="scroll"  >
  <Table variant='striped' colorScheme='red'  >
    <TableCaption color="white" >Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody >
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr><Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr><Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr><Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr><Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr><Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr><Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr><Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr><Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr><Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
      </Box>

      <Box
        as="section"
        backgroundColor="rgba(87, 85, 85, 0.336)"
        blur="10px"
        padding={8}
        borderRadius="20px"
      >
        <Flex flexDir="column">
          <Heading>We Offer</Heading>
          <HStack
            flexWrap={{
              sm: "wrap",
              md: "nowrap",
              lg: "nowrap",
              xl: "nowrap",
              base: "wrap",
            }}
            justifyContent="center"
            alignItems="center"
          >
            {/* <Box>
            <Box position="relative" color="white" borderRadius="10px" overflow="hidden" height="250px" flex="1" >
              <Image  src="https://assets-news.housing.com/news/wp-content/uploads/2020/10/01160004/Top-5-localities-for-buying-plots-in-Hyderabad-FB-1200x700-compressed.jpg" w="100%" h="100%" objectFit="cover" />

              <Box position="absolute" bottom="20px" left="20px" >
                <Heading >Plots</Heading>
              </Box>
            </Box>
            </Box> */}

            <WeOfferCard  />
            <WeOfferCard />
            <WeOfferCard  />


          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
