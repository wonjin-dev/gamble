import styled from "@emotion/styled";
import {FC} from "react";
import {rem} from "@styles/theme";

export const enum EnchantScore {
  SUCCESS,
  FAIL,
  NONE,
}

export const enum EnchantColor {
  BLACK = 'black',
  BLUE = 'blue',
  RED = 'red',
}

interface EnchantProps {
  color: EnchantColor;
}

const Enchant: FC<EnchantProps> = ({color = EnchantColor.BLACK}) => {
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
