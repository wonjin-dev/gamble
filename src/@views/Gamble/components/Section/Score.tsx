import styled from "@emotion/styled";
import {FC, useCallback} from "react";
import Enchant from "@views/Gamble/components/Section/Enchant";
import {rem} from "@styles/theme";

export type EnchantScore = 'success' | 'fail' | 'none';
export type EnchantColor = 'black' | 'blue' | 'red';

interface ScoreProps {
  scoreArr: EnchantScore[];
}

const Score: FC<ScoreProps> = ({scoreArr}) => {
  const transformScore = useCallback((score: EnchantScore,  index: number) => {
    if(score === 'success') {
      return (
        <Enchant key={index} color={'blue'} />
      )
    } else if(score === 'fail') {
      return (
        <Enchant key={index} color={'red'} />
      )
    } else {
      return <Enchant key={index} color={'black'} />
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
