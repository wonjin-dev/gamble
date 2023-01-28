import styled from '@emotion/styled';
import {MouseEventHandler, ReactNode, useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import {ModalProps} from '@hooks/useModal';
import useScrollLock from '@hooks/useScrollLock';
import {COLORS, Z_INDEX} from '@styles/theme';

interface Props {
  children: ReactNode;
  modalProps: ModalProps;
}

const BaseModal = ({children, modalProps}: Props) => {
  const [portal, setPortal] = useState<HTMLElement | null>(null);

  useScrollLock(true);
  const contentRef = useRef(null);

  useEffect(() => {
    setPortal(document.getElementById('modal-root'));
  }, []);

  if (!portal) {
    return null;
  }

  const handleDimClick: MouseEventHandler = (e) => {
    if (e.target !== contentRef.current) {
      modalProps.hideModal();
    }
  };

  return ReactDOM.createPortal(
    <Container>
      <Overlay onClick={handleDimClick} />
      <Content ref={contentRef}>{children}</Content>
    </Container>,
    portal
  );
};

export default BaseModal;

const Container = styled.section`
  width: 100vw;
  height: 100vh;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 1000vh;
  z-index: ${Z_INDEX.MODAL_DIM};
  background-color: ${COLORS.MODAL_DIM};
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: ${Z_INDEX.MODAL_CONTENT};
`;
