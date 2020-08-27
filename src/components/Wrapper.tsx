import React from "react";
import { Box } from "@chakra-ui/core";

interface wrapperProps {}

export const Wrapper: React.FC<wrapperProps> = ({ children }) => {
  return (
    <Box maxW="800px" w="100%" mt={8} mx="auto">
      {children}
    </Box>
  );
};
