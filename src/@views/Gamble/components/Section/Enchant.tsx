import styled from "@emotion/styled";
import {FC} from "react";
import {rem} from "@styles/theme";

export enum EnchantScore {
  SUCCESS,
  FAIL,
  NONE,
}
type EnchantColor = 'black' | 'blue' | 'red';

interface EnchantProps {
  color: EnchantColor;
}

const Enchant: FC<EnchantProps> = ({color = 'black'}) => {
  return (
    <Container color={color} />
  )
}

const Container = styled.div`
  width: ${rem(16)};
  height: ${rem(16)};
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export default Enchant;
