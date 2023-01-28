export const BASE_FONT_SIZE = 12;

export const rem = (numb: number, base?: number) => (base ? `${numb / base}rem` : `${numb / BASE_FONT_SIZE}rem`);

export const COLORS = {
  BLACK: `rgb(0,0,0)`,
  WHITE: `rgb(255,255,255)`,
  GREY: `rgb(160,160,160)`,
  GAMBLE_SUCCESS: `rgb(0,238,247)`,
  GAMBLE_FAIL: `rgb(132,40,44)`,
  NEGATIVE_SECTION: `rgb(205, 0, 0)`,
  MODAL_DIM: `rgba(0,0,0,0.5)`,
  CONFIRM: `rgb(230,242,95)`,
};

export const Z_INDEX = {
  CONTENT_FIXED: 400,
  MODAL_DIM: 500,
  MODAL_CONTENT: 501,
  TOAST: 600,
};
