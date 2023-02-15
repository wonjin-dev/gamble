import styled from '@emotion/styled';
import {FC, Fragment, memo, useMemo} from 'react';
import {rem} from '@styles/theme';
import useGambleResult from '@hooks/gamble/useGambleResult';
import useTranslate from '@hooks/useTranslate';

const Result: FC = () => {
  const {translate} = useTranslate();
  const {animal, firstModifier, secondModifier, img, resultSound} = useGambleResult();
  const textResult = useMemo(
    () => `${translate(firstModifier)} ${translate(secondModifier)} ${translate(animal)}`,
    [animal, firstModifier, secondModifier, translate]
  );

  // 스피너의 시간을 의도적으로 조정했기 때문에 필요한 로직
  setTimeout(() => {
    resultSound.play();
  }, 1000);

  return (
    <Fragment>
      <Title>
        <p className="intro">{translate('RESULT_MESSAGE1')} ...</p>
        <p className="result">{textResult}</p>
      </Title>
      <picture>
        <ResultImage src={img} alt={'결과 이미지'} />
      </picture>
    </Fragment>
  );
};

export default memo(Result);

const ResultImage = styled.img`
  width: 100%;
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
