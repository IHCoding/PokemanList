import React from 'react';
import styled from 'styled-components';
import Typography from '../../../utils/typography';

interface Props {
  title: string;
}

const PokemonCardDetailsTitleRoot = styled(Typography)`
  font-variant: ${(props) => props.theme.typography.h3};
  font-weight: ${(props) => props.theme.typography.weight.bold};
  margin-bottom: ${(props) => props.theme.spacing(4)};
  font-weight: normal;
  color: #fff;
  margin: 8px;
  white-space: nowrap;
`;

export const PokemonCardDetailsTitle: React.FC<Props> = ({ title }: Props) => {
  return (
    <PokemonCardDetailsTitleRoot textTransform="capitalize">
      {title}
    </PokemonCardDetailsTitleRoot>
  );
};

export default PokemonCardDetailsTitle;
