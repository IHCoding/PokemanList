import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PokemonItem } from '../../../utils/cmd/data-types/data-types';
import PokemonCard from '../pokemon-card';

// const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png?raw=true`;

const PokemonCardListRoot = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 8px;
`;

// const PokemonCardItemImage = styled(Image)`
//   position: relative;
//   width: 100%;
// `;

// const PokemonCardItemContent = styled.div`
//   text-font: 12px;
//   margin-top: 8px;

//   transition: transform 250ms ease-in-out;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

export const PokemonCardList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const [pokemonList, setPokemonList] = useState<PokemonItem[]>([]);
  const [pageLimit, setPageLimit] = useState<number>(20);

  const getPokemons = async () => {
    if (!loading) {
      setLoading(true);
    }
    let API_URL = `https://pokeapi.co/api/v2/pokemon?limit=${pageLimit}&offset=0`;

    const response: any = await fetch(API_URL);
    const data = await response.json();
    setPokemonList(data.results);

    // // console.log(data.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <PokemonCardListRoot>
      {pokemonList &&
        pokemonList.map((item, index) => (
          <PokemonCard pokemonItem={item} key={index.toString()}>
            {item.name}
          </PokemonCard>
        ))}
    </PokemonCardListRoot>
  );
};

export default PokemonCardList;
