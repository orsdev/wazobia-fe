import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Box,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface IProps {
  isOpen: boolean;
  onClose(): void;
  children: ReactNode;
}

export const Modal: FC<IProps> = ({ isOpen, onClose, children }) => {
  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "xl" }}
      isCentered
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent py="10px">
        <ModalHeader color="black" fontSize="14px" fontWeight={700}>
          Embed
        </ModalHeader>
        <ModalCloseButton size="sm" mt="10px" />
        <ModalBody>
          <Box mt="5px">{children}</Box>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};
