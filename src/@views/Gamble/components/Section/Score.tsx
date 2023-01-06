import styled from "@emotion/styled";
import {FC, useCallback} from "react";
import Enchant, {EnchantColor, EnchantScore} from "@views/Gamble/components/Section/Enchant";
import {rem} from "@styles/theme";

interface ScoreProps {
  scoreArr: EnchantScore[];
}

const Score: FC<ScoreProps> = ({scoreArr}) => {
  const transformScore = useCallback((score: EnchantScore,  index: number) => {
    if(score === 0) {
      return (
        <Enchant key={index} color={EnchantColor.BLUE} />
      )
    } else if(score === 1) {
      return (
        <Enchant key={index} color={EnchantColor.RED} />
      )
    } else {
      return <Enchant key={index} color={EnchantColor.BLACK} />
    }
  }, []);

  return (
    <Container>
      {scoreArr.map((score: EnchantScore, index: number) => {
        return transformScore(score, index);
    })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: ${rem(22)};
  align-items: center;
  gap: ${rem(4)};
`;

export default Score;
