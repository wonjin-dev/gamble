import {RecoilRoot} from 'recoil';
import GlobalStyle from 'src/styles/GlobalStyle';
import type {AppProps} from 'next/app';

const App = ({Component, pageProps}: AppProps) => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default App;
