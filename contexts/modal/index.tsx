import { useContext } from "react";
import { ModalContext } from "./modal-context";

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      "useModalContext must be used within an ModalhContextProvider"
    );
  }

  return context;
}
