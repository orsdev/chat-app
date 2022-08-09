import { MessageState } from "@/redux/slices/chatSlice";
import { useAppSelector } from "@/redux/store";
import { Avatar, Box, Flex, Spinner, Stack, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

dayjs.extend(relativeTime);

const PAGE_SIZE = 25;

const Messages = () => {
  const { messages } = useAppSelector((state) => state.chats);
  const { username } = useAppSelector((state) => state.username);
  const [currentPage, setCurrentPage] = useState(-Math.abs(PAGE_SIZE));
  const BoxRef = useRef<HTMLDivElement>(null);

  /**
   * Scroll new messages into view
   */
  useEffect(() => {
    if (BoxRef.current) {
      BoxRef.current.scroll({
        top: BoxRef.current.scrollHeight + 30,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <Box
      py={5}
      px={6}
      flex={1}
      overflow="auto"
      ref={BoxRef}
      __css={{
        "&::-webkit-scrollbar": {
          width: "5px",
        },

        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "gray.200",
        },
      }}
    >
      <InfiniteScroll
        loadMore={() => {
          if (currentPage > -Math.abs(messages.length)) {
            setCurrentPage((prevState) => prevState - PAGE_SIZE);
            console.count("loading");
          }
        }}
        initialLoad={false}
        threshold={0.4}
        hasMore={currentPage > -Math.abs(messages.length)}
        loader={
          <Box>
            <Spinner />
          </Box>
        }
        useWindow={false}
        isReverse
      >
        {messages.slice(currentPage).map((chat: MessageState, idx: number) => (
          <Flex
            color="gray.600"
            mb={3}
            key={idx + chat.message}
            justifyContent={username === chat.from ? "flex-end" : "flex-start"}
          >
            {username !== chat.from && (
              <Stack direction="row">
                <Avatar icon={<></>} size="lg">
                  <Text fontSize="11px" wordBreak="break-all" lineHeight="100%">
                    {chat.from}
                  </Text>
                </Avatar>
              </Stack>
            )}
            {username === chat.from && (
              <Stack direction="row">
                <Avatar size="lg" bg="teal.700" icon={<></>}>
                  <Text fontSize="11px" color="white" wordBreak="break-all">
                    You
                  </Text>
                </Avatar>
              </Stack>
            )}
            <Box
              bg={username === chat.from ? "wheat" : "blue.600"}
              color={username === chat.from ? "black" : "white"}
              px={3}
              py={1.5}
              maxW="250px"
              borderRadius="10px"
              borderBottomRightRadius={username === chat.from ? 0 : "10px"}
              borderTopLeftRadius={username === chat.from ? "10px" : 0}
            >
              <Text>{chat.message}</Text>
            </Box>
            <Text
              ml="5px"
              alignSelf="flex-end"
              fontSize="12px"
              color="gray.400"
            >
              {dayjs().to(chat.date)}
            </Text>
          </Flex>
        ))}
      </InfiniteScroll>
    </Box>
  );
};

export default Messages;
