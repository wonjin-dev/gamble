export const BASE_FONT_SIZE = 12;

export const rem = (numb: number, base?: number) => (base ? `${numb / base}rem` : `${numb / BASE_FONT_SIZE}rem`);

export const COLORS = {
  BLACK: `rgb(0,0,0)`,
  WHITE: `rgb(255,255,255)`,
  GREY: `rgb(160,160,160)`,
  DARK_GREY: `rgb(131, 135, 140)`,
  GAMBLE_SUCCESS: `rgb(0,238,247)`,
  GAMBLE_FAIL: `rgb(132,40,44)`,
};
