import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../../components/header';
import { PokemonItemDetails } from '../../../models/pokemon-model/pokemon-model';
import Pagination from '../pokemon-pagination';
import PokemonCard from '../pokemon-card';
import PokemonContext from '../../../context/pokemon-context';
import PokemonSorting from '../pokemon-sorting';

const CardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0.5rem;
  min-height: 100vh;
`;

const PokemonCardListRoot = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 570px;
  margin: 24px 8px;
`;

const ToolbarContainerTop = styled.div`
  color: #ffffff;
  right: 130px;
  margin: 24px 8px;
`;

const ToolbarContainerBottom = styled.div`
  position: relative;
  color: #ffffff;
  padding: 20px 0;
  bottom: 90px;
`;
export const PokemonCardList: React.FC = () => {
  const pokemonCtx = useContext(PokemonContext);

  // maintaining details and filtering according to the name search
  const [pokemonItemDetails, setPokemonDetails] = useState<
    PokemonItemDetails[]
  >([]);

  const [searchQuery, setSearchQuery] = useState<string>('');

  const [filterArr, setFilterArr] = useState<PokemonItemDetails[]>([]);

  const [sortBy, setSortBy] = useState<keyof PokemonItemDetails>('name');

  // getting items from api, appending the data to the pokemonItemsDetails
  const getPokemonItem = async (url: string, searchTerm?: string) => {
    const res = await fetch(url);
    const data = await res.json();
    setPokemonDetails((pokemonItemDetails) => [...pokemonItemDetails, data]);
  };

  useEffect(() => {
    const pageLimit = pokemonCtx.nextPage.split('?');
    const offset = pageLimit[1];
    const offsetSplit = offset?.split('&');
    const offsetCount = offsetSplit && offsetSplit[0]?.split('=');

    if (offsetCount) {
      if (
        parseInt(offsetCount[1]) === 0 ||
        parseInt(offsetCount[1]) > pokemonItemDetails.length
      ) {
        pokemonCtx.pokemons.map((item, index) =>
          getPokemonItem(item.url ? item.url : '')
        );
      } else {
        setPokemonDetails(
          pokemonItemDetails.slice(
            0,
            Math.min(pokemonItemDetails.length, parseInt(offsetCount[1]))
          )
        );
      }
    }
  }, [pokemonCtx.pokemons.length > 0, pokemonCtx.nextPage]);

  // whenever seraching will be passed filterArr, otherwise the details
  const filterListing = searchQuery.length > 0 ? filterArr : pokemonItemDetails;

  const sortPokemons = (
    pokemons: PokemonItemDetails[],
    sortParam: keyof PokemonItemDetails
  ): PokemonItemDetails[] => {
    return pokemons.sort((aPokemon, bPokemon) => {
      if (aPokemon[sortParam] < bPokemon[sortParam]) return -1;
      if (aPokemon[sortParam] > bPokemon[sortParam]) return 1;
      return 0;
    });
  };

  return (
    <>
      <Header
        setFilterArr={setFilterArr}
        pokemonItemsDetails={pokemonItemDetails}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      <CardListWrapper>
        <PokemonCardListRoot>
          {filterListing.length > 0
            ? sortPokemons(filterListing, sortBy).map((item, index) => (
                <PokemonCard
                  key={item.name + index.toString()}
                  pokemonItemDetails={item}
                >
                  {item.name}
                </PokemonCard>
              ))
            : 'No data found'}
        </PokemonCardListRoot>
      </CardListWrapper>

      <ToolbarContainerTop>
        <Pagination
          nextPage={pokemonCtx.nextPage}
          prevPage={pokemonCtx.previousPage}
          gotoNextPage={() => pokemonCtx.getNext()}
          gotoPrevPage={() => pokemonCtx.getPrevious()}
        />
        <PokemonSorting
          setSortBy={(criteria: any) => {
            setSortBy(criteria);
          }}
        />
      </ToolbarContainerTop>

      <ToolbarContainerBottom>
        <Pagination
          nextPage={pokemonCtx.nextPage}
          prevPage={pokemonCtx.previousPage}
          gotoNextPage={() => pokemonCtx.getNext()}
          gotoPrevPage={() => pokemonCtx.getPrevious()}
        />
        <PokemonSorting
          setSortBy={(criteria: any) => {
            setSortBy(criteria);
          }}
        />
      </ToolbarContainerBottom>
    </>
  );
};

export default PokemonCardList;
