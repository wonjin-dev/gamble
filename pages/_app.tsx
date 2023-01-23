import {RecoilRoot} from 'recoil';
import {NextPage} from 'next';
import {ReactElement, ReactNode} from 'react';
import GlobalStyle from 'src/styles/GlobalStyle';
import type {AppProps} from 'next/app';

export type NextLayoutPage<PageProps = {}> = NextPage<PageProps> & {
  layout?: (page: ReactElement) => ReactNode;
};

type NextPageProps = AppProps & {
  Component: NextLayoutPage;
};

const App = ({Component, pageProps}: NextPageProps) => {
  const layout = Component.layout || ((page) => page);

  return (
    <RecoilRoot>
      <GlobalStyle />
      {layout(<Component {...pageProps} />)}
    </RecoilRoot>
  );
};

export default App;
