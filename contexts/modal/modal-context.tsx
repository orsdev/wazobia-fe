import { useState, createContext, ReactNode, useMemo } from "react";
import { IModalContextProps, ModalType } from "../type";

export const ModalContext = createContext<IModalContextProps>({
  showVideoModal: false,
  showImageModal: false,
  showSocialModal: false,
  closeModal: () => undefined,
  toggleModal: (type) => undefined,
});

interface IModalProviderProps {
  children: ReactNode;
}

export function ModalContextProvider({ children }: IModalProviderProps) {
  const [showImageModal, setShowImageModal] = useState(false);
  const [showSocialModal, setShowSocialModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const memoValue = useMemo(() => {
    const toggleModal = (value: ModalType) => {
      switch (value) {
        case "image":
          setShowImageModal((state) => !state);
          break;
        case "video":
          setShowVideoModal((state) => !state);
          break;
        case "social":
          setShowSocialModal((state) => !state);
          break;
        default:
          setShowImageModal(false);
          setShowVideoModal(false);
          setShowSocialModal(false);
          break;
      }
    };

    const closeModal = () => {
      setShowImageModal(false);
      setShowVideoModal(false);
      setShowSocialModal(false);
    };

    return {
      showImageModal,
      showVideoModal,
      showSocialModal,
      closeModal,
      toggleModal,
    };
  }, [showImageModal, showSocialModal, showVideoModal]);

  return (
    <ModalContext.Provider value={memoValue}>{children}</ModalContext.Provider>
  );
}
