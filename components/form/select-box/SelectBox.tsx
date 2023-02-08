import { Box, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { FC } from "react";

interface SelectProps {
  formik: any;
  name: string;
  placeholder_text?: string;
  label: string;
  options: { label: string; value: string }[];
}

export const SelectBox: FC<SelectProps> = ({
  name,
  label,
  formik,
  placeholder_text = "Choose...",
  options = [],
}) => {
  return (
    <Box>
      <FormControl
        isInvalid={formik?.touched[name] && formik?.errors[name]?.length > 0}
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
        <Select
          placeholder={placeholder_text}
          name={name}
          aria-label={name}
          fontSize="14px"
          height="44px"
          color="_accent.100"
          w="full"
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
        >
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
