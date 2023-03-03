import {FC} from 'react';
import {useRouter} from 'next/router';
import BaseButton from '@views/@common/BaseButton';
import useTranslate from '@hooks/useTranslate';
import {ROUTES} from '@constants/routes';

const HomeScreen: FC = () => {
  const {translate} = useTranslate();
  const router = useRouter();

  return (
    <>
      <BaseButton value={translate('GO_TO_GAMBLE')} onClick={() => router.push(ROUTES.GAMBLE)} />
    </>
  );
};

export default HomeScreen;
