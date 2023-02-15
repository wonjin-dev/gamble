import {GambleEnchantType} from '@hooks/gamble/useGamble';

export const checkGambleProceed = (scores: GambleEnchantType[]) => {
  return scores.filter((score) => score === GambleEnchantType.PENDING).length;
};
