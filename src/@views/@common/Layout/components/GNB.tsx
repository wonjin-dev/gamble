import styled from '@emotion/styled';
import {FC} from 'react';
import {COLORS, rem} from '@styles/theme';
import useTranslate from '@hooks/useTranslate';
import {IMAGES} from '@constants/image';

const GNB: FC = () => {
  const {changeLangType} = useTranslate();

  return (
    <Container>
      <h1>GAMBLE</h1>
      <LocaleButton onClick={changeLangType}>
        <LocaleButtonImage src={IMAGES.WORLD} />
      </LocaleButton>
    </Container>
  );
};

export default GNB;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${rem(8)};
  box-shadow: 0 ${rem(10)} ${COLORS.BLACK};
  position: relative;
`;

const LocaleButton = styled.button`
  width: ${rem(22)};
  height: ${rem(22)};
  cursor: pointer;
  position: absolute;
  right: ${rem(8)};
`;

const LocaleButtonImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
