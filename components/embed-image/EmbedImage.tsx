import { Stack } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Dropzone } from "@/components";
import { useModalContext } from "@/contexts/modal";

const ValidationSchema = Yup.object({
  photo: Yup.mixed().required("Please, upload your photo"),
});

export const EmbedImage = () => {
  const { closeModal } = useModalContext();

  const formik = useFormik({
    initialValues: {
      photo: null,
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {},
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Dropzone formik={formik} name="photo" label="File Upload" />
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
