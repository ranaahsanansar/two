import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Box backgroundImage="linear-gradient(to bottom right, #fc0345,#fc03b1,#4a03fc)">
      <Navbar />
        <Container
          maxW={{
            md: "container.md",
            lg: "container.lg",
            xl: "container.xl",
            sm: "container.sm",
          }}
          
        > 
          <Box pt={20} >
            <Outlet />
          </Box>
          
        </Container>
      </Box>
    </>
  );
};

export default MainLayout;
