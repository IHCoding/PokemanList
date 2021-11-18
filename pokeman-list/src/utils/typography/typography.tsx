import React from 'react';
import styled, { css } from 'styled-components';

const h1Styles = css`
  ${(props) => ({ ...props.theme.typography.h1 })};
`;

const h2Styles = css`
  ${(props) => ({ ...props.theme.typography.h2 })};
`;

const h3Styles = css`
  ${(props) => ({ ...props.theme.typography.h3 })};
`;

const bodyStyles = css`
  ${(props) => ({ ...props.theme.typography.body })};
`;

const captionStyles = css`
  ${(props) => ({ ...props.theme.typography.caption })};
`;

const noWrapStyles = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const stylesWrapper = {
  h1: h1Styles,
  h2: h2Styles,
  h3: h3Styles,
  body: bodyStyles,
  caption: captionStyles
};

const colorMapper = {
  initial: css`
    color: initial;
  `,
  inherit: css`
    color: inherit;
  `,
  primary: css`
    color: ${({ theme }) => theme.palette.primary.main};
  `,
  textPrimary: css`
    color: ${({ theme }) => theme.palette.text.primary};
  `,
  textSecondary: css`
    color: ${({ theme }) => theme.palette.text.secondary};
  `,
  error: css`
    color: ${({ theme }) => theme.palette.error.main};
  `
};

const variantMapper: { h1: 'h1'; h2: 'h2'; h3: 'h3'; body: 'p'; caption: 'span' } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  caption: 'span'
};

const StyledTypography = styled.span<Props>`
  ${(props) => props.variant && stylesWrapper[props.variant]};

  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ textTransform }) => textTransform};
  font-weight: ${({ fontWeight, theme }) => fontWeight && theme.typography.weight[fontWeight]};

  ${({ color }) => color && colorMapper[color]};
  ${({ noWrap }) => noWrap && noWrapStyles};

  ${({ styles }) => styles && styles};
`;

interface Props {
  children: React.ReactNode | React.ReactNode[];
  fontWeight?: 'light' | 'regular' | 'medium' | 'bold';
  color?: 'initial' | 'inherit' | 'primary' | 'textPrimary' | 'textSecondary' | 'error';
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none' | 'initial' | 'inherit';
  noWrap?: boolean;
  component?: React.ElementType;
  styles?: { root?: string };
}

const Typography: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = (props: Props) => {
  const {
    children,
    fontWeight,
    color,
    textAlign,
    variant = 'body',
    component,
    noWrap,
    textTransform,
    styles,
    ...rest
  } = props;

  const tag = component || variantMapper[variant] || 'span';

  return (
    <StyledTypography
      as={tag}
      fontWeight={fontWeight}
      color={color}
      textAlign={textAlign}
      variant={variant}
      noWrap={noWrap}
      textTransform={textTransform}
      styles={styles?.root}
      {...rest}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
