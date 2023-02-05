import {FC, Fragment, useCallback} from 'react';
import styled from '@emotion/styled';
import BaseButton from '@components/BaseButton';
import {COLORS, rem} from '@styles/theme';
import useGamble, {AbilityType} from '@hooks/gamble/useGamble';
import {useModal} from '@hooks/useModal';
import ConfirmModal from '@views/@common/Modals/ConfirmModal';
import {useToast} from '@hooks/useToast';
import GambleBoard from './components/Board';
import GambleResetModalContent from './components/GambleResetModalContent';

interface Props {
  abilities: AbilityType[];
}

const GambleScreen: FC<Props> = ({abilities}) => {
  const gamble = useGamble(abilities);
  const resetModalProps = useModal();
  const {showToast} = useToast();

  const handleResetClick = useCallback(() => {
    gamble.reset();
    resetModalProps.hideModal();
    showToast('초기화 되었습니다');
  }, [gamble, resetModalProps, showToast]);

  return (
    <Fragment>
      <GambleBoard isOver={gamble.isOver} gamble={gamble} />
      <ButtonsWrapper>
        <BaseButton
          value={'다시 뽑기'}
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
      <ConfirmModal
        modalProps={resetModalProps}
        onConfirmClick={handleResetClick}
        content={<GambleResetModalContent />}
      />
    </Fragment>
  );
};

export default GambleScreen;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${rem(16)};
  margin-top: ${rem(40)};
`;
