import { Stack } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, ProviderOptions, SelectBox, TextBox } from "@/components";

const ValidationSchema = Yup.object({
  url: Yup.string().required("Please, enter url"),
  provider: Yup.string().required("Select an option"),
});

export const EmbedVideo = () => {
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
          label="Video Provider"
          name="provider"
          formik={formik}
          options={ProviderOptions}
        />
        <TextBox label="url" name="url" placeholder_text="" formik={formik} />
      </Stack>
      <Stack mt="30px" spacing="12px" direction="row">
        <Button title="Embed" isLoading={false} type="submit" />
        <Button
          title="Cancel"
          isLoading={false}
          type="button"
          onClick={() => {
            formik.resetForm();
          }}
        />
      </Stack>
    </form>
  );
};
