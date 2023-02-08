import { Stack } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Dropzone } from "@/components";
import { useModalContext } from "@/contexts/modal";
import { EditorStateProps } from "../type";
import { AtomicBlockUtils } from "draft-js";
import { cloudinary_api } from "@/config";
import { ErrorHandler } from "@/utils";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";

const ValidationSchema = Yup.object({
  photo: Yup.mixed().required("Please, upload your photo"),
});

export const EmbedImage = ({
  editorState,
  setEditorState,
}: EditorStateProps) => {
  const { closeModal } = useModalContext();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      photo: null,
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      const { photo } = values as any;

      uploadImageToImgur(photo);
    },
  });

  const insertImageEditor = async (src: string) => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "IMAGE",
      "IMMUTABLE",
      {
        src,
      }
    );

    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const atomicBlock = AtomicBlockUtils.insertAtomicBlock(
      editorState,
      entityKey,
      " "
    );
    setEditorState(atomicBlock);

    closeModal();
  };

  const uploadImageToImgur = async (file: any) => {
    const formData = new FormData();
    formData.append("upload_preset", process.env.CLOUDINARY_PRESET as string);
    formData.append("file", file[0]);

    setIsLoading(true);

    try {
      const response = cloudinary_api({
        method: "POST",
        data: formData,
      });
      const image_url = await response;
      const src = image_url.data.secure_url;

      insertImageEditor(src);

      setIsLoading(false);
    } catch (error) {
      const msg = ErrorHandler(error as AxiosError);
      toast.error(msg);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Dropzone formik={formik} name="photo" label="File Upload" />
      <Stack mt="30px" spacing="12px" direction="row">
        <Button title="Embed" isLoading={isLoading} type="submit" />
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
