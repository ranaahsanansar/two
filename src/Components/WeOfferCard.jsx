import { Box, Heading, Image} from "@chakra-ui/react";
import React from "react";

const WeOfferCard = () => {


  return (
    <Box> 
            <Box position="relative" color="white" borderRadius="10px" overflow="hidden" height="250px" flex="1" >
              <Image  src="https://assets-news.housing.com/news/wp-content/uploads/2020/10/01160004/Top-5-localities-for-buying-plots-in-Hyderabad-FB-1200x700-compressed.jpg" w="100%" h="100%" objectFit="cover" />

              <Box backgroundColor='rgba(87, 85, 85, 0.336)' width="100%" position="absolute" bottom="1px" padding="10px" >
                <Heading >Plot</Heading>
              </Box>
            </Box>
            </Box>
  );
};

export default WeOfferCard;
