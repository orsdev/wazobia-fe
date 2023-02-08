import { Button as ChakraButton, SystemStyleObject } from "@chakra-ui/react";
import { FC, MouseEvent } from "react";

interface IButton {
  title: string;
  type?: "button" | "submit" | "reset";
  style?: SystemStyleObject | undefined;
  isLoading?: boolean;
  onClick?(event: MouseEvent<HTMLButtonElement>): void;
}

export const Button: FC<IButton> = ({
  title,
  onClick,
  type = "button",
  isLoading = false,
  style = {},
}) => {
  return (
    <ChakraButton
      aria-label={title}
      type={type}
      fontSize="14px"
      fontWeight={600}
      color={type === "submit" ? "white" : "black"}
      h="37px"
      w="78px"
      borderRadius="4px"
      bg={type === "submit" ? "_primary.100" : "white"}
      _hover={{
        opacity: 0.9,
      }}
      border="1px solid"
      borderColor="#CEE3D4"
      isLoading={isLoading}
      py="8px"
      sx={style}
      onClick={onClick}
    >
      {title}
    </ChakraButton>
  );
};
