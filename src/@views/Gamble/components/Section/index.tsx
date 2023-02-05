import styled from '@emotion/styled';
import {FC, useMemo} from 'react';
import BaseButton from '@components/BaseButton';
import {COLORS, rem} from '@styles/theme';
import {AbilityType, GambleProps, GambleSectionList} from '@hooks/gamble/useGamble';
import {IMAGES} from '@constants/image';
import useTranslate from '@hooks/useTranslate';
import Score from './Score';

interface Props {
  type: GambleSectionList;
  gamble: GambleProps;
}

const GambleSection: FC<Props> = ({type, gamble}) => {
  const {translate} = useTranslate();
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
      return `${translate('SUCCESS_PROBABILITY')}: ${pbt}`;
    }
    if (type === 'negative') {
      return `${translate('FAIL_PROBABILITY')}: ${pbt}`;
    }
  }, [pbt, translate, type]);

  if (details) {
    return (
      <Container isNegativeSection={type === 'negative'}>
        <AbilityImageWarpper>
          <AbilityImg src={abilityImage} />
        </AbilityImageWarpper>
        <Content>
          <FlexWrapper>
            <Ability>{translate(details.ability || 'NULL')}</Ability>
            {probability}
          </FlexWrapper>
          <Score scoreArr={details.score} />
        </Content>
        <BaseButton value={translate('GAMBLE')} onClick={() => enchant(type)} width={70} height={32} />
      </Container>
    );
  }

  return null;
};

const Container = styled.div<{isNegativeSection: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${rem(4)};
  outline: ${(props) =>
    props.isNegativeSection ? `${rem(1)} solid ${COLORS.RED}` : `${rem(1)} solid ${COLORS.BLACK}`};
  border-radius: ${rem(6)};
  margin-top: ${(props) => props.isNegativeSection && rem(20)};
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
