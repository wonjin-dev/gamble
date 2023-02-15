import {useRecoilValue} from 'recoil';
import {useMemo} from 'react';
import {positive1Atom} from '@store/gamble/positive1';
import {positive2Atom} from '@store/gamble/positive2';
import {negativeAtom} from '@store/gamble/negative';
import {IMAGES} from '@constants/image';
import {SOUNDS} from '@constants/sound';
import useSound from '@hooks/useSound';
import {StringList} from '@hooks/useTranslate';
import {AbilityType, GambleEnchantType, GamblePropertyType} from './useGamble';

type GambleResultType = 'POSITIVE' | 'NEGATIVE';
interface GambleResult {
  mainModifier: StringList;
  subModifier: StringList;
  animal: StringList;
  img: string;
}

const getGambleScore = (arr: GambleEnchantType[]): number =>
  arr.filter((scores) => scores !== GambleEnchantType.SUCCESS).length;

const getGambleResult = (ability: AbilityType | undefined, type: GambleResultType): GambleResult => {
  if (ability === AbilityType.BEAUTY) {
    if (type === 'POSITIVE') {
      return {
        mainModifier: 'BEAUTY_POSITIVE_MAIN_MODIFIER',
        subModifier: 'BEAUTY_POSITIVE_SUB_MODIFIER',
        animal: 'BEAUTY_POSITIVE_ANIMAL',
        img: IMAGES.WOLF,
      };
    } else {
      return {
        mainModifier: 'BEAUTY_NEGATIVE_MAIN_MODIFIER',
        subModifier: 'BEAUTY_NEGATIVE_SUB_MODIFIER',
        animal: 'BEAUTY_NEGATIVE_ANIMAL',
        img: IMAGES.PROBOSCIS_MONKEY,
      };
    }
  }

  if (ability === AbilityType.INTELLIGENCE) {
    if (type === 'POSITIVE') {
      return {
        mainModifier: 'INTELLIGENCE_POSITIVE_MAIN_MODIFIER',
        subModifier: 'INTELLIGENCE_POSITIVE_SUB_MODIFIER',
        animal: 'INTELLIGENCE_POSITIVE_ANIMAL',
        img: IMAGES.CHIMP,
      };
    } else {
      return {
        mainModifier: 'INTELLIGENCE_NEGATIVE_MAIN_MODIFIER',
        subModifier: 'INTELLIGENCE_NEGATIVE_SUB_MODIFIER',
        animal: 'INTELLIGENCE_NEGATIVE_ANIMAL',
        img: IMAGES.GOLDFISH,
      };
    }
  }

  if (ability === AbilityType.SPEED) {
    if (type === 'POSITIVE') {
      return {
        mainModifier: 'SPEED_POSITIVE_MAIN_MODIFIER',
        subModifier: 'SPEED_POSITIVE_SUB_MODIFIER',
        animal: 'SPEED_POSITIVE_ANIMAL',
        img: IMAGES.CHEETAH,
      };
    } else {
      return {
        mainModifier: 'SPEED_NEGATIVE_MAIN_MODIFIER',
        subModifier: 'SPEED_NEGATIVE_SUB_MODIFIER',
        animal: 'SPEED_NEGATIVE_ANIMAL',
        img: IMAGES.SLOTH,
      };
    }
  }

  if (ability === AbilityType.STRENGTH) {
    if (type === 'POSITIVE') {
      return {
        mainModifier: 'STRENGTH_POSITIVE_MAIN_MODIFIER',
        subModifier: 'STRENGTH_POSITIVE_SUB_MODIFIER',
        animal: 'STRENGTH_POSITIVE_ANIMAL',
        img: IMAGES.TIGER,
      };
    } else {
      return {
        mainModifier: 'STRENGTH_NEGATIVE_MAIN_MODIFIER',
        subModifier: 'STRENGTH_NEGATIVE_SUB_MODIFIER',
        animal: 'STRENGTH_NEGATIVE_ANIMAL',
        img: IMAGES.SNAIL,
      };
    }
  }

  return {
    mainModifier: 'NULL',
    subModifier: 'NULL',
    animal: 'NULL',
    img: '',
  };
};

const useGambleResult = () => {
  const positive1 = useRecoilValue(positive1Atom);
  const positive2 = useRecoilValue(positive2Atom);
  const negative = useRecoilValue(negativeAtom);

  const isNegativeResult: boolean = useMemo(() => getGambleScore(negative.score) >= 5, [negative.score]);
  const negativeSectionResultType: GambleResultType = isNegativeResult ? 'NEGATIVE' : 'POSITIVE';

  const sortedGamlbeArray: GamblePropertyType[] = [positive1, positive2].sort(
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

  const positiveResultSound = useSound(SOUNDS.GAMBLE_RESULT_POSITIVE);
  const negativeResultSound = useSound(SOUNDS.GAMBLE_RESULT_NEGATIVE);

  const resultSound = useMemo(() => {
    if (isNegativeResult) {
      return negativeResultSound;
    } else {
      return positiveResultSound;
    }
  }, [negativeResultSound, isNegativeResult, positiveResultSound]);

  return {
    resultSound,
    firstModifier,
    secondModifier,
    animal,
    img: getGambleResult(negative.ability, negativeSectionResultType).img,
  };
};

export default useGambleResult;
