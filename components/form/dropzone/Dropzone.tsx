import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { FC } from "react";
import { useDropzone } from "react-dropzone";
import UploadIcon from "remixicon-react/UploadCloudFillIcon";

export interface IDropzoneProps {
  formik: any;
  name: string;
  label: string;
  maxFiles?: number;
  maxSize?: number;
}

export const Dropzone: FC<IDropzoneProps> = ({
  formik,
  name,
  label,
  maxFiles = 1,
  maxSize = 3,
}) => {
  const files = formik.values[name]?.map((file: any, index: number) => (
    <ListItem
      key={file.path}
      fontSize="14px"
      mt="5px"
      w="200px"
      overflow="hidden"
      textAlign="left"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
    >
      <b>{index + 1}: </b> {file.path}
    </ListItem>
  ));

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg", ".png"],
    },
    maxFiles,
    maxSize: maxSize * 1048576,
    onDrop: (acceptedFiles: any) => {
      formik.setFieldValue(name, acceptedFiles);
    },
    onFileDialogOpen: () => formik.setFieldValue(name, null),
  });

  return (
    <Box>
      <Text
        textAlign="left"
        color="_accent.100"
        display="flex"
        fontSize="12px"
        fontWeight={400}
        mb="4px"
        textTransform="uppercase"
      >
        {label}
      </Text>
      <Box
        {...getRootProps({ className: "dropzone" })}
        background={
          formik?.touched[name] && formik?.errors[name]?.length > 0
            ? "red.100"
            : "#F7FBFD"
        }
        border="1px dashed"
        borderColor={
          formik?.touched[name] && formik?.errors[name]?.length > 0
            ? "red"
            : "_primary.100"
        }
        borderRadius="10px"
        cursor="pointer"
        py="40px"
      >
        <input {...getInputProps()} />
        <Flex justify="center">
          <UploadIcon />
        </Flex>
        <Box color="_secondary.300" mx="auto" mt="10px" textAlign="center">
          <Flex justify="center">
            <Text
              as="span"
              color="_primary.300"
              fontSize="14px"
              fontWeight={500}
            >
              Click to upload
            </Text>
            <Text as="span" fontSize="14px" fontWeight={400} ml="4px">
              or drag and drop
            </Text>
          </Flex>
          <Box>
            <Text as="span" display="block" fontSize="14px" fontWeight={400}>
              Jpg or Png
            </Text>
          </Box>
        </Box>
      </Box>
      <Text
        fontStyle="italic"
        opacity={0.8}
        textAlign="left"
        mt="5px"
        fontSize="13px"
      >
        Max of {maxFiles} image, max of {maxSize}MB file
      </Text>
      <UnorderedList mx={0} mt="20px">
        {files}
      </UnorderedList>
    </Box>
  );
};
