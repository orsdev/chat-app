import { Button, Flex, Textarea } from "@chakra-ui/react";
import SendPlane from "remixicon-react/SendPlane2FillIcon";

const Footer = () => {
  return (
    <Flex alignItems="center" bg="white" py={1} h="70px">
      <Flex
        bg="#F4F4FB"
        py={1}
        alignItems="center"
        w="full"
        h="full"
        overflow="hidden"
        px={1}
      >
        <Textarea
          placeholder="Type your message here..."
          _placeholder={{
            pt: "8px",
          }}
          display="block"
          w="100%"
          height="full"
          maxHeight="full"
          minHeight="full"
          borderRadius={0}
        />
        <Flex ml={3}>
          <Button>
            <SendPlane />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
