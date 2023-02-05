import {css, Global, SerializedStyles} from '@emotion/react';
import {BASE_FONT_SIZE, COLORS, rem} from './theme';

const globalStyleSheet = (): SerializedStyles => css`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: ${COLORS.DARK_GREY};
  }

  body {
    max-width: ${rem(400)};
    margin: 0 auto;
    height: 100vh;
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
