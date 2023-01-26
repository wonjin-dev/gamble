import {useRecoilValue} from 'recoil';
import {useMemo} from 'react';
import {positive1Atom} from '@store/gamble/positive1';
import {positive2Atom} from '@store/gamble/positive2';
import {negativeAtom} from '@store/gamble/negative';
import {IMAGES} from '@constants/image';
import {SOUNDS} from '@constants/sound';
import useSound from '@hooks/useSound';
import {AbilityType, GambleType} from './useGamble';

type GambleResultType = 'POSITIVE' | 'NEGATIVE';
interface GambleResult {
  mainModifier: string;
  subModifier: string;
  animal: string;
  img: string;
}

const getGambleScore = (arr: boolean[]): number => arr.filter((arrBoolean) => arrBoolean).length;

const getGambleResult = (ability: AbilityType | undefined, type: GambleResultType): GambleResult => {
  if (ability === AbilityType.BEAUTY) {
    if (type === 'POSITIVE') {
      return {
        mainModifier: '멋있고',
        subModifier: '멋있는',
        animal: '늑대',
        img: IMAGES.WOLF,
      };
    } else {
      return {
        mainModifier: '못생기고',
        subModifier: '못생긴',
        animal: '코주부원숭이',
        img: IMAGES.PROBOSCIS_MONKEY,
      };
    }
  }

  if (ability === AbilityType.INTELLIGENCE) {
    if (type === 'POSITIVE') {
      return {
        mainModifier: '똑똑하고',
        subModifier: '똑똑한',
        animal: '침팬지',
        img: IMAGES.CHIMP,
      };
    } else {
      return {
        mainModifier: '멍청하고',
        subModifier: '멍청한',
        animal: '금붕어',
        img: IMAGES.GOLDFISH,
      };
    }
  }

  if (ability === AbilityType.SPEED) {
    if (type === 'POSITIVE') {
      return {
        mainModifier: '민첩하고',
        subModifier: '민첩한',
        animal: '치타',
        img: IMAGES.CHEETAH,
      };
    } else {
      return {
        mainModifier: '게으르고',
        subModifier: '게으른',
        animal: '나무늘보',
        img: IMAGES.SLOTH,
      };
    }
  }

  if (ability === AbilityType.STRENGTH) {
    if (type === 'POSITIVE') {
      return {
        mainModifier: '힘세고',
        subModifier: '힘 쎈',
        animal: '호랑이',
        img: IMAGES.TIGER,
      };
    } else {
      return {
        mainModifier: '나약하고',
        subModifier: '나약한',
        animal: '달팽이',
        img: IMAGES.SNAIL,
      };
    }
  }

  return {
    mainModifier: '',
    subModifier: '',
    animal: '',
    img: '',
  };
};

const useGambleResult = () => {
  const positive1 = useRecoilValue(positive1Atom);
  const positive2 = useRecoilValue(positive2Atom);
  const negative = useRecoilValue(negativeAtom);

  const isNegativeResult: boolean = useMemo(() => getGambleScore(negative.score) >= 5, [negative.score]);
  const negativeSectionResultType: GambleResultType = isNegativeResult ? 'NEGATIVE' : 'POSITIVE';

  const sortedGamlbeArray: GambleType[] = [positive1, positive2].sort(
    (a, b) => getGambleScore(b.score) - getGambleScore(a.score)
  );
  const [firstAbility, secondAbility] = sortedGamlbeArray;

  const firstModifier = useMemo(() => {
    const target = firstAbility;
    const resultType: GambleResultType = getGambleScore(target.score) > 5 ? 'POSITIVE' : 'NEGATIVE';
    const result = getGambleResult(target.ability, resultType);

    return result.mainModifier;
  }, [firstAbility]);

  const secondModifier = useMemo(() => {
    const target = secondAbility;
    const resultType: GambleResultType = getGambleScore(target.score) > 5 ? 'POSITIVE' : 'NEGATIVE';
    const result = getGambleResult(target.ability, resultType);

    return result.subModifier;
  }, [secondAbility]);

  const animal = useMemo(() => {
    const result = getGambleResult(negative.ability, negativeSectionResultType);

    return result.animal;
  }, [negative.ability, negativeSectionResultType]);

  const textResult = `${firstModifier} ${secondModifier} ${animal}`;

  const positiveResultSound = useSound(SOUNDS.GAMBLE_RESULT_POSITIVE);
  const negativeResultSound = useSound(SOUNDS.GAMBLE_RESULT_NEGATIVE);

  const resultSound = useMemo(() => {
    if (isNegativeResult) {
      return negativeResultSound;
    } else {
      return positiveResultSound;
    }
  }, [negativeResultSound, isNegativeResult, positiveResultSound]);

  return {resultSound, textResult, img: getGambleResult(negative.ability, negativeSectionResultType).img};
};

export default useGambleResult;
