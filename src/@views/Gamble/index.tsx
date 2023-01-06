import {FC} from 'react';
import styled from '@emotion/styled';
import Result from '@views/Gamble/components/Result';
import GambleSection from '@views/Gamble/components/GambleSection';
import BaseButton from '@components/BaseButton';
import {rem} from '@styles/theme';
import {ResultType} from './hooks/useGamble';

const GambleScreen: FC = () => {
  return (
    <>
      <Result result={ResultType.CHEETAH} />
      <>
        <GambleSection onEnchantClick={() => console.log('Gamble!')} />
        <GambleSection onEnchantClick={() => console.log('Gamble!')} />
      </>
      <ButtonsWrapper>
        <BaseButton
          value={'다시 뽑기'}
          onClick={() => {
            // TODO
          }}
        />
        {/* TODO: 결과가 있을때만 버튼 노출 */}
        <BaseButton
          value={'결과 공유하기'}
          bgColor={'orange'}
          onClick={() => {
            // TODO
          }}
        />
      </ButtonsWrapper>
    </>
  );
};

export default GambleScreen;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${rem(12)};
  padding: ${rem(16)};
`;
