import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PokemonItem } from '../../../utils/cmd/data-types/data-types';
import Pagination from '../pokemon-pagination';
import PokemonCard from '../pokemon-card';

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
  const [pokemonList, setPokemonList] = useState<PokemonItem[]>([]);
  const [pageLimit, setPageLimit] = useState<number>(20);

  const [currentPage, setCurrentPage] = useState(pokemonItem?.url);
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');
  const [loading, setLoading] = useState<boolean>(true);

  let API_URL = `https://pokeapi.co/api/v2/pokemon?limit=${pageLimit}&offset=0`;

  const getPokemons = async (url: string) => {
    setLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;

    const response: any = await fetch(url, { signal });
    const data = await response.json();

    setPokemonList(data.results);
    setPreviousPage(data.previous);
    setNextPage(data.next);
    setLoading(false);

    //cleanup function
    return () => {
      controller.abort();
    };
  };

  const getNextPokemons = () => {
    getPokemons(nextPage);
    console.log('next page', nextPage);
  };

  const getPreviousPokemons = () => {
    getPokemons(previousPage);
    console.log('previous page', previousPage);
  };

  useEffect(() => {
    getPokemons(API_URL);
  }, []);

  return (
    <>
      <PokemonCardListRoot>
        {pokemonList &&
          pokemonList.map((item, index) => (
            <PokemonCard pokemonItem={item} key={index.toString()}>
              {item.name}
            </PokemonCard>
          ))}
      </PokemonCardListRoot>
      <Pagination
        nextPage={nextPage}
        prevPage={previousPage}
        gotoNextPage={() => getNextPokemons()}
        gotoPrevPage={() => getPreviousPokemons()}
      />
    </>
  );
};

export default PokemonCardList;
