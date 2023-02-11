import styled from '@emotion/styled';
import {FC} from 'react';
import {rem} from '@styles/theme';

interface GradientShadowProps {
  width?: number;
  height: number;
}

const GradientShadow: FC<GradientShadowProps> = ({height, width}) => {
  return <Container height={height} width={width}></Container>;
};

export default GradientShadow;

const Container = styled.div<{width?: number; height: number}>`
  width: ${({width}) => (width ? width : '100%')};
  height: ${({height}) => rem(height)};
  background: linear-gradient(to bottom, black, white);
`;
