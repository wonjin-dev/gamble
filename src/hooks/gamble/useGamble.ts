import {useCallback, useMemo} from 'react';
import {useRecoilState} from 'recoil';
import {abilitiesGenerator, gamble} from '@utils/generators';
import {positive1Atom} from '@store/gamble/positive1';
import {positive2Atom} from '@store/gamble/positive2';
import {negativeAtom} from '@store/gamble/negative';
import useEffectOnce from '@hooks/useEffectOnce';
import useProbability from './useProbability';

export const enum AbilityType {
  STRENGTH = '근력',
  INTELLIGENCE = '똑똑함',
  SPEED = '빠름',
  BEAUTY = '아름다움',
}

export interface GambleSectionType {
  positive1: GambleType;
  positive2: GambleType;
  negative: GambleType;
}

export type GambleSectionList = keyof GambleSectionType;

export interface GambleType {
  ability: AbilityType | undefined;
  score: boolean[];
}

export interface GambleProps {
  enchant: (section: GambleSectionList) => void;
  detail: (section: GambleSectionList) => GambleType | undefined;
  reset: () => void;
  isOver: boolean;
}

const useGamble = (abilities: AbilityType[]): GambleProps => {
  const {pbt, success, fail, reset: pbtReset} = useProbability();
  const [positive1, setPositive1] = useRecoilState(positive1Atom);
  const [positive2, setPositive2] = useRecoilState(positive2Atom);
  const [negative, setNegative] = useRecoilState(negativeAtom);

  const isOver = useMemo(
    () => positive1.score.length === 10 && positive2.score.length === 10 && negative.score.length === 10,
    [negative.score.length, positive1.score.length, positive2.score.length]
  );

  const init = () => {
    setPositive1({...positive1, ability: abilities[0]});
    setPositive2({...positive2, ability: abilities[1]});
    setNegative({...negative, ability: abilities[2]});
  };

  useEffectOnce(init);

  const detail = useMemo(
    () => (section: GambleSectionList) => {
      if (section === 'positive1') {
        return positive1;
      }
      if (section === 'positive2') {
        return positive2;
      }
      if (section === 'negative') {
        return negative;
      }
    },
    [negative, positive1, positive2]
  );

  const enchant = useCallback(
    (section: GambleSectionList) => {
      const res = gamble(pbt);
      const target = detail(section);

      const attempt = (result: boolean) => {
        if (target === positive1) {
          return setPositive1({...target, score: [...target.score, result]});
        }
        if (target === positive2) {
          return setPositive2({...target, score: [...target.score, result]});
        }
        if (target === negative) {
          return setNegative({...target, score: [...target.score, result]});
        }
      };

      if (target && target.score.length < 10) {
        if (res) {
          attempt(true);
          success();
        } else {
          attempt(false);
          fail();
        }
      }
    },
    [detail, fail, negative, pbt, positive1, positive2, setNegative, setPositive1, setPositive2, success]
  );

  const reset = () => {
    const newAbilities = abilitiesGenerator();

    setPositive1({ability: newAbilities[0], score: []});
    setPositive2({ability: newAbilities[1], score: []});
    setNegative({ability: newAbilities[2], score: []});
    pbtReset();
  };

  return {detail, enchant, reset, isOver};
};

export default useGamble;
