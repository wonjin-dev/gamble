import styled from '@emotion/styled';
import {FC} from 'react';
import {rem} from '@styles/theme';
import useGamble, {ResultType} from '@hooks/gamble/useGamble';

interface Props {
  result: ResultType;
}

const Result: FC<Props> = ({result}) => {
  const {useGetResult} = useGamble();
  const resultImg = useGetResult(result);

  return (
    <picture>
      <ResultImage src={resultImg} alt={'결과 동물 사진'} />
    </picture>
  );
};

export default Result;

const ResultImage = styled.img`
  width: ${rem(375)};
  max-width: 390px;
  height: 390px;
`;
