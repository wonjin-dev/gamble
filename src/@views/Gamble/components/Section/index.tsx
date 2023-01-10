import styled from '@emotion/styled';
import {FC} from 'react';
import BaseButton from '@components/BaseButton';
import {rem} from '@styles/theme';
import Score from '@views/Gamble/components/Section/Score';
import {IMAGES} from '@constants/image';
import useGamble, {AbilityType} from '../../hooks/useGamble';

const GambleSection: FC = ({}) => {
  const {useEnchant} = useGamble();
  const {score, enchant} = useEnchant();

  return (
    <Container>
      <AbilityImg src={IMAGES.SPEED} />
      <Content>
        <Ability>{AbilityType.BEAUTY}</Ability>
        <Score scoreArr={score} />
      </Content>
      <BaseButton value={'강화'} onClick={() => enchant()} width={50} height={32} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${rem(4)};
`;

const Content = styled.div`
  width: 100%;
  padding: 0 ${rem(8)};
`;

const AbilityImg = styled.img`
  width: ${rem(32)};
  height: ${rem(32)};
`;

const Ability = styled.div`
  font-size: ${rem(10)};
`;

export default GambleSection;
