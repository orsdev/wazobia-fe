import { useModalContext } from "@/contexts/modal";
import { Box, Flex } from "@chakra-ui/react";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(() => import("../components/editor"), {
  ssr: false,
});

const PostDefaultTitle = dynamic(
  async () => (await import("../components")).PostTitle,
  {
    ssr: false,
  }
);

const Modal = dynamic(async () => (await import("../components")).Modal, {
  ssr: false,
});

const EmbedVideo = dynamic(
  async () => (await import("../components")).EmbedVideo,
  {
    ssr: false,
  }
);

const EmbedSocial = dynamic(
  async () => (await import("../components")).EmbedSocial,
  {
    ssr: false,
  }
);

const EmbedImage = dynamic(
  async () => (await import("../components")).EmbedImage,
  {
    ssr: false,
  }
);

const PostButton = dynamic(async () => (await import("../components")).Button, {
  ssr: false,
});

export default function Home() {
  const { showVideoModal, showSocialModal, showImageModal, closeModal } =
    useModalContext();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
  };

  const postToServer = () => {
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    console.log(content);
    alert("Posted to server");
  };

  return (
    <>
      <Flex
        py="80px"
        px="20px"
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
        <Box maxW="700px" width="680px" mx="auto">
          <Box
            width="full"
            minH="300px"
            border="1px solid #E7F1E9"
            rounded="4px"
            pos="relative"
          >
            <PostDefaultTitle
              editorState={editorState}
              setEditorState={setEditorState}
            />
            <Editor
              editorState={editorState}
              handleChange={onEditorStateChange}
            />
          </Box>
          <Flex justifyContent="flex-end" mt="10px">
            <PostButton
              title="Post"
              type="button"
              style={{
                bg: "_primary.100",
                color: "white",
              }}
              onClick={postToServer}
            />
          </Flex>
        </Box>
      </Flex>

      {/* Embed Video Modal */}
      <Modal isOpen={showVideoModal} onClose={closeModal}>
        <EmbedVideo />
      </Modal>

      {/* Embed Social Modal */}
      <Modal isOpen={showSocialModal} onClose={closeModal}>
        <EmbedSocial
          editorState={editorState}
          setEditorState={setEditorState}
        />
      </Modal>

      {/* Embed Image Modal */}
      <Modal isOpen={showImageModal} onClose={closeModal}>
        <EmbedImage editorState={editorState} setEditorState={setEditorState} />
      </Modal>
    </>
  );
}

Home.meta = {
  title: "Home",
};
