import {RecoilRoot} from 'recoil';
import {NextPage} from 'next';
import {ReactElement, ReactNode} from 'react';
import {Noto_Sans_KR} from '@next/font/google';
import GlobalStyle from '@styles/GlobalStyle';
import type {AppProps} from 'next/app';

const font = Noto_Sans_KR({weight: '500', subsets: ['latin']});

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
      <main className={font.className}>{layout(<Component {...pageProps} />)}</main>
    </RecoilRoot>
  );
};

export default App;
