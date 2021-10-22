import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PokemonItem } from '../../../utils/cmd/data-types/data-types';
import Pagination from '../../pagination';
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

  // const [currentPage, setCurrentPage] = useState(
  //   'https://pokeapi.co/api/v2/pokemon'
  // );
  const [currentPage, setCurrentPage] = useState(pokemonItem?.url);
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState();
  const [loading, setLoading] = useState<boolean>(true);

  const getPokemons = async () => {
    if (!loading) {
      setLoading(true);
      return 'Loading...';
    }

    let API_URL = `https://pokeapi.co/api/v2/pokemon?limit=${pageLimit}&offset=0`;
    const controller = new AbortController();
    const signal = controller.signal;

    const response: any = await fetch(API_URL, { signal });
    const data = await response.json();
    setLoading(false);
    setPokemonList(data.results);
    setPreviousPage(data.previous);
    setNextPage(data.next);

    //cleanup function
    return () => {
      controller.abort();
    };
  };

  const getNextPage = () => {
    setCurrentPage(nextPage);
  };

  const getPreviousPage = () => {
    setCurrentPage(previousPage);
  };

  useEffect(() => {
    getPokemons();
  }, [currentPage]);

  return (
    <>
      <PokemonCardListRoot>
        {pokemonList &&
          pokemonList.map((item, index) => (
            <PokemonCard pokemonItem={item} key={index.toString()}>
              {item.name}
            </PokemonCard>
          ))}
        {/* <Pagination
          gotoNextPage={getNextPage() ? gotoNextPage : null}
          gotoPrevPage={getPreviousPage() ? gotoPrevPage : null}
        /> */}
      </PokemonCardListRoot>
    </>
  );
};

export default PokemonCardList;
