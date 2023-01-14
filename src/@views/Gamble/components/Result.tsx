import styled from '@emotion/styled';
import {FC, Fragment} from 'react';
import {rem} from '@styles/theme';
import useGambleResult from '@hooks/gamble/useGambleResult';

const Result: FC = () => {
  const result = useGambleResult();

  return (
    <Fragment>
      <h1>{result.textResult}</h1>

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
