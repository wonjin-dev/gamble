import {FC, Fragment, useCallback} from 'react';
import styled from '@emotion/styled';
import BaseButton from '@components/BaseButton';
import {COLORS, rem} from '@styles/theme';
import useGamble, {AbilityType} from '@hooks/gamble/useGamble';
import {useModal} from '@hooks/useModal';
import ConfirmModal from '@views/@common/Modals/ConfirmModal';
import {useToast} from '@hooks/useToast';
import useTranslate from '@hooks/useTranslate';
import GambleBoard from './components/Board';
import GambleResetModalContent from './components/GambleResetModalContent';

interface Props {
  abilities: AbilityType[];
}

const GambleScreen: FC<Props> = ({abilities}) => {
  const gamble = useGamble(abilities);
  const resetModalProps = useModal();
  const {showToast} = useToast();
  const {translate} = useTranslate();

  const handleResetClick = useCallback(() => {
    gamble.reset();
    resetModalProps.hideModal();
    showToast(`${translate('INITIALIZED')}`);
  }, [gamble, resetModalProps, showToast, translate]);

  return (
    <Fragment>
      <Container>
        <GambleBoard isOver={gamble.isOver} gamble={gamble} />
        <ButtonsWrapper>
          <BaseButton
            value={translate('RETRY')}
            width={250}
            onClick={() => {
              if (gamble.isOver) {
                gamble.reset();
              } else {
                resetModalProps.showModal();
              }
            }}
          />
        </ButtonsWrapper>
      </Container>
      <ConfirmModal
        modalProps={resetModalProps}
        onConfirmClick={handleResetClick}
        content={<GambleResetModalContent />}
      />
    </Fragment>
  );
};

export default GambleScreen;

const Container = styled.div`
  height: 100vh;
  background-color: ${COLORS.WHITE};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${rem(16)};
  margin-top: ${rem(40)};
`;
