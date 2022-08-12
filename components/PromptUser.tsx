import { saveUserName } from "@/redux/slices/usernameSlice";
import { useAppDispatch } from "@/redux/store";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";

function PromptUser() {
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState("");
  const [inValid, setInvalid] = useState(false);

  useEffect(() => {
    onOpen();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;

    if (value.trim()) {
      setValue(value);
    }
  };

  const handleSubmit = (onCloseModal: () => void) => {
    if (value.trim().length === 0) {
      setInvalid(true);
    } else {
      setInvalid(false);
      onCloseModal();

      dispatch(saveUserName(value.toLowerCase()));
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => {}}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter your name</ModalHeader>
          <ModalBody>
            <Input
              placeholder="Your name"
              onChange={handleChange}
              isInvalid={inValid}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => handleSubmit(onClose)}>OK</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PromptUser;
