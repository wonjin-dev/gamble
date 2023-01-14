import styled from '@emotion/styled';
import {FC, useMemo} from 'react';
import BaseButton from '@components/BaseButton';
import {rem} from '@styles/theme';
import useProbability from '@hooks/gamble/useProbability';
import {AbilityType, GambleProps, GambleSectionList} from '@hooks/gamble/useGamble';
import {IMAGES} from '@constants/image';
import Score from './Score';

interface Props {
  type: GambleSectionList;
  gamble: GambleProps;
}

const GambleSection: FC<Props> = ({type, gamble}) => {
  const {pbt} = useProbability();
  const {detail, enchant} = gamble;
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

  return (
    <Container>
      <AbilityImg src={abilityImage} />
      <Content>
        <FlexWrapper>
          <Ability>{details && details.ability}</Ability>
          <p>확률: {pbt}</p>
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

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default GambleSection;
