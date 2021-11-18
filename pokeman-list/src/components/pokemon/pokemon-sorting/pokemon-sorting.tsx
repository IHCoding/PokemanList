import React from 'react';
import styled from 'styled-components';

const PokemonSortingRoot = styled.div`
  display: flex;
  align-item: center;
  flex-direction: row;
  position: absolute;
  top: 5%;
  left: 130px;
  margin-top: 50px;
`;

const PokemonSortLabel = styled.div`
  margin: 0 4px;
  font-size: 18px;
  color: black;
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
