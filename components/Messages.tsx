import { MessageState } from "@/redux/slices/chatSlice";
import { useAppSelector } from "@/redux/store";
import { Avatar, Box, Flex, Stack, Text } from "@chakra-ui/react";

const Messages = () => {
  const { messages } = useAppSelector((state) => state.chats);
  const { username } = useAppSelector((state) => state.username);

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
      {messages &&
        messages.map((chat: MessageState, idx: number) => (
          <Flex
            color="gray.600"
            mb={3}
            key={idx + chat.message}
            justifyContent={username === chat.from ? "flex-end" : "flex-start"}
          >
            <Stack direction="row">
              <Avatar icon={<></>}>
                <Text fontSize="11px">
                  {username === chat.from ? "You" : chat.from}
                </Text>
              </Avatar>
            </Stack>
            <Box
              bg={username === chat.from ? "wheat" : "blue.600"}
              color={username === chat.from ? "black" : "white"}
              px={3}
              py={1.5}
              maxW="250px"
              borderRadius="10px"
              borderTopRadius={username === chat.from ? 0 : "10px"}
              borderBottomRightRadius={username === chat.from ? "10px" : 0}
            >
              <Text>{chat.message}</Text>
            </Box>
            <Text
              ml="5px"
              alignSelf="flex-end"
              fontSize="15px"
              color="gray.400"
            >
              15:55
            </Text>
          </Flex>
        ))}
    </Box>
  );
};

export default Messages;
