import styled from '@emotion/styled';
import {FC, HTMLProps} from 'react';
import {COLORS, rem} from '@styles/theme';

export interface BaseButtonProps extends HTMLProps<HTMLButtonElement> {
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
  width,
  height,
  textColor = COLORS.BLACK,
  bgColor = COLORS.WHITE,
  borderColor = COLORS.GREY,
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
  width?: number;
  height?: number;
}>`
  color: ${({textColor}) => textColor};
  background-color: ${({bgColor}) => bgColor};
  width: ${({width}) => (width ? rem(width) : '100%')};
  height: ${({height}) => (height ? rem(height) : '100%')};
  padding: ${rem(6)};
  border: ${({borderColor}) => `${rem(1)} solid ${borderColor}`};
  border-radius: ${rem(8)};

  cursor: pointer;
  :active {
    background-color: ${COLORS.GREY};
    color: ${COLORS.WHITE};
  }
`;
