import {FC, Fragment} from 'react';
import {useRouter} from 'next/router';
import BaseButton from '@views/@common/BaseButton';
import useTranslate from '@hooks/useTranslate';
import {ROUTES} from '@constants/routes';
import {useModal} from '@hooks/useModal';
import OnboardingModal from './OnboardingModal';

const HomeScreen: FC = () => {
  const router = useRouter();
  const {translate} = useTranslate();
  const onboardingModalProps = useModal();

  return (
    <Fragment>
      <BaseButton value={translate('GO_TO_GAMBLE')} onClick={() => router.push(ROUTES.GAMBLE)} />
      <OnboardingModal modalProps={onboardingModalProps} />
      {/* TODO: for Test */}
      {/* {onboardingModalProps.modalShowing ? <OnboardingModal modalProps={onboardingModalProps} /> : null} */}
    </Fragment>
  );
};

export default HomeScreen;
