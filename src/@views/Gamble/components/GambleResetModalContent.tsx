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
        {translate('RETRY_MESSAGE2')}
        <pre>
          <AccentText>{translate('RETRY_MESSAGE3')}</AccentText>
        </pre>
      </span>
    </Container>
  );
};

export default GambleResetModalContent;

const Container = styled.div`
  display: inline-block;
  align-items: center;
  padding: ${rem(16)};

  span {
    text-align: center;
  }
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
