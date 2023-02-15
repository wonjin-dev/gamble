import styled from '@emotion/styled';
import {FC} from 'react';
import {COLORS, rem} from '@styles/theme';
import useTranslate from '@hooks/useTranslate';
import {GambleEnchantType} from '@hooks/gamble/useGamble';
import {checkGambleChance} from '@utils/filters';

interface Props {
  scoreArr: GambleEnchantType[];
}

const Score: FC<Props> = ({scoreArr}) => {
  const {translate} = useTranslate();
  const progress = 10 - checkGambleChance(scoreArr);

  return (
    <Container>
      {scoreArr.map((score: GambleEnchantType, index: number) => {
        return <GambleResult key={index} status={score} />;
      })}
      <ProgressionWrapper isFinish={progress === 10}>
        <span>
          {translate('PROGRESSION')}: {progress}/10
        </span>
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

const GambleResult = styled.div<{status: GambleEnchantType}>`
  width: ${rem(12)};
  height: ${rem(12)};
  border-radius: 50%;
  border: ${({status}) => status === GambleEnchantType.PENDING && `${rem(1)} solid ${COLORS.GREY}`};
  background-color: ${({status}) => status === GambleEnchantType.SUCCESS && COLORS.AQUA};
  background-color: ${({status}) => status === GambleEnchantType.FAIL && COLORS.GREY};
`;

const ProgressionWrapper = styled.div<{isFinish: boolean}>`
  @media (max-width: 510px) {
    display: none;
  }

  @media (min-width: 511px) {
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
