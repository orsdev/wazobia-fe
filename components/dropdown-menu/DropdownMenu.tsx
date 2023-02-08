import {
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import PlusIcon from "remixicon-react/AddLineIcon";
import ImageIcon from "remixicon-react/ImageFillIcon";
import VideoIcon from "remixicon-react/videoLineIcon";
import LinkIcon from "remixicon-react/LinkMIcon";
import { useModalContext } from "@/contexts/modal";

export const DropdownMenu = forwardRef((props, ref: any) => {
  const { toggleModal } = useModalContext();

  return (
    <Portal containerRef={ref}>
      <Menu>
        <MenuButton
          alignItems="center"
          display="flex"
          justifyContent="center"
          bg="_highlight.400"
          rounded="full"
          w="32px"
          h="32px"
          mt="10px"
          ml="10px"
        >
          <Box
            as="span"
            display="flex"
            alignItems="center"
            justifyContent="center"
            opacity={0.8}
          >
            <PlusIcon size={18} />
          </Box>
        </MenuButton>
        <MenuList border="1px solid #E7F1E9" rounded="4px" px="10px">
          <Heading
            as="h6"
            fontSize="10px"
            fontWeight={400}
            mb="14px"
            color="_accent.400"
          >
            EMBEDS
          </Heading>
          <MenuItem
            pl={0}
            _hover={{
              bg: "transparent",
            }}
            _focus={{
              bg: "transparent",
            }}
            onClick={() => toggleModal("image")}
          >
            <Flex gap="8px">
              <ImageIcon size="16px" />
              <Stack spacing="2px">
                <Heading
                  as="h5"
                  fontSize="13px"
                  fontWeight={600}
                  color="_accent.400"
                >
                  Picture
                </Heading>
                <Box color="_accent.100">
                  <Text as="p" fontSize="10px">
                    Jpeg, png
                  </Text>
                </Box>
              </Stack>
            </Flex>
          </MenuItem>
          <MenuItem
            pl={0}
            my="15px"
            _hover={{
              bg: "transparent",
            }}
            _focus={{
              bg: "transparent",
            }}
            onClick={() => toggleModal("video")}
          >
            <Flex gap="8px">
              <VideoIcon size="16px" />
              <Stack spacing="2px">
                <Heading
                  as="h5"
                  fontSize="13px"
                  fontWeight={600}
                  color="_accent.400"
                >
                  Video
                </Heading>
                <Box color="_accent.100">
                  <Text as="p" fontSize="10px">
                    Embed a YouTube video
                  </Text>
                </Box>
              </Stack>
            </Flex>
          </MenuItem>
          <MenuItem
            pl={0}
            my="15px"
            _hover={{
              bg: "transparent",
            }}
            _focus={{
              bg: "transparent",
            }}
            onClick={() => toggleModal("social")}
          >
            <Flex gap="8px">
              <LinkIcon size="16px" />
              <Stack spacing="2px">
                <Heading
                  as="h5"
                  fontSize="13px"
                  fontWeight={600}
                  color="_accent.400"
                >
                  Social
                </Heading>
                <Box color="_accent.100">
                  <Text as="p" fontSize="10px">
                    Embed a Facebook link
                  </Text>
                </Box>
              </Stack>
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>
    </Portal>
  );
});

DropdownMenu.displayName = "DropdownMenu";
