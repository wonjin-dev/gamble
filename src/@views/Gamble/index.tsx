import {FC, useCallback} from 'react';
import styled from '@emotion/styled';
import BaseButton from '@components/BaseButton';
import {rem} from '@styles/theme';
import useGamble, {AbilityType} from '@hooks/gamble/useGamble';
import {useModal} from '@hooks/useModal';
import ConfirmModal from '@views/@common/Modals/ConfirmModal';
import GambleBoard from './components/Board';
import GambleResetModalContent from './components/GambleResetModalContent';

interface Props {
  abilities: AbilityType[];
}

const GambleScreen: FC<Props> = ({abilities}) => {
  const gamble = useGamble(abilities);
  const resetModalProps = useModal();

  const handleResetClick = useCallback(() => {
    gamble.reset();
    resetModalProps.hideModal();
  }, [gamble, resetModalProps]);

  return (
    <Container>
      <GambleBoard isOver={gamble.isOver} gamble={gamble} />
      <ButtonsWrapper>
        <BaseButton value={'다시 뽑기'} width={250} onClick={() => resetModalProps.showModal()} />
      </ButtonsWrapper>
      <ConfirmModal
        modalProps={resetModalProps}
        onConfirmClick={handleResetClick}
        content={<GambleResetModalContent />}
      />
    </Container>
  );
};

export default GambleScreen;

const Container = styled.div`
  max-width: ${rem(400)};
  margin: 0 auto;
  height: 100%;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${rem(16)};
  margin-top: ${rem(40)};
`;
