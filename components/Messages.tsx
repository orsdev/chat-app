import { Avatar, Box, Flex, Stack, Text } from "@chakra-ui/react";

const Messages = () => {
  return (
    <Box
      py={5}
      px={6}
      flex={1}
      overflow="auto"
      __css={{
        "&::-webkit-scrollbar": {
          width: "5px",
        },

        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "gray.200",
        },
      }}
    >
      <Flex color="gray.600" mb={3}>
        <Stack direction="row">
          <Avatar icon={<></>}>
            <Text fontSize="11px">User 1</Text>
          </Avatar>
        </Stack>
        <Box
          bg="wheat"
          px={3}
          py={1.5}
          maxW="250px"
          borderRadius="10px"
          borderTopRadius={0}
        >
          <Text>Lorem ipsum dolor sit amet.</Text>
          <Text>Thant you so much!.</Text>
        </Box>
        <Text ml="5px" alignSelf="flex-end" fontSize="15px" color="gray.400">
          15:55
        </Text>
      </Flex>

      <Flex color="white" mb={3} justifyContent="flex-end">
        <Text mr="5px" alignSelf="flex-end" fontSize="15px" color="gray.400">
          15:56
        </Text>
        <Box
          bg="blue.600"
          px={3}
          py={1.5}
          maxW="250px"
          borderRadius="10px"
          borderBottomRightRadius={0}
        >
          <Text>Lorem ipsum dolor sit amet.</Text>
          <Text>Thant you so much!.</Text>
        </Box>
        <Stack direction="row">
          <Avatar icon={<></>}>
            <Text fontSize="11px">User 2</Text>
          </Avatar>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Messages;
