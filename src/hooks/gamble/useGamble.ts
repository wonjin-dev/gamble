import {useMemo, useState} from 'react';
import {randomNumberArrayGenerator} from '@utils/generators';
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

export const enum AbilityType {
  STRENGTH = '근력',
  INTELLIGENCE = '똑똑함',
  SPEED = '빠름',
  BEAUTY = '아름다움',
}

const abilityList = [AbilityType.BEAUTY, AbilityType.INTELLIGENCE, AbilityType.SPEED, AbilityType.STRENGTH];

const useGamble = () => {
  const abilityGen = randomNumberArrayGenerator(3, 4);
  const initAbility = abilityGen.map((randomNumber) => abilityList[randomNumber]);
  const [abilities] = useState<AbilityType[]>(initAbility);

  const abilityImage = useMemo(
    () => (ability?: AbilityType) => {
      if (ability === AbilityType.BEAUTY) {
        return IMAGES.BEAUTY;
      }
      if (ability === AbilityType.INTELLIGENCE) {
        return IMAGES.INTELLIGENCE;
      }
      if (ability === AbilityType.SPEED) {
        return IMAGES.SPEED;
      }
      if (ability === AbilityType.STRENGTH) {
        return IMAGES.STRENGTH;
      }
    },
    []
  );

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

        case ResultType.PROBOSCIS_MONKEY: {
          return IMAGES.PROBOSCIS_MONKEY;
        }

        case ResultType.WOLF: {
          return IMAGES.WOLF;
        }
      }
    }, [result]);

    return resultImg;
  };

  return {abilities, abilityImage, useGetResult};
};

export default useGamble;
