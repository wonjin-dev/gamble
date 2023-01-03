import GlobalStyle from 'src/styles/GlobalStyle';
import type {AppProps} from 'next/app';

const App = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
