import {useRecoilValue} from 'recoil';
import {useMemo} from 'react';
import {positive1Atom} from '@store/gamble/positive1';
import {positive2Atom} from '@store/gamble/positive2';
import {negativeAtom} from '@store/gamble/negative';
import {IMAGES} from '@constants/image';
import {AbilityType} from './useGamble';

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

const getScore = (arr: boolean[]) => arr.filter((arrBoolean) => arrBoolean === true).length;

const getPositiveAnimalResult = (positiveAbility?: AbilityType) => {
  if (positiveAbility === AbilityType.BEAUTY) {
    return {
      name: '늑대',
      img: IMAGES.WOLF,
    };
  }

  if (positiveAbility === AbilityType.INTELLIGENCE) {
    return {
      name: '침팬지',
      img: IMAGES.CHIMP,
    };
  }

  if (positiveAbility === AbilityType.SPEED) {
    return {
      name: '치타',
      img: IMAGES.CHEETAH,
    };
  }

  if (positiveAbility === AbilityType.STRENGTH) {
    return {
      name: '호랑이',
      img: IMAGES.TIGER,
    };
  }
};

const getNegativeAnimalResult = (negativeAbility?: AbilityType) => {
  if (negativeAbility === AbilityType.BEAUTY) {
    return {
      name: '코주부 원숭이',
      img: IMAGES.PROBOSCIS_MONKEY,
    };
  }

  if (negativeAbility === AbilityType.INTELLIGENCE) {
    return {
      name: '금붕어',
      img: IMAGES.GOLDFISH,
    };
  }

  if (negativeAbility === AbilityType.SPEED) {
    return {
      name: '나무늘보',
      img: IMAGES.SLOTH,
    };
  }

  if (negativeAbility === AbilityType.STRENGTH) {
    return {
      name: '달팽이',
      img: IMAGES.SNAIL,
    };
  }
};

const getModifier = (ability?: AbilityType) => {
  if (ability === AbilityType.BEAUTY) {
    return {main_positive: '멋있고', sub_positive: '멋있는', main_negative: '못생기고', sub_negative: '못생긴'};
  }
  if (ability === AbilityType.INTELLIGENCE) {
    return {main_positive: '똑똑하고', sub_positive: '똑똑한', main_negative: '멍청하고', sub_negative: '멍청한'};
  }
  if (ability === AbilityType.SPEED) {
    return {main_positive: '날쌔고', sub_positive: '날쌘', main_negative: '느리고', sub_negative: '느린'};
  }
  if (ability === AbilityType.STRENGTH) {
    return {main_positive: '강하고', sub_positive: '강한', main_negative: '약하고', sub_negative: '약한'};
  }
};

const useGambleResult = () => {
  const postive1 = useRecoilValue(positive1Atom);
  const postive2 = useRecoilValue(positive2Atom);
  const negative = useRecoilValue(negativeAtom);
  const negativeScore = getScore(negative.score);
  const sortArr = [postive1, postive2].sort((a, b) => getScore(b.score) - getScore(a.score));

  const firstModifier = useMemo(() => {
    const target = sortArr[0];
    const score = getScore(target.score);
    const template = getModifier(target.ability);

    if (template) {
      if (score > 5) {
        return template.main_positive;
      } else {
        return template.main_negative;
      }
    }
  }, [sortArr]);

  const secondModifier = useMemo(() => {
    const target = sortArr[1];
    const score = getScore(target.score);
    const template = getModifier(target.ability);

    if (template) {
      if (score > 5) {
        return template.sub_positive;
      } else {
        return template.sub_negative;
      }
    }
  }, [sortArr]);

  const animal = useMemo(() => {
    if (negativeScore >= 5) {
      return getNegativeAnimalResult(negative.ability);
    } else {
      return getPositiveAnimalResult(negative.ability);
    }
  }, [negative.ability, negativeScore]);

  const textResult = `${firstModifier} ${secondModifier} ${animal?.name}`;

  return {textResult, img: animal?.img};
};

export default useGambleResult;
