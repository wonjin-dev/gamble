import {AbilityType} from '@hooks/gamble/useGamble';
import {abilitiesGenerator, randomNumberArrayGenerator, randomNumberGenerator} from '@utils/generators';

describe('[유틸] randomNumberGenerator', () => {
  it('0보다 크고, 특정 숫자 이하의 정수 값을 리턴', () => {
    for (let i = 10; i < 1000; i++) {
      const randomValue = randomNumberGenerator(i);
      expect(randomValue).toBeGreaterThanOrEqual(0);
      expect(randomValue).toBeLessThanOrEqual(i);
    }
  });
});

describe('[유틸] randomNumberArrayGenerator', () => {
  it('특정 길이의 배열을 리턴', () => {
    for (let i = 25; i < 75; i++) {
      const randomNumberArr = randomNumberArrayGenerator(i, 100);

      expect(randomNumberArr.length).toBe(i);
    }
  });
});
describe('[유틸] abilitiesGenerator', () => {
  it('능력 요소 중 무작위 3개를 포함하여 배열을 생성 ', () => {
    const abilityList = [AbilityType.BEAUTY, AbilityType.INTELLIGENCE, AbilityType.SPEED, AbilityType.STRENGTH];

    const randomAbilities = abilitiesGenerator();
    const allElementsConatin = randomAbilities.filter((randomAbility) => abilityList.includes(randomAbility));
    const overlapChecker = randomAbilities.reduce(
      (abilities: AbilityType[], el: AbilityType) => (abilities.includes(el) ? abilities : [...abilities, el]),
      []
    );

    expect(randomAbilities).toHaveLength(3);
    expect(allElementsConatin).toBeTruthy();
    expect(randomAbilities).toStrictEqual(overlapChecker);
  });
});
