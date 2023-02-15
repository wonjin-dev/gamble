import styled from '@emotion/styled';
import {FC, Fragment} from 'react';
import {rem} from '@styles/theme';
import useTranslate from '@hooks/useTranslate';
import {IMAGES} from '@constants/image';
import GradientShadow from '@views/@common/GradientShadow';

const GNB: FC = () => {
  const {changeLangType} = useTranslate();

  return (
    <Fragment>
      <Container>
        <h1>GAMBLE</h1>
        <LocaleButton onClick={changeLangType}>
          <LocaleButtonImage src={IMAGES.WORLD} />
        </LocaleButton>
      </Container>
      <GradientWrapper>
        <GradientShadow height={10} />
      </GradientWrapper>
    </Fragment>
  );
};

export default GNB;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${rem(8)};
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

const GradientWrapper = styled.div`
  position: sticky;
  bottom: 0;
`;
