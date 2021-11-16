import React from 'react';
import styled from 'styled-components';
import { PokemonItemDetails } from '../../utils/cmd/data-types/data-types';
import HeaderSearch from './header-search/header-search';

const HeaderRoot = styled.header`
  display: flex;
  height: 75px;
  width: auto;
  align-items: center;
  background-color: #484752;
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  width: 1340px;
  min-width: 1070px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  // min-width: 500px;
`;

const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const HeaderSub = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;
`;

const HeaderName = styled.div`
  color: #ffffff;
  background-color: none;
  font-size: 30px;
  margin-left: 10px;
`;

interface Props {
  setFilterArr: any;
  pokemonItemsDetails: PokemonItemDetails[];
  setSearchQuery: any;
  searchQuery: string;
}

export const Header: React.FC<Props> = (props: Props) => {
  const { setFilterArr, pokemonItemsDetails, setSearchQuery, searchQuery } =
    props;
  return (
    <HeaderRoot>
      <HeaderInner>
        <HeaderMain>
          <HeaderName>Pokemons</HeaderName>
        </HeaderMain>

        <HeaderSub>
          <HeaderSearch
            setFilterArr={setFilterArr}
            pokemonItemsDetails={pokemonItemsDetails}
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
          />
        </HeaderSub>
      </HeaderInner>
    </HeaderRoot>
  );
};

export default Header;
