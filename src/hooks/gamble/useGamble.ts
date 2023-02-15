import {useCallback, useMemo} from 'react';
import {useRecoilState} from 'recoil';
import {abilitiesGenerator, gamble} from '@utils/generators';
import {positive1Atom} from '@store/gamble/positive1';
import {positive2Atom} from '@store/gamble/positive2';
import {negativeAtom} from '@store/gamble/negative';
import useEffectOnce from '@hooks/useEffectOnce';
import {probabilityAtom} from '@store/gamble/probability';
import useSound from '@hooks/useSound';
import {SOUNDS} from '@constants/sound';

export const enum AbilityType {
  STRENGTH = 'STRENGTH',
  INTELLIGENCE = 'INTELLIGENCE',
  SPEED = 'SPEED',
  BEAUTY = 'BEAUTY',
}

export interface GambleSectionType {
  positive1: GamblePropertyType;
  positive2: GamblePropertyType;
  negative: GamblePropertyType;
}

export type GambleSectionList = keyof GambleSectionType;

export const enum GambleEnchantType {
  SUCCESS,
  FAIL,
  PENDING,
}

export interface GamblePropertyType {
  ability: AbilityType | undefined;
  score: GambleEnchantType[];
}

export interface GambleProps {
  probability: number;
  isOver: boolean;
  detail: (section: GambleSectionList) => GamblePropertyType | undefined;
  enchant: (section: GambleSectionList) => void;
  reset: () => void;
}

const useGamble = (abilities: AbilityType[]): GambleProps => {
  const [probability, setProbability] = useRecoilState(probabilityAtom);
  const [positive1, setPositive1] = useRecoilState(positive1Atom);
  const [positive2, setPositive2] = useRecoilState(positive2Atom);
  const [negative, setNegative] = useRecoilState(negativeAtom);
  const {play: successSound} = useSound(SOUNDS.SUCCESS);
  const {play: failSound} = useSound(SOUNDS.FAIL);
  const checkGambleProceed = (scores: GambleEnchantType[]) => {
    return scores.filter((score) => score === GambleEnchantType.PENDING).length;
  };
  const isOver = useMemo(
    () =>
      checkGambleProceed(positive1.score) === 0 &&
      checkGambleProceed(positive2.score) === 0 &&
      checkGambleProceed(negative.score) === 0,
    [negative.score, positive1.score, positive2.score]
  );

  const GAMBLE_SCORE_INIT_DATA = [
    GambleEnchantType.PENDING,
    GambleEnchantType.PENDING,
    GambleEnchantType.PENDING,
    GambleEnchantType.PENDING,
    GambleEnchantType.PENDING,
    GambleEnchantType.PENDING,
    GambleEnchantType.PENDING,
    GambleEnchantType.PENDING,
    GambleEnchantType.PENDING,
    GambleEnchantType.PENDING,
  ];

  const init = () => {
    setPositive1({score: GAMBLE_SCORE_INIT_DATA, ability: abilities[0]});
    setPositive2({score: GAMBLE_SCORE_INIT_DATA, ability: abilities[1]});
    setNegative({score: GAMBLE_SCORE_INIT_DATA, ability: abilities[2]});
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
      const res = gamble(probability);
      const target = detail(section);

      const attempt = (result: GambleEnchantType) => {
        if (target === positive1) {
          return setPositive1({...target, score: [result, ...target.score].slice(0, 10)});
        }
        if (target === positive2) {
          return setPositive2({...target, score: [result, ...target.score].slice(0, 10)});
        }
        if (target === negative) {
          return setNegative({...target, score: [result, ...target.score].slice(0, 10)});
        }
      };

      const success = () => {
        if (probability > 25) {
          setProbability((prev) => prev - 10);
          attempt(GambleEnchantType.SUCCESS);
          successSound();
        }
      };

      const fail = () => {
        if (probability < 75) {
          setProbability((prev) => prev + 10);
          attempt(GambleEnchantType.FAIL);
          failSound();
        }
      };

      if (target && checkGambleProceed(target.score) <= 10 && checkGambleProceed(target.score) > 0) {
        if (res) {
          success();
        } else {
          fail();
        }
      }
    },
    [
      probability,
      detail,
      positive1,
      positive2,
      negative,
      setPositive1,
      setPositive2,
      setNegative,
      setProbability,
      successSound,
      failSound,
    ]
  );

  const reset = () => {
    const newAbilities = abilitiesGenerator();

    setPositive1({ability: newAbilities[0], score: GAMBLE_SCORE_INIT_DATA});
    setPositive2({ability: newAbilities[1], score: GAMBLE_SCORE_INIT_DATA});
    setNegative({ability: newAbilities[2], score: GAMBLE_SCORE_INIT_DATA});
    setProbability(75);
  };

  return {probability: probability, detail, enchant, reset, isOver};
};

export default useGamble;
