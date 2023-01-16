import {FC} from 'react';
import styled from '@emotion/styled';
import {GambleProps} from '@hooks/gamble/useGamble';
import {rem} from '@styles/theme';
import Result from './Result';
import GambleSection from './Section';

interface Props {
  isOver: boolean;
  gamble: GambleProps;
}

const GambleBoard: FC<Props> = ({isOver, gamble}) => {
  if (isOver) {
    return <Result />;
  }

  return (
    <Container>
      <GambleSection type={'positive1'} gamble={gamble} />
      <GambleSection type={'positive2'} gamble={gamble} />
      <GambleSection type={'negative'} gamble={gamble} />
    </Container>
  );
};

export default GambleBoard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(12)};
  padding: ${rem(8)};
`;
