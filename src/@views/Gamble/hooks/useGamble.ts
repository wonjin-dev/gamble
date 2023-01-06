import {useMemo} from 'react';
import {IMAGES} from 'src/constants/image';

export const enum ResultType {
  TIGER,
  SNAIL,
  CHIMP,
  GOLDFISH,
  SLOTH,
  CHEETAH,
  PROBOSIC_MONKEY,
  WOLF,
}

const useGamble = () => {
  const useGetResult = (result: ResultType) => {
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

        case ResultType.PROBOSIC_MONKEY: {
          return IMAGES.PROBOSIC_MONKEY;
        }

        case ResultType.WOLF: {
          return IMAGES.WOLF;
        }
      }
    }, [result]);

    return resultImg;
  };

  return {useGetResult};
};

export default useGamble;
