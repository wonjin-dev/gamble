import {FC, Fragment} from 'react';
import styled from '@emotion/styled';
import GambleSection from '@views/Gamble/components/Section';
import BaseButton from '@components/BaseButton';
import {rem} from '@styles/theme';

const GambleScreen: FC = () => {
  return (
    <Fragment>
      <GambleSection type={'positive1'} />
      <GambleSection type={'positive2'} />
      <GambleSection type={'negative'} />
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
    </Fragment>
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
