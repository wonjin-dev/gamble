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
    background-color: ${COLORS.WHITE};
    font-size: ${BASE_FONT_SIZE}px;
    padding-bottom: ${rem(40)};
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
