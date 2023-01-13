import {useCallback, useEffect, useMemo} from 'react';
import {useRecoilState} from 'recoil';
import {negativeAtom} from '@store/gamble/negative';
import {positive1Atom} from '@store/gamble/positive1';
import {positive2Atom} from '@store/gamble/positive2';
import useProbability from '@hooks/gamble/useProbability';
import {gamble} from 'src/utils/generators';
import useGamble, {AbilityType} from '@hooks/gamble/useGamble';

export interface GambleSectionType {
  positive1: GambleType;
  positive2: GambleType;
  negative: GambleType;
}

export type GambleSectionList = keyof GambleSectionType;

export interface GambleType {
  ability: AbilityType | undefined;
  score: boolean[];
  isOver: boolean;
}

export const useEnchant = () => {
  const {abilities} = useGamble();
  const {pbt, success, fail} = useProbability();
  const [positive1, setPositive1] = useRecoilState(positive1Atom);
  const [positive2, setPositive2] = useRecoilState(positive2Atom);
  const [negative, setNeagtive] = useRecoilState(negativeAtom);

  useEffect(() => {
    setPositive1({...positive1, ability: abilities[0]});
    setPositive2({...positive2, ability: abilities[1]});
    setNeagtive({...negative, ability: abilities[2]});
    // TODO
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [abilities]);

  const gambleDetail = useMemo(
    () => (type: GambleSectionList) => {
      if (type === 'negative') {
        return negative;
      }
      if (type === 'positive1') {
        return positive1;
      }
      if (type === 'positive2') {
        return positive2;
      }
    },
    [negative, positive1, positive2]
  );

  const enchant = useCallback(
    (section: GambleSectionList) => {
      const res = gamble(pbt);

      if (section === 'positive1') {
        if (positive1.score.length < 10) {
          if (res) {
            setPositive1({...positive1, score: [...positive1.score, true]});
            success();
          } else {
            setPositive1({...positive1, score: [...positive1.score, false]});
            fail();
          }
        }
      }

      if (section === 'positive2') {
        if (positive2.score.length < 10) {
          if (res) {
            setPositive2({...positive2, score: [...positive2.score, true]});
            success();
          } else {
            setPositive2({...positive2, score: [...positive2.score, false]});
            fail();
          }
        }
      }

      if (section === 'negative') {
        if (negative.score.length < 10) {
          if (res) {
            setNeagtive({...negative, score: [...negative.score, true]});
            success();
          } else {
            setNeagtive({...negative, score: [...negative.score, false]});
            fail();
          }
        }
      }
    },
    [fail, negative, pbt, positive1, positive2, setNeagtive, setPositive1, setPositive2, success]
  );

  return {gambleDetail, enchant};
};
