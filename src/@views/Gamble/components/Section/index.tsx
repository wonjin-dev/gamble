import styled from '@emotion/styled';
import {FC, useMemo} from 'react';
import BaseButton from '@components/BaseButton';
import {COLORS, rem} from '@styles/theme';
import {AbilityType, GambleProps, GambleSectionList} from '@hooks/gamble/useGamble';
import {IMAGES} from '@constants/image';
import useTranslate from '@hooks/useTranslate';
import {checkGambleChance} from '@utils/filters';
import Score from './Score';

interface Props {
  type: GambleSectionList;
  gamble: GambleProps;
}

const GambleSection: FC<Props> = ({type, gamble}) => {
  const {translate} = useTranslate();
  const {probability, detail, enchant} = gamble;
  const details = useMemo(() => detail(type), [detail, type]);
  const progress = useMemo(() => (details ? 10 - checkGambleChance(details.score) : 0), [details]);

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

  const probabilityText = useMemo(() => {
    if (type === 'positive1') {
      return `${translate('SUCCESS_PROBABILITY')}: ${probability}`;
    }
    if (type === 'negative') {
      return `${translate('FAIL_PROBABILITY')}: ${probability}`;
    }
  }, [probability, translate, type]);

  if (details) {
    return (
      <Container isNegativeSection={type === 'negative'}>
        <AbilityImageWarpper>
          <AbilityImg src={abilityImage} />
        </AbilityImageWarpper>

        <Content>
          <Ability>{translate(details.ability || 'NULL')}</Ability>
          <Score scoreArr={details.score} />
        </Content>

        <ActionContentWrapper>
          <p className="probability">{probabilityText}</p>
          <BaseButton value={translate('GAMBLE')} onClick={() => enchant(type)} width={70} height={32} />
          <ProgressionWrapper isFinish={progress === 10}>
            <p className="progress">
              {translate('PROGRESSION')}: {progress} / 10
            </p>
          </ProgressionWrapper>
        </ActionContentWrapper>
      </Container>
    );
  }

  return null;
};

export default GambleSection;

const Container = styled.div<{isNegativeSection: boolean}>`
  display: flex;
  justify-content: space-between;
  height: ${rem(90)};
  padding: ${rem(8)};
  outline: ${(props) =>
    props.isNegativeSection ? `${rem(1)} solid ${COLORS.RED}` : `${rem(1)} solid ${COLORS.BLACK}`};
  border-radius: ${rem(6)};
  margin-top: ${(props) => props.isNegativeSection && rem(20)};
`;

const Content = styled.div`
  width: 100%;
  margin: 0 ${rem(6)};
  margin-left: ${rem(16)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AbilityImageWarpper = styled.picture`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AbilityImg = styled.img`
  width: ${rem(32)};
  height: ${rem(32)};
  padding: ${rem(4)};
  object-fit: contain;
`;

const Ability = styled.p`
  font-size: ${rem(20)};
`;

const ActionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${rem(2)};
  width: 100%;
`;

const ProgressionWrapper = styled.div<{isFinish: boolean}>`
  @media (max-width: 510px) {
    display: none;
  }

  p {
    text-align: end;
    overflow: hidden;
    white-space: nowrap;
  }

  .probability {
    font-weight: 400;
  }

  .progress {
    font-weight: 700;
    color: ${({isFinish}) => isFinish && COLORS.RED};
  }
`;
