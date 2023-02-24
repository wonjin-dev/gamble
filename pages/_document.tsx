import {Html, Head, Main, NextScript} from 'next/document';

const Document = () => {
  return (
    <Html lang="ko">
      <Head />
      <title>GAMBLE</title>
      <meta name="description" content="What was I in my previous life? Make your own animal avatar through gambling" />
      <meta name="keywords" content="gamble,mbti,도박,MBTI,양산형 MBTI" />
      <body>
        <Main />
        <div id="modal-root" />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
