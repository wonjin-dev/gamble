import {gamble} from '@utils/generators';

const gambleExpectation = (probability:number)=>{
  let result = [];

  for (let i = 0; i < 10000; i++) {
    if (gamble(probability)) {
      result.push(true);
    }
  }

  return result
}

describe('[gamble] 확률 검증, 오차 범위 1.5%', () => {
  it('25% 확률 검증', () => {
    const result = gambleExpectation(25)

    expect(result.length).toBeGreaterThanOrEqual(2350);
    expect(result.length).toBeLessThanOrEqual(2650);
  });

  it('35% 확률 검증', () => {
    const result = gambleExpectation(35)

    expect(result.length).toBeGreaterThanOrEqual(3350);
    expect(result.length).toBeLessThanOrEqual(3650);
  });

  it('45% 확률 검증', () => {
    const result = gambleExpectation(45)

    expect(result.length).toBeGreaterThanOrEqual(4350);
    expect(result.length).toBeLessThanOrEqual(4650);
  });

  it('55% 확률 검증', () => {
    const result = gambleExpectation(55)

    expect(result.length).toBeGreaterThanOrEqual(5350);
    expect(result.length).toBeLessThanOrEqual(5650);
  });

  it('65% 확률 검증', () => {
    const result = gambleExpectation(65)

    expect(result.length).toBeGreaterThanOrEqual(6350);
    expect(result.length).toBeLessThanOrEqual(6650);
  });

  it('75% 확률 검증', () => {
    const result = gambleExpectation(75)

    expect(result.length).toBeGreaterThanOrEqual(7350);
    expect(result.length).toBeLessThanOrEqual(7650);
  });
});
