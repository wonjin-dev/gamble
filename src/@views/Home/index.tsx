import {FC, Fragment} from 'react';
import {useRouter} from 'next/router';
import styled from '@emotion/styled';
import BaseButton from '@views/@common/BaseButton';
import useTranslate from '@hooks/useTranslate';
import {ROUTES} from '@constants/routes';
import {useModal} from '@hooks/useModal';
import useEffectOnce from '@hooks/useEffectOnce';
import {rem} from '@styles/theme';
import OnboardingModal from './OnboardingModal';

const HomeScreen: FC = () => {
  const router = useRouter();
  const {translate} = useTranslate();
  const onboardingModalProps = useModal();

  // TODO: 온보딩 모달 뜨는 조건 추가
  useEffectOnce(() => onboardingModalProps.showModal());

  return (
    <Fragment>
      <Container>
        <Content>framer-motion을 이용한 예쁜 애니메이트 이미지</Content>
        <BaseButton value={translate('GO_TO_GAMBLE')} onClick={() => router.push(ROUTES.GAMBLE)} />
      </Container>
      <OnboardingModal modalProps={onboardingModalProps} />
    </Fragment>
  );
};

export default HomeScreen;

const Container = styled.div`
  padding: ${rem(16)};
`;

const Content = styled.main`
  margin: ${rem(40)} 0;
`;
