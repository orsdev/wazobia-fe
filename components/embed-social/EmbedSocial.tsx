import { Stack } from "@chakra-ui/react";
import { useFormik } from "formik";
import { ContentState, EditorState, Modifier } from "draft-js";
import * as Yup from "yup";
import {
  Button,
  SelectBox,
  SocialProviderOptions,
  TextBox,
} from "@/components";
import { useModalContext } from "@/contexts/modal";
import htmlToDraft from "html-to-draftjs";
import { EditorStateProps } from "../type";

const ValidationSchema = Yup.object({
  url: Yup.string().url("Enter a valid url").required("Please, enter url"),
  code: Yup.string(),
  provider: Yup.string().required("Select an option"),
});

export const EmbedSocial = ({
  editorState,
  setEditorState,
}: EditorStateProps) => {
  const { closeModal } = useModalContext();

  const formik = useFormik({
    initialValues: {
      url: "",
      provider: "Youtube",
      code: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      const { url, provider } = values;

      const htmlResult = htmlBuilder({ label: provider, url });
      insertIntoEditor(htmlResult);

      closeModal();
    },
  });

  const htmlBuilder = ({ url, label }: { url: string; label: string }) => {
    const html = `<a href=${encodeURI(
      url
    )} target="_blank" rel="noopener noreferrer">${label}</a>`;
    return html;
  };

  const insertIntoEditor = async (content: string) => {
    const { contentBlocks, entityMap } = htmlToDraft(content);

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

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing="20px">
        <SelectBox
          label="Social Media Platform"
          name="provider"
          formik={formik}
          options={SocialProviderOptions}
        />
        <TextBox
          label="url"
          name="url"
          placeholder_text="https://example.com"
          formik={formik}
          handleChange={(value) => {
            const urlIsNotValid =
              formik.touched["url"] &&
              (formik.errors["url"] as string)?.length > 0;

            // If the url is valid and the provider is not empty
            if (urlIsNotValid === false && formik.values.provider !== "") {
              const { provider } = formik.values;

              const htmlResult = htmlBuilder({
                label: provider,
                url: value,
              });

              // Set the code value
              formik.setFieldValue("code", htmlResult);
            }
          }}
        />
        <TextBox
          label="code"
          name="code"
          placeholder_text=""
          isReadOnly
          formik={formik}
        />
      </Stack>
      <Stack mt="30px" spacing="12px" direction="row">
        <Button title="Embed" isLoading={false} type="submit" />
        <Button
          title="Cancel"
          isLoading={false}
          type="button"
          onClick={() => {
            formik.resetForm();
            closeModal();
          }}
        />
      </Stack>
    </form>
  );
};
