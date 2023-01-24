import {gamble} from '@utils/generators';

describe('[gamble] 확률 검증', () => {
  it('25% 확률 검증, 오차 범위 1.5%', () => {
    const probability = 25;
    const resultArr = [];

    for (let i = 0; i < 10000; i++) {
      if (gamble(probability)) {
        resultArr.push(true);
      }
    }

    expect(resultArr.length).toBeGreaterThanOrEqual(2350);
    expect(resultArr.length).toBeLessThanOrEqual(2650);
  });

  it('35% 확률 검증, 오차 범위 1.5%', () => {
    const probability = 35;
    const resultArr = [];

    for (let i = 0; i < 10000; i++) {
      if (gamble(probability)) {
        resultArr.push(true);
      }
    }

    expect(resultArr.length).toBeGreaterThanOrEqual(3350);
    expect(resultArr.length).toBeLessThanOrEqual(3650);
  });

  it('45% 확률 검증, 오차 범위 1.5%', () => {
    const probability = 45;
    const resultArr = [];

    for (let i = 0; i < 10000; i++) {
      if (gamble(probability)) {
        resultArr.push(true);
      }
    }

    expect(resultArr.length).toBeGreaterThanOrEqual(4350);
    expect(resultArr.length).toBeLessThanOrEqual(4650);
  });

  it('55% 확률 검증, 오차 범위 1.5%', () => {
    const probability = 55;
    const resultArr = [];

    for (let i = 0; i < 10000; i++) {
      if (gamble(probability)) {
        resultArr.push(true);
      }
    }

    expect(resultArr.length).toBeGreaterThanOrEqual(5350);
    expect(resultArr.length).toBeLessThanOrEqual(5650);
  });

  it('65% 확률 검증, 오차 범위 1.5%', () => {
    const probability = 65;
    const resultArr = [];

    for (let i = 0; i < 10000; i++) {
      if (gamble(probability)) {
        resultArr.push(true);
      }
    }

    expect(resultArr.length).toBeGreaterThanOrEqual(6350);
    expect(resultArr.length).toBeLessThanOrEqual(6650);
  });

  it('75% 확률 검증, 오차 범위 1.5%', () => {
    const probability = 75;
    const resultArr = [];

    for (let i = 0; i < 10000; i++) {
      if (gamble(probability)) {
        resultArr.push(true);
      }
    }

    expect(resultArr.length).toBeGreaterThanOrEqual(7350);
    expect(resultArr.length).toBeLessThanOrEqual(7650);
  });
});
