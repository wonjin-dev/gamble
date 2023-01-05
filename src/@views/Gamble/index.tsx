import {FC} from 'react';
import BaseButton from '@components/BaseButton';

const GambleScreen: FC = () => {
  return (
    <>
      <BaseButton value={'다시 뽑기'} onClick={() => {}} />
      <BaseButton value={'결과 공유하기'} bgColor={'orange'} onClick={() => {}} />
    </>
  );
};

export default GambleScreen;
