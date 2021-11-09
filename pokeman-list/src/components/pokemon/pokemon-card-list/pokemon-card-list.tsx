import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../../components/header';
import { PokemonItemDetails } from '../../../utils/cmd/data-types/data-types';
import Pagination from '../pokemon-pagination';
import PokemonCard from '../pokemon-card';
import PokemonContext from '../../../context/pokemon-context';

const PokemonCardListRoot = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const CardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0.5rem;
  min-height: 100vh;
`;

interface Props {
  pokemonItemDetails?: PokemonItemDetails[];
}

export const PokemonCardList: React.FC<Props> = (props: Props) => {
  const pokemonCtx = useContext(PokemonContext);

  // maintaining details and filtering according to the name search
  const [pokemonItemDetails, setPokemonDetails] = useState<
    PokemonItemDetails[]
  >([]);

  const [filterArr, setFilterArr] = useState<PokemonItemDetails[]>([]);

  // getting items from api appending the date to the pokemonItemsDetails
  const getPokemonItem = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    setPokemonDetails((pokemonItemDetails) => [...pokemonItemDetails, data]);
  };

  // loop through the number of items fetched
  useEffect(() => {
    pokemonCtx.pokemons.map((item, index) => getPokemonItem(item.url));
  }, [pokemonCtx.pokemons.length > 0]);

  const filterListing = filterArr.length > 0 ? filterArr : pokemonItemDetails;

  return (
    <>
      <Header setFilterArr={setFilterArr} pokemonItems={pokemonItemDetails} />
      <CardListWrapper>
        <PokemonCardListRoot>
          {filterListing &&
            filterListing.map((item, index) => (
              <PokemonCard
                key={item.name + index.toString()}
                pokemonItemDetails={item}
              >
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
      </CardListWrapper>
    </>
  );
};

export default PokemonCardList;
