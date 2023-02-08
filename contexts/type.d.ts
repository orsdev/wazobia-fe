export type ModalType = 'video' | 'image' | 'social'

export interface IModalContextProps {
  showVideoModal: boolean,
  showImageModal: boolean,
  showSocialModal: boolean,
  closeModal: () => void,
  toggleModal: (type: ModalType) => void
}


