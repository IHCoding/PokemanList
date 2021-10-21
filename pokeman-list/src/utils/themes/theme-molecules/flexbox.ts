import { css } from 'styled-components';

export interface Flexbox {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';
  alignItems?:
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit';
  justifyContent?:
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'initial'
  | 'inherit';
  alignContent?:
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'initial'
  | 'inherit';
  order?: number | 'initial' | 'inherit';
  flexGrow?: number | 'initial' | 'inherit';
  flexShrink?: number | 'initial' | 'inherit';
  alignSelf?:
  | 'auto'
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit';
  flex?: number | string;
}

export const flexbox = css<Flexbox>`
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  align-content: ${(props) => props.alignContent};
  order: ${(props) => props.order};
  flex-grow: ${(props) => props.flexGrow};
  flex-shrink: ${(props) => props.flexShrink};
  align-self: ${(props) => props.alignSelf};
  flex: ${(props) => props.flex};
`;

export default flexbox;
