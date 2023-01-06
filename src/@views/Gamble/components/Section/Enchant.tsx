import styled from "@emotion/styled";
import {FC} from "react";
import {EnchantColor} from "@views/Gamble/components/Section/Score";
import {rem} from "@styles/theme";

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
