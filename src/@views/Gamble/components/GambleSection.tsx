import styled from "@emotion/styled";
import {FC} from "react";
import BaseButton from "@components/BaseButton";
import Score from "@views/Gamble/components/Section/Score";
import {rem} from "@styles/theme";

interface GambleProps {
  onEnchantClick: () => void;
}

const GambleSection: FC<GambleProps> = ({onEnchantClick}) => {
  return (
    <Container>
      <Img src={'https://cdn-icons-png.flaticon.com/512/3658/3658773.png'} />
      <EnchantContainer>
        <Ability>{'힘'}</Ability>
        <Score scoreArr={['success', 'success', 'success', 'fail', 'fail','fail','none','none','none','none']} />
      </EnchantContainer>
      <BaseButton value={'강화'} onClick={onEnchantClick} width={50} height={32} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${rem(4)} 0 ${rem(4)};
`;

const EnchantContainer = styled.div`
  width: 100%;
  padding: 0 ${rem(8)} 0 ${rem(8)};
`;

const Img = styled.img`
  width: ${rem(32)};
  height: ${rem(32)};
`;

const Ability = styled.div`
  font-size: ${rem(10)};
`;

export default GambleSection;
