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
      <ProgressionWrapper isFinish={scoreArr.length === 10}>
        <span>진행 상황: {scoreArr.length}/10</span>
      </ProgressionWrapper>
    </Container>
  );
};

export default Score;

const Container = styled.div`
  position: relative;
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
  background-color: ${({success}) => (success ? `${COLORS.AQUA}` : `${COLORS.BROWN_RED}`)};
`;

const ProgressionWrapper = styled.div<{isFinish: boolean}>`
  @media (max-width: 475px) {
    display: none;
  }

  @media (min-width: 475px) {
    position: absolute;
    width: ${rem(90)};
    right: ${rem(-165)};
    bottom: 0;
  }

  span {
    font-weight: 700;
    color: ${({isFinish}) => isFinish && COLORS.RED};
  }
`;
