import { Stack } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  SelectBox,
  SocialProviderOptions,
  TextBox,
} from "@/components";
import { useModalContext } from "@/contexts/modal";

const ValidationSchema = Yup.object({
  url: Yup.string().required("Please, enter url"),
  code: Yup.string(),
  provider: Yup.string().required("Select an option"),
});

export const EmbedSocial = () => {
  const { closeModal } = useModalContext();

  const formik = useFormik({
    initialValues: {
      url: "",
      provider: "Youtube",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {},
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing="20px">
        <SelectBox
          label="Social Media Platform"
          name="provider"
          formik={formik}
          options={SocialProviderOptions}
        />
        <TextBox label="url" name="url" placeholder_text="" formik={formik} />
        <TextBox label="code" name="code" placeholder_text="" formik={formik} />
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
