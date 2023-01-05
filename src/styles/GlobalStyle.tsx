import {css, Global, SerializedStyles} from '@emotion/react';
import {BASE_FONT_SIZE, COLORS} from './theme';

const globalStyleSheet = (): SerializedStyles => css`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: ${COLORS.DARK_GREY};
    max-width: 390px;
    min-width: 320px;
    height: 100%;
    margin: 0 auto;
  }

  body {
    background-color: ${COLORS.WHITE};
    font-size: ${BASE_FONT_SIZE}px;
  }

  button {
    border: none;
    background-color: transparent;
  }
`;

const GlobalStyle = () => {
  return <Global styles={globalStyleSheet()} />;
};

export default GlobalStyle;
