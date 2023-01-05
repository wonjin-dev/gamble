import {BASE_FONT_SIZE, rem} from '@styles/theme';

describe('rem 테스트', () => {
  const testSize = 200;

  it('rem 단위로 변경', () => {
    const result = rem(testSize);

    expect(result).toMatch('rem');
  });

  it('올바르게 변환한다', () => {
    const originExpected = `${testSize / BASE_FONT_SIZE}rem`;
    const TEST_BASE_FONT_SIZE = 14;
    const changedRem = `${testSize / TEST_BASE_FONT_SIZE}rem`;

    expect(originExpected).toBe(rem(testSize));
    expect(changedRem).toBe(rem(testSize, TEST_BASE_FONT_SIZE));
  });
});
