import styled from '@emotion/styled';
import {FC, useMemo} from 'react';
import BaseButton from '@components/BaseButton';
import {rem} from '@styles/theme';
import {AbilityType, GambleProps, GambleSectionList} from '@hooks/gamble/useGamble';
import {IMAGES} from '@constants/image';
import Score from './Score';

interface Props {
  type: GambleSectionList;
  gamble: GambleProps;
}

const GambleSection: FC<Props> = ({type, gamble}) => {
  const {pbt, detail, enchant} = gamble;
  const details = useMemo(() => detail(type), [detail, type]);

  const abilityImage = useMemo(() => {
    if (details) {
      if (details.ability === AbilityType.BEAUTY) {
        return IMAGES.BEAUTY;
      }
      if (details.ability === AbilityType.INTELLIGENCE) {
        return IMAGES.INTELLIGENCE;
      }
      if (details.ability === AbilityType.SPEED) {
        return IMAGES.SPEED;
      }
      if (details.ability === AbilityType.STRENGTH) {
        return IMAGES.STRENGTH;
      }
    }

    return undefined;
  }, [details]);

  const probability = useMemo(() => {
    if (type === 'positive1') {
      return `성공 확률: ${pbt}`;
    }
    if (type === 'negative') {
      return `실패 확률: ${pbt}`;
    }
  }, [pbt, type]);

  return (
    <Container>
      <AbilityImageWarpper>
        <AbilityImg src={abilityImage} />
      </AbilityImageWarpper>
      <Content>
        <FlexWrapper>
          <Ability>{details && details.ability}</Ability>
          {probability}
        </FlexWrapper>
        <Score scoreArr={details ? details.score : []} />
      </Content>
      <BaseButton value={'강화'} onClick={() => enchant(type)} width={50} height={32} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${rem(4)};
  outline: ${rem(1)} solid black;
  border-radius: ${rem(6)};
`;

const Content = styled.div`
  width: 100%;
  padding: 0 ${rem(8)};
`;

const AbilityImageWarpper = styled.picture`
  border-radius: 50%;
`;

const AbilityImg = styled.img`
  width: ${rem(32)};
  height: ${rem(32)};
  padding: ${rem(4)};
  object-fit: contain;
`;

const Ability = styled.p`
  font-size: ${rem(10)};
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default GambleSection;
