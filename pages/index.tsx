import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import Messages from "@/components/Messages";
import Footer from "@/components/Footer";
import PromptUser from "@/components/PromptUser";
import { useEffect, useState, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { MessageState } from "@/redux/slices/chatSlice";
import { saveMessage } from "@/redux/slices/chatSlice";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const { username } = useAppSelector((state) => state.username);
  const broadcast = new BroadcastChannel("chat-app");
  const dispatch = useAppDispatch();

  useEffect(() => {
    broadcast.onmessage = (e: any) => {
      dispatch(saveMessage(e.data));
    };
  }, []);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target as HTMLTextAreaElement;

    if (value.trim()) {
      setInputValue(value);
    }
  };

  const handleSubmit = () => {
    if (inputValue.trim().length > 0) {
      const message = {
        from: username,
        message: inputValue,
        date: new Date(),
      } as MessageState;

      broadcast.postMessage(message);
      setInputValue("");
    }
  };

  if (!username) {
    return (
      <>
        <PromptUser />
        <Box
          pos="fixed"
          height="100vh"
          w="100vw"
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
      </>
    );
  }

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
          <Footer
            value={inputValue}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Flex>
      </Box>
    </Box>
  );
}
