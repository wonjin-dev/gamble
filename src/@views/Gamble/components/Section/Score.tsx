import styled from '@emotion/styled';
import {FC} from 'react';
import {COLORS, rem} from '@styles/theme';
import {GambleEnchantType} from '@hooks/gamble/useGamble';

interface Props {
  scoreArr: GambleEnchantType[];
}

const Score: FC<Props> = ({scoreArr}) => {
  return (
    <Container>
      {scoreArr.map((score: GambleEnchantType, index: number) => {
        return <GambleResult key={index} status={score} />;
      })}
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

const GambleResult = styled.div<{status: GambleEnchantType}>`
  width: ${rem(12)};
  height: ${rem(12)};
  border-radius: 50%;
  box-shadow: ${({status}) => status === GambleEnchantType.PENDING && `0 0 ${rem(1)} 0 ${COLORS.BLACK}`};
  background-color: ${({status}) => status === GambleEnchantType.SUCCESS && COLORS.AQUA};
  background-color: ${({status}) => status === GambleEnchantType.FAIL && COLORS.GREY};
`;
