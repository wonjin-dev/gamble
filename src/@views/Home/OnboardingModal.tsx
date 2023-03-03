import {FC, useCallback, useState} from 'react';
import styled from '@emotion/styled';
import BaseModal from '@views/@common/Modals/BaseModal';
import {ModalProps} from '@hooks/useModal';
import {COLORS, rem} from '@styles/theme';
import {IMAGES} from '@constants/image';

const ONBOARDING_MODAL_TOTAL_STEP = 4;

const enum IndicatorButtonType {
  PREV,
  NEXT,
}

interface Props {
  modalProps: ModalProps;
}

const OnboardingModal: FC<Props> = ({modalProps}) => {
  const [step, setStep] = useState<number>(1);

  const onIndicatorClick = useCallback(
    (type: IndicatorButtonType) => {
      if (type === IndicatorButtonType.NEXT) {
        if (step < ONBOARDING_MODAL_TOTAL_STEP) {
          setStep((prev) => prev + 1);
        }
      } else {
        if (step > 1) {
          setStep((prev) => prev - 1);
        }
      }
    },
    [step]
  );

  return (
    <BaseModal modalProps={modalProps}>
      <Container>
        <IndicatorButtonWrapper onClick={() => onIndicatorClick(IndicatorButtonType.PREV)}>
          <IndicatorImg src={IMAGES.LEFT_ARROW} alt="온보딩 모달 이전 화면 이동 버튼" />
        </IndicatorButtonWrapper>
        <Content>{step}</Content>
        <IndicatorButtonWrapper onClick={() => onIndicatorClick(IndicatorButtonType.NEXT)}>
          <IndicatorImg src={IMAGES.RIGHT_ARROW} alt="온보딩 모달 다음 화면 이동 버튼 " />
        </IndicatorButtonWrapper>
      </Container>
    </BaseModal>
  );
};

export default OnboardingModal;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 70vh;
  background-color: ${COLORS.WHITE};
  border-radius: ${rem(8)};
  padding: ${rem(16)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.main`
  width: 70vw;
`;

const IndicatorButtonWrapper = styled.div`
  width: 5vw;
  cursor: pointer;
`;

const IndicatorImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
