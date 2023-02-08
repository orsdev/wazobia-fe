import { useModalContext } from "@/contexts/modal";
import { Box, Flex } from "@chakra-ui/react";
import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(() => import("../components/editor"), {
  ssr: false,
});

const Modal = dynamic(
  async () => await (await import("../components/modal")).Modal,
  {
    ssr: false,
  }
);

const EmbedVideo = dynamic(
  async () => await (await import("../components/embed-video")).EmbedVideo,
  {
    ssr: false,
  }
);

export default function Home() {
  const { showVideoModal, closeModal } = useModalContext();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
  };

  return (
    <>
      <Flex
        py="80px"
        position="relative"
        w="full"
        _before={{
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          width: "full",
          bg: "_accent.300",
        }}
      >
        <Box
          maxW="700px"
          width="680px"
          minH="300px"
          mx="auto"
          border="1px solid #E7F1E9"
          rounded="4px"
          pos="relative"
        >
          <Editor
            editorState={editorState}
            handleChange={onEditorStateChange}
          />
        </Box>
      </Flex>
      <Modal isOpen={showVideoModal} onClose={closeModal}>
        <EmbedVideo />
      </Modal>
    </>
  );
}

Home.meta = {
  title: "Home",
};
