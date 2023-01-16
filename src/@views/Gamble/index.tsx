import {FC, Fragment} from 'react';
import styled from '@emotion/styled';
import BaseButton from '@components/BaseButton';
import {rem} from '@styles/theme';
import useGamble, {AbilityType} from '@hooks/gamble/useGamble';
import GambleBoard from './components/Board';

interface Props {
  abilities: AbilityType[];
}

const GambleScreen: FC<Props> = ({abilities}) => {
  const gamble = useGamble(abilities);

  return (
    <Fragment>
      <GambleBoard isOver={gamble.isOver} gamble={gamble} />

      <ButtonsWrapper>
        <BaseButton value={'다시 뽑기'} onClick={gamble.reset} />
      </ButtonsWrapper>
    </Fragment>
  );
};

export default GambleScreen;

const ButtonsWrapper = styled.div`
  padding: ${rem(16)};
`;
