import styled from '@emotion/styled';
import {FC} from 'react';
import BaseButton from '@components/BaseButton';
import {rem} from '@styles/theme';
import Score from '@views/Gamble/components/Section/Score';
import useProbability from '@hooks/gamble/useProbability';
import useGamble from '@hooks/gamble/useGamble';
import {GambleSectionList, useEnchant} from '@hooks/gamble/useEnchant';

interface Props {
  type: GambleSectionList;
}

const GambleSection: FC<Props> = ({type}) => {
  const {abilityImage} = useGamble();
  const {pbt} = useProbability();
  const {gambleDetail, enchant} = useEnchant();
  const section = gambleDetail(type);
  const img = abilityImage(section?.ability);

  return (
    <Container>
      <AbilityImg src={img} />
      <Content>
        <FlexWrapper>
          <Ability>{section?.ability}</Ability>
          <p>확률: {pbt}</p>
        </FlexWrapper>
        <Score scoreArr={section?.score || []} />
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
