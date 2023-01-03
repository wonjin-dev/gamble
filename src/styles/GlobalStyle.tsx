import {css, Global, SerializedStyles} from '@emotion/react';

const globalStyleSheet = (): SerializedStyles => css`
  * {
    padding: 0;
    margin: 0;
  }
`;

const GlobalStyle = () => {
  return <Global styles={globalStyleSheet()} />;
};

export default GlobalStyle;
