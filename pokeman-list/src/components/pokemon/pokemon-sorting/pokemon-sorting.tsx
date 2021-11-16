import React from 'react';
import styled from 'styled-components';

const PokemonSortingRoot = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  position: absolute;
  top: 5%;
  left: 60px;
  border-radius: 4px;
  margin-top: 50px;
  margin-right: 5%;
  background-color: ${(props) => props.theme.palette.background.level2};
`;

const PokemonSortLabel = styled.div`
  margin: 0 4px;
  font-size: 18px;
`;

interface Props {
  setSortBy: (criteria: string) => void;
}

export const PokemonSorting: React.FC<Props> = (props: Props) => {
  const { setSortBy } = props;

  return (
    <PokemonSortingRoot>
      <PokemonSortLabel>Sort by </PokemonSortLabel>
      {<button onClick={() => setSortBy('id')}> Id </button>}
      {<button onClick={() => setSortBy('name')}> Name </button>}
      {<button onClick={() => setSortBy('height')}> Height </button>}
      {<button onClick={() => setSortBy('weight')}> Weight </button>}
      {<button onClick={() => setSortBy('abilities')}> Abilities </button>}
    </PokemonSortingRoot>
  );
};

export default PokemonSorting;
