import { ContentState, EditorState, Modifier } from "draft-js";
import { EditorStateProps } from "../type";
import htmlToDraft from "html-to-draftjs";
import { useEffect } from "react";

export const PostTitle = ({
  editorState,
  setEditorState,
}: EditorStateProps) => {
  useEffect(() => {
    if (!editorState) return;
    insertIntoEditor();
  }, []);

  const insertIntoEditor = async () => {
    if (!editorState) return;

    const { contentBlocks, entityMap } = htmlToDraft(
      "<h1>This is the title</h1>"
    );

    const fragmentToBeInserted = Modifier.replaceWithFragment(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      ContentState.createFromBlockArray(contentBlocks, entityMap).getBlockMap()
    );

    const editorWithInsert = EditorState.push(
      editorState,
      fragmentToBeInserted,
      "insert-fragment"
    );

    const newEditorState = EditorState.moveSelectionToEnd(editorWithInsert);
    setEditorState(newEditorState);
  };

  return null;
};
