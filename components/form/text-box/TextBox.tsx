import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FC } from "react";

interface InputProps {
  formik: any;
  name: string;
  placeholder_text?: string;
  label: string;
  handleChange?(value: string): void;
  isReadOnly?: boolean;
}

export const TextBox: FC<InputProps> = ({
  name,
  label,
  formik,
  handleChange,
  isReadOnly = false,
  placeholder_text = "",
}) => {
  return (
    <Box>
      <FormControl
        isInvalid={formik?.touched[name] && formik?.errors[name]?.length > 0}
        isReadOnly={isReadOnly}
      >
        <FormLabel
          color="_accent.100"
          display="flex"
          fontSize="12px"
          fontWeight={400}
          mb="4px"
          textTransform="uppercase"
        >
          {label}
        </FormLabel>
        <Input
          type="text"
          name={name}
          placeholder={placeholder_text}
          fontSize="14px"
          height="44px"
          color="_accent.100"
          w="full"
          _focus={{
            borderColor: isReadOnly ? "_highlight.400" : "initial",
          }}
          _placeholder={{
            color: "_accent.100",
            opacity: 0.7,
          }}
          sx={{
            border: "1px solid",
            borderColor: "_highlight.400",
            outline: "none",
            boxShadow: "none",
          }}
          onChange={(event) => {
            formik.handleChange(event);
            handleChange && handleChange(event.target.value);
          }}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
        />
      </FormControl>
    </Box>
  );
};
