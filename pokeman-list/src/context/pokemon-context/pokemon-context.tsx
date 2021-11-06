import React, { useEffect, useState } from 'react';
import { PokemonItem } from '../../utils/cmd/data-types/data-types';

export interface PokemonContextProps {
  children: React.ReactNode | React.ReactNode[];
}

export interface PokemonContextValues {
  pokemons: PokemonItem[];
}

export const PokemonContext = React.createContext({
  pokemons: [] as PokemonItem[],
  getPrevious: () => {},
  getNext: () => {},
  nextPage: '',
  previousPage: '',
  loading: true,
  getSearchItems: (data: PokemonItem[]) => {},
});

export const PokemonConsumer = PokemonContext.Consumer;

export const PokemonProvider: React.FC<PokemonContextProps> = (
  props: PokemonContextProps
) => {
  const [pokemonList, setPokemonList] = useState<PokemonItem[]>([]);
  const [pageLimit, setPageLimit] = useState<number>(20);
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');
  const [loading, setLoading] = useState<boolean>(true);

  let API_URL = `https://pokeapi.co/api/v2/pokemon?limit=${pageLimit}&offset=0`;

  const getPokemons = async (url: string, text?: string | null) => {
    setLoading(true);
    const response: any = await fetch(url);
    const data = await response.json();

    setPokemonList(data.results);
    setPreviousPage(data.previous);
    setNextPage(data.next);
    setLoading(false);
  };

  const getNextPokemons = () => {
    getPokemons(nextPage);
    console.log('next page', nextPage);
  };

  const getPreviousPokemons = () => {
    getPokemons(previousPage);
    console.log('previous page', previousPage);
  };

  const getSearchedPokemons = (arr: PokemonItem[]) => {
    if (arr.length > 0) setPokemonList(arr);
  };

  useEffect(() => {
    getPokemons(API_URL);
  }, [API_URL]);

  return (
    <PokemonContext.Provider
      value={{
        pokemons: pokemonList,
        getPrevious: getPreviousPokemons,
        getNext: getNextPokemons,
        nextPage,
        previousPage,
        loading,
        getSearchItems: getSearchedPokemons,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
