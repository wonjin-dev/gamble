import {useCallback, useMemo} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {abilitiesGenerator, gamble} from '@utils/generators';
import {positive1Atom} from '@store/gamble/positive1';
import {positive2Atom} from '@store/gamble/positive2';
import {negativeAtom} from '@store/gamble/negative';
import useEffectOnce from '@hooks/useEffectOnce';
import {probabilityAtom} from '@store/gamble/probability';
import useSound from '@hooks/useSound';
import {SOUNDS} from '@constants/sound';
import {checkGambleChance} from '@utils/filters';
import {soundMuteAtom} from '@store/sound';

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
  const muteMode = useRecoilValue(soundMuteAtom);
  const {play: successSound} = useSound(SOUNDS.SUCCESS);
  const {play: failSound} = useSound(SOUNDS.FAIL);

  const isOver = useMemo(
    () =>
      checkGambleChance(positive1.score) === 0 &&
      checkGambleChance(positive2.score) === 0 &&
      checkGambleChance(negative.score) === 0,
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
        const exist = (target && target.score.filter((score) => score !== GambleEnchantType.PENDING)) || [];
        const fillPending = (target && target.score.filter((score) => score === GambleEnchantType.PENDING)) || [];

        if (target === positive1) {
          return setPositive1({...target, score: [...exist, result, ...fillPending].slice(0, 10)});
        }
        if (target === positive2) {
          return setPositive2({...target, score: [...exist, result, ...fillPending].slice(0, 10)});
        }
        if (target === negative) {
          return setNegative({...target, score: [...exist, result, ...fillPending].slice(0, 10)});
        }
      };

      const success = () => {
        if (probability > 25) {
          setProbability((prev) => prev - 10);
          attempt(GambleEnchantType.SUCCESS);
          if (!muteMode) {
            successSound();
          }
        }
      };

      const fail = () => {
        if (probability < 75) {
          setProbability((prev) => prev + 10);
          attempt(GambleEnchantType.FAIL);
          if (!muteMode) {
            failSound();
          }
        }
      };

      if (target && checkGambleChance(target.score) <= 10 && checkGambleChance(target.score) > 0) {
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
      muteMode,
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
