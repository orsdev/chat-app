import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import Messages from "@/components/Messages";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Chat App</title>
      </Head>
      <Box py="56px" px={{ base: 3, sm: 6 }}>
        <Flex
          border="2px solid"
          borderColor="blue.600"
          h="500px"
          borderRadius="10px"
          overflow="hidden"
          display="flex"
          flexDir="column"
          py={1}
        >
          <Messages />
          <Footer />
        </Flex>
      </Box>
    </Box>
  );
}
