import React from 'react';
import styled, { css } from 'styled-components';

const fluidStyles = css`
  max-width: 100%;
  height: auto;
`;

const roundedStyles = css`
  border-radius: 4px;
`;

export interface ImageRootProps {
  fluid?: boolean;
  rounded?: boolean;
  styles?: string;
}

export const ImageRoot = styled.img<ImageRootProps>`
  ${({ fluid }) => fluid && fluidStyles};
  ${({ rounded }) => rounded && roundedStyles};

  ${({ styles }) => styles};
`;

export interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  fluid?: boolean;
  rounded?: boolean;
  styles?: {
    root?: string;
  };
}

export const Image: React.FC<Props> = (props: Props) => {
  const { fluid, rounded, styles, ...rest } = props;

  return <ImageRoot fluid={fluid} rounded={rounded} styles={styles?.root} {...rest} />;
};

export default Image;
