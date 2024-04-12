import { Box, Link, VStack } from "@chakra-ui/react";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <Box
      width="300px"
      position="fixed"
      left="0"
      top="0"
      height="100vh"
      overflowY="auto"
    >
      <VStack p={4} spacing={4} align="stretch">
        <Link>Link 1</Link>
        <Link>Link 2</Link>
      </VStack>
    </Box>
  );
};

export default Navbar;
