import styled from '@emotion/styled';
import {FC} from 'react';
import {rem} from '@styles/theme';

const GNB: FC = () => {
  return (
    <Container>
      <Title>GAMBLE</Title>
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
