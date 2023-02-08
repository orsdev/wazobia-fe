import { Box } from "@chakra-ui/react";
import { FC, useRef } from "react";
import { EditorState } from "draft-js";
import { Editor as DraftEditor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { DropdownMenu } from "@/components";

type EditorProps = {
  handleChange(value: EditorState): void;
  editorState: EditorState;
};

export const Editor: FC<EditorProps> = ({ handleChange, editorState }) => {
  const boxRef = useRef(null);
  const isTyping = useRef(false);

  return (
    <Box
      ref={boxRef}
      my="20px"
      h={isTyping.current ? "550px" : "250px"}
      maxH="600px"
      w="full"
      sx={{
        ".editor__wrapper": {
          position: "relative",
          height: "90%",
          px: "10px",
        },

        ".editor__container": {
          position: "relative",
          height: isTyping.current ? "90%" : "80%",
          border: "1px solid #E7F1E9",
          px: "10px",
        },
      }}
    >
      <DraftEditor
        placeholder="Add content..."
        toolbar={{
          options: [
            "blockType",
            "link",
            "image",
            "inline",
            "list",
            "textAlign",
            "history",
          ],
          inline: {
            inDropdown: false,
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
            options: ["bold", "italic", "underline", "strikethrough"],
          },
          list: {
            inDropdown: false,
            className: undefined,
            component: undefined,
            dropdownClassName: undefined,
            options: ["unordered", "ordered"],
          },
        }}
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="editor__wrapper"
        editorClassName="editor__container"
        onEditorStateChange={(value: EditorState) => {
          handleChange(value);

          if (!isTyping.current) {
            isTyping.current = true;
          }
        }}
        toolbarCustomButtons={[<DropdownMenu key="custom-menu" ref={boxRef} />]}
      />
    </Box>
  );
};
