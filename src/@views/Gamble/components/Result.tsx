import styled from '@emotion/styled';
import {FC, Fragment} from 'react';
import {rem} from '@styles/theme';
import useGambleResult from '@hooks/gamble/useGambleResult';

const Result: FC = () => {
  const result = useGambleResult();

  return (
    <Fragment>
      <Title>
        <p className="intro">당신은 전생에 ...</p>
        <p className="result">{result.textResult}</p>
      </Title>
      <picture>
        <ResultImage src={result.img} alt={'결과 이미지'} />
      </picture>
    </Fragment>
  );
};

export default Result;

const ResultImage = styled.img`
  width: ${rem(375)};
  max-width: 390px;
  height: 390px;
`;

const Title = styled.h1`
  padding: ${rem(8)};

  .intro {
    font-weight: 400;
    font-size: ${rem(14)};
  }

  .result {
    text-align: center;
  }
`;
