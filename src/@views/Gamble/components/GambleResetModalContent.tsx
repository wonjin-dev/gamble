import styled from '@emotion/styled';
import {FC} from 'react';
import {COLORS, rem} from '@styles/theme';

const GambleResetModalContent: FC = () => {
  return (
    <Container>
      <Title>정말로 다시 뽑으시겠습니까 ?</Title>
      <span>
        현재까지 기록된 결과는 <AccentText>저장되지 않습니다</AccentText>.
      </span>
    </Container>
  );
};

export default GambleResetModalContent;

const Container = styled.div`
  padding: ${rem(16)};
`;

const Title = styled.h1`
  text-align: center;
  font-size: ${rem(18)};
`;

const AccentText = styled.span`
  color: ${COLORS.NEGATIVE_SECTION};
  font-weight: bold;
  font-size: ${rem(16)};
`;
