import React from 'react';
import styled from 'styled-components';

type Size = 'sm' | 'md' | 'lg' | number;
type Color = 'inherit' | 'primary' | 'secondary' | 'success' | 'error';

export const sizeWrapper = {
  sm: '18px',
  md: '24px',
  lg: '30px',
};

interface IconProps {
  size: Size;
  color: Color;
  styles?: string;
}

export const StyledIcon = styled.svg<IconProps>`
  width: 1em;
  height: 1em;
  fill: currentColor;
  font-size: ${({ size }) => {
    if (typeof size === 'number') return `${size}px`;

    return sizeWrapper[size];
  }};

  color: ${({ color, theme }) =>
    color === 'inherit' ? 'inherit' : theme.palette?.[color]?.main};

  ${({ styles }) => styles};
`;

export interface Props {
  children?: React.ReactNode | React.ReactNode[];
  color?: Color;
  size?: Size;
  viewBox?: string;
  styles?: {
    root?: string;
  };
}

export const Icon: React.FC<Props & React.SVGProps<SVGElement>> = (
  props: Props
) => {
  const {
    children,
    styles,
    color = 'inherit',
    size = 'md',
    viewBox = '0 0 24 24',
    ...rest
  } = props;

  return (
    <StyledIcon
      viewBox={viewBox}
      color={color}
      size={size}
      styles={styles?.root}
      {...rest}
    >
      {children}
    </StyledIcon>
  );
};

export default Icon;
