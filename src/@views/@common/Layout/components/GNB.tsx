import styled from '@emotion/styled';
import {FC} from 'react';
import {rem} from '@styles/theme';
import useTranslate from '@hooks/useTranslate';

const GNB: FC = () => {
  const {changeLangType} = useTranslate();

  return (
    <Container>
      <Title>GAMBLE</Title>
      <button onClick={changeLangType}>언어 변경</button>
    </Container>
  );
};

export default GNB;

const Container = styled.div`
  padding: ${rem(24)};
`;

const Title = styled.h1`
  text-align: center;
`;
