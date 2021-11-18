import React from 'react';
import styled from 'styled-components';
import { PokemonItemDetails } from '../../models/pokemon-model/pokemon-model';
import HeaderSearch from './header-search/header-search';

const HeaderRoot = styled.header`
  display: flex;
  height: 75px;
  width: auto;
  align-items: center;
  background-color: #114152;
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  width: 1340px;
  min-width: 1070px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  min-width: 570px;
`;

const HeaderMain = styled.div`
  justify-content: space-between;
  flex-grow: 1;
`;

const HeaderSub = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;
`;

const HeaderName = styled.div`
  color: #ffffff;
  font-size: 30px;
  position: absolute;
  display: flex;

  left: 130px;
  top: 15px;
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
