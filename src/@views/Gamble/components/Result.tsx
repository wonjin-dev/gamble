import styled from '@emotion/styled';
import {FC, useMemo} from 'react';
import {rem} from '@styles/theme';
import {IMAGES} from '@constants/image';

export const enum ResultType {
  TIGER,
  SNAIL,
  CHIMP,
  GOLDFISH,
  SLOTH,
  CHEETAH,
  PROBOSCIS_MONKEY,
  WOLF,
}

interface Props {
  result: ResultType;
}

const Result: FC<Props> = ({result}) => {
  const resultImg = useMemo(() => {
    switch (result) {
      case ResultType.TIGER: {
        return IMAGES.TIGER;
      }

      case ResultType.SNAIL: {
        return IMAGES.SNAIL;
      }

      case ResultType.CHIMP: {
        return IMAGES.CHIMP;
      }

      case ResultType.GOLDFISH: {
        return IMAGES.GOLDFISH;
      }

      case ResultType.SLOTH: {
        return IMAGES.SLOTH;
      }

      case ResultType.CHEETAH: {
        return IMAGES.CHEETAH;
      }

      case ResultType.PROBOSCIS_MONKEY: {
        return IMAGES.PROBOSCIS_MONKEY;
      }

      case ResultType.WOLF: {
        return IMAGES.WOLF;
      }
    }
  }, [result]);

  return (
    <picture>
      <ResultImage src={resultImg} alt={'결과 동물 사진'} />
    </picture>
  );
};

export default Result;

const ResultImage = styled.img`
  width: ${rem(375)};
  max-width: 390px;
  height: 390px;
`;
