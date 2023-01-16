import {AbilityType} from '@hooks/gamble/useGamble';

export const randomNumberGenerator = (numberRange: number) => Math.floor(Math.random() * numberRange);

export const randomNumberArrayGenerator = (length: number, randomNumberRange: number) => {
  const pbtArr: number[] = [];

  for (let i = 0; i < length; i++) {
    const randomNumber = randomNumberGenerator(randomNumberRange);

    if (pbtArr.includes(randomNumber)) {
      i--;
    } else {
      pbtArr.push(randomNumber);
    }
  }

  return pbtArr;
};

export const gamble = (probability: number): boolean => {
  const target = randomNumberGenerator(100);

  const randomNumberArr = randomNumberArrayGenerator(probability, 100);

  return randomNumberArr.includes(target);
};

export const abilitiesGenerator = () => {
  const abilityList = [AbilityType.BEAUTY, AbilityType.INTELLIGENCE, AbilityType.SPEED, AbilityType.STRENGTH];
  const abilityGen = randomNumberArrayGenerator(3, 4);
  const abilities = abilityGen.map((randomNumber) => abilityList[randomNumber]);

  return abilities;
};
