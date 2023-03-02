import styled from '@emotion/styled';
import {FC, Fragment} from 'react';
import {useRecoilState} from 'recoil';
import {rem} from '@styles/theme';
import useTranslate from '@hooks/useTranslate';
import {IMAGES} from '@constants/image';
import GradientShadow from '@views/@common/GradientShadow';
import {soundMuteAtom} from '@store/sound';

const GNB: FC = () => {
  const {changeLangType} = useTranslate();
  const [muteMode, setMuteMode] = useRecoilState(soundMuteAtom);

  return (
    <Fragment>
      <Container>
        <h1>GAMBLE</h1>
        <LocaleButton onClick={changeLangType}>
          <LocaleButtonImage src={IMAGES.WORLD} alt={'언어 변경 아이콘'} />
        </LocaleButton>
        <MuteButton onClick={() => setMuteMode(!muteMode)}>TEST</MuteButton>
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

const MuteButton = styled.div`
  cursor: pointer;
`;

const GradientWrapper = styled.div`
  position: sticky;
  bottom: 0;
`;
