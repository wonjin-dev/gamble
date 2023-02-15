import styled from '@emotion/styled';
import {FC} from 'react';
import {rem} from '@styles/theme';

interface GradientShadowProps {
  width?: number;
  height: number;
  startColor?: string;
  endColor?: string;
}

const GradientShadow: FC<GradientShadowProps> = ({height, width, startColor = 'grey', endColor = 'white'}) => {
  return <Container height={height} width={width} startColor={startColor} endColor={endColor} />;
};

export default GradientShadow;

const Container = styled.div<{width?: number; height: number; startColor?: string; endColor?: string}>`
  width: ${({width}) => (width ? width : '100%')};
  height: ${({height}) => rem(height)};
  background: ${(props) => `linear-gradient(to bottom, ${[props.startColor]}, ${props.endColor})}`};
`;
