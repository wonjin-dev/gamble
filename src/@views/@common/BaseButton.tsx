import styled from '@emotion/styled';
import {FC, HTMLProps} from 'react';
import {COLORS, rem} from '@styles/theme';

interface BaseButtonProps extends HTMLProps<HTMLButtonElement> {
  value: string;
  className?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  width?: number;
  height?: number;
  onClick: () => void;
}

const BaseButton: FC<BaseButtonProps> = ({
  value,
  className,
  textColor = COLORS.BLACK,
  bgColor = COLORS.WHITE,
  borderColor = COLORS.GREY,
  width = 80,
  height = 30,
  onClick,
}) => {
  return (
    <StyledButton
      className={className}
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      borderColor={borderColor}
      onClick={onClick}>
      {value}
    </StyledButton>
  );
};

export default BaseButton;

const StyledButton = styled.button<{
  textColor: string;
  bgColor: string;
  borderColor: string;
  width: number;
  height: number;
}>`
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.bgColor};
  width: ${(props) => rem(props.width)};
  height: ${(props) => rem(props.height)};
  padding: ${rem(6)};
  border: ${(props) => `${rem(1)} solid ${props.borderColor}`};
  border-radius: ${rem(8)};
`;
