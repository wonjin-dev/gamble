import styled from '@emotion/styled';
import {FC} from 'react';
import {COLORS, rem} from '@styles/theme';
import useTranslate from '@hooks/useTranslate';

const GambleResetModalContent: FC = () => {
  const {translate} = useTranslate();
  return (
    <Container>
      <Title>{translate('RETRY_MESSAGE1')} ?</Title>
      <span>
        {translate('RETRY_MESSAGE2')} <AccentText>{translate('RETRY_MESSAGE3')}</AccentText>
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
  color: ${COLORS.RED};
  font-weight: bold;
  font-size: ${rem(16)};
`;
