import { FC, ReactNode } from "react";
import { ModalContextProvider } from "./modal/modal-context";

interface IAppProviderProps {
  children: ReactNode;
}

export const AppContextProvider: FC<IAppProviderProps> = ({ children }) => (
  <ModalContextProvider>{children}</ModalContextProvider>
);
