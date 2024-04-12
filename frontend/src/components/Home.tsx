import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import Navbar from "./Navbar";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <Flex>
      <Box flex="1" height="100vh" p={4}>
        <Box>Content goes here...</Box>
        <Box>More content...</Box>
      </Box>
      <Navbar />
    </Flex>
  );
};

export default Home;
