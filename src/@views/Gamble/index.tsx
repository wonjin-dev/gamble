import {FC} from 'react';
import GambleSection from "@views/Gamble/components/GambleSection";
import BaseButton from '@components/BaseButton';

const GambleScreen: FC = () => {
  return (
    <>
      <>
        <GambleSection onEnchantClick={() => console.log('Gamble!')} />
        <GambleSection onEnchantClick={() => console.log('Gamble!')} />
      </>
      <BaseButton value={'다시 뽑기'} onClick={() => {}} />
      <BaseButton value={'결과 공유하기'} bgColor={'orange'} onClick={() => {}} />
    </>
  );
};

export default GambleScreen;
