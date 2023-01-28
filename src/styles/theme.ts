export const BASE_FONT_SIZE = 12;

export const rem = (numb: number, base?: number) => (base ? `${numb / base}rem` : `${numb / BASE_FONT_SIZE}rem`);

export const COLORS = {
  BLACK: `rgb(0,0,0)`,
  WHITE: `rgb(255,255,255)`,
  GREY: `rgb(160,160,160)`,
  DARK_GREY: `rgb(131, 135, 140)`,
  AQUA: `rgb(0,238,247)`,
  BROWN_RED: `rgb(132,40,44)`,
  RED: `rgb(205, 0, 0)`,
  GOLD_IVORY: `rgb(230,242,95)`,
  MODAL_DIM: `rgba(0,0,0,0.5)`,
};

export const Z_INDEX = {
  CONTENT_FIXED: 400,
  MODAL_DIM: 500,
  MODAL_CONTENT: 501,
  TOAST: 600,
};
