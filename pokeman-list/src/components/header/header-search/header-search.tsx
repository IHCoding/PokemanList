import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PokemonItem } from '../../../utils/cmd/data-types/data-types';
import SearchIcon from '../../../utils/custom-components/icons/search-icon';
import useDebounce from '../../../utils/custom-hooks';
import PokemonCard from '../../pokemon/pokemon-card';
import PokemonCardList from '../../pokemon/pokemon-card-list';
import PokemonContext from '../../../context/pokemon-context';

const HeaderSearchRoot = styled.div`
  border-radius: ${(props) => props.theme.spacing(1)};
  background-color: rgba(229, 229, 226, 0.98);
  display: flex;
  right: 4%;
  margin: ${(props) => `${props.theme.spacing(-14)}`};
  padding: ${(props) => `${props.theme.spacing(1)} 0`};
  position: relative;
`;

const HeaderSearchIcon = styled(SearchIcon)`
  color: ${(props) => props.theme.palette.common.black};
  margin: 2px 4px;
  padding: ${(props) => props.theme.spacing(1)};
  position: absolute;
  cursor: default;
`;

const HeaderSearchInput = styled.input`
  background-color: transparent;
  border: none;
  font-size: 16px;
  outline: none;
  text-indent: ${(props) => props.theme.spacing(7)};
  height: 30px;
  width: 300px;
`;

interface Props {
  pokemonItem?: PokemonItem;
}

export const HeaderSearch: React.FC = () => {
  const pokemonCtx = useContext(PokemonContext);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedSearchTerm: string = useDebounce(searchQuery, 500);

  const [searchResults, setSearchResults] = useState<PokemonItem[]>([]);

  useEffect(() => {
    if (debouncedSearchTerm.length > 1) {
      (async () => {
        try {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon?=search${debouncedSearchTerm}`
          );
          const data = await res.json();
          pokemonCtx.getSearchItems(data);
        } catch (error) {
          console.log('error getting the searched values');
        }
      })();
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <HeaderSearchRoot>
      <HeaderSearchIcon size="sm" />
      <HeaderSearchInput
        onChange={(event) => setSearchQuery(event.target.value)}
        value={searchQuery}
        type="search"
      />
      {/* <PokemonCardList>
        {searchSuggestions.length > 0 && (
          <div>
            {searchSuggestions.map((suggestion, index) => {
              <PokemonCard key={index.toString()} pokemonItem={}>
                {suggestion}
              </PokemonCard>;
            })}
          </div>
        )}
      </PokemonCardList> */}
    </HeaderSearchRoot>
  );
};

export default HeaderSearch;
