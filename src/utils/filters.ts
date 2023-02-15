import {GambleEnchantType} from '@hooks/gamble/useGamble';

export const checkGambleChance = (scores: GambleEnchantType[]) => {
  return scores.filter((score) => score === GambleEnchantType.PENDING).length;
};
