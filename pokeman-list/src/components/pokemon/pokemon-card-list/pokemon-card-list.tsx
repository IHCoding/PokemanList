import React, { useContext } from 'react';
import styled from 'styled-components';
import { PokemonItem } from '../../../utils/cmd/data-types/data-types';
import Pagination from '../pokemon-pagination';
import PokemonCard from '../pokemon-card';
import PokemonContext from '../../../context/pokemon-context';

const PokemonCardListRoot = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

interface Props {
  pokemonItem?: PokemonItem;
}

export const PokemonCardList: React.FC<Props> = ({ pokemonItem }: Props) => {
  const pokemonCtx = useContext(PokemonContext);

  return (
    <>
      <PokemonCardListRoot>
        {pokemonCtx.pokemons &&
          pokemonCtx.pokemons.map((item, index) => (
            <PokemonCard pokemonItem={item} key={index.toString()}>
              {item.name}
            </PokemonCard>
          ))}
      </PokemonCardListRoot>
      <Pagination
        nextPage={pokemonCtx.nextPage}
        prevPage={pokemonCtx.previousPage}
        gotoNextPage={() => pokemonCtx.getNext()}
        gotoPrevPage={() => pokemonCtx.getPrevious()}
      />
    </>
  );
};

export default PokemonCardList;
