import {useCallback, useState} from 'react';

export interface ModalProps {
  modalShowing: boolean;
  showModal(): void;
  hideModal(): void;
}

export const useModal = (): ModalProps => {
  const [modalShowing, setIsShowing] = useState(false);

  const showModal = useCallback(() => {
    if (!modalShowing) {
      setIsShowing(true);
    }
  }, [modalShowing]);

  const hideModal = useCallback(() => {
    if (modalShowing) {
      setIsShowing(false);
    }
  }, [modalShowing]);

  const modalProps = {modalShowing, showModal, hideModal};

  return modalProps;
};
