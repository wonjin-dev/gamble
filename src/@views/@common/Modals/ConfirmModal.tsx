import {CSSProperties, FC, ReactNode} from 'react';
import styled from '@emotion/styled';
import {ModalProps} from '@hooks/useModal';
import {COLORS, rem} from '@styles/theme';
import useTranslate from '@hooks/useTranslate';
import BaseModal from './BaseModal';
import BaseButton from '../BaseButton';

interface ConfirmModalProps {
  modalProps: ModalProps;
  content: ReactNode;
  width?: number;
  height?: number;
  style?: CSSProperties;
  cancelButtonText?: string;
  confrimButtonText?: string;
  onCancelClick?: () => void;
  onConfirmClick: () => void;
}

/**
 *
 * 취소 / 확인 두 개의 버튼이 존재하는 확인 모달
 *
 * 기본적으로 취소 선택시 모달을 숨기며, 추가적으로 전달할 수 있다
 *
 */

const ConfirmModal: FC<ConfirmModalProps> = ({
  modalProps,
  content,
  width,
  height,
  style,
  cancelButtonText,
  confrimButtonText,
  onCancelClick,
  onConfirmClick,
}) => {
  const {translate} = useTranslate();

  if (modalProps.modalShowing) {
    return (
      <BaseModal modalProps={modalProps}>
        <Container width={width} height={height} style={style}>
          {content}
          <Bottom>
            <BaseButton
              value={cancelButtonText ? cancelButtonText : `${translate('CANCEL')}`}
              onClick={onCancelClick ? onCancelClick : () => modalProps.hideModal()}
            />
            <BaseButton
              value={confrimButtonText ? confrimButtonText : `${translate('CONFIRM')}`}
              onClick={onConfirmClick}
              bgColor={COLORS.GOLD_IVORY}
            />
          </Bottom>
        </Container>
      </BaseModal>
    );
  }

  return null;
};

export default ConfirmModal;

const Container = styled.div<{width?: number; height?: number; style?: CSSProperties}>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${COLORS.WHITE};
  border-radius: ${rem(8)};
  width: 40%;
  height: 24%;
  padding-bottom: ${rem(30)};
`;

const Bottom = styled.div`
  display: flex;
  gap: ${rem(12)};
  width: calc(100% - ${rem(24)});
  position: fixed;
  padding: ${rem(12)};
  bottom: 0;
  height: ${rem(30)};
`;
