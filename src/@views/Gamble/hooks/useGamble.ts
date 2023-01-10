import {useCallback, useMemo, useState} from 'react';
import {IMAGES} from 'src/constants/image';
import {gamble} from 'src/utils/gamble';

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

  const useEnchant = () => {
    const [status, setStatus] = useState<boolean[]>([]);
    const [successProbability, setSuccessProbability] = useState<number>(75);

    const isOver = useMemo(() => status.length === 10, [status.length]);

    const enchant = useCallback(() => {
      if (!isOver) {
        const res = gamble(successProbability);
        if (res) {
          setStatus((prev) => [...prev, true]);
          if (successProbability > 25) {
            setSuccessProbability((prev) => prev - 10);
          }
        } else {
          setStatus((prev) => [...prev, false]);

          if (successProbability < 75) {
            setSuccessProbability((prev) => prev + 10);
          }
        }
      }
    }, [isOver, successProbability]);

    return {status, successProbability, enchant};
  };

  return {useGetResult, useEnchant};
};

export default useGamble;
