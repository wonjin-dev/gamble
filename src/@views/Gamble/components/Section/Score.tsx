import styled from '@emotion/styled';
import {FC} from 'react';
import {COLORS, rem} from '@styles/theme';

interface Props {
  scoreArr: boolean[];
}

const Score: FC<Props> = ({scoreArr}) => {
  return (
    <Container>
      {scoreArr.map((score: boolean, index: number) => {
        return <GambleResult key={index} success={score} />;
      })}
    </Container>
  );
};

export default Score;

const Container = styled.div`
  display: flex;
  width: ${rem(156)};
  height: ${rem(22)};
  align-items: center;
  gap: ${rem(4)};
`;

const GambleResult = styled.div<{success: boolean}>`
  width: ${rem(12)};
  height: ${rem(12)};
  border-radius: 50%;
  background-color: ${({success}) => (success ? `${COLORS.GAMBLE_SUCCESS}` : `${COLORS.GAMBLE_FAIL}`)};
`;
