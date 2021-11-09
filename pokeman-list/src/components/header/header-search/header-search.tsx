import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PokemonItem } from '../../../utils/cmd/data-types/data-types';
import SearchIcon from '../../../utils/custom-components/icons/search-icon';
import useDebounce from '../../../utils/custom-hooks';

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
  pokemonItems: PokemonItem[];
  setFilterArr: any;
}

export const HeaderSearch: React.FC<Props> = (props: Props) => {
  const pokemonCtx = useContext(PokemonContext);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedSearchTerm: string = useDebounce(searchQuery, 500);
  const [searchResults, setSearchResults] = useState<PokemonItem[]>([]);

  useEffect(() => {
    if (debouncedSearchTerm.length > 0) {
      if (props.pokemonItems.length > 0) {
        const newdata = props.pokemonItems.filter((items) =>
          items.name.includes(debouncedSearchTerm)
        );

        props.setFilterArr(newdata);
      } else {
        props.setFilterArr([]);
      }

      (async () => {
        // console.log('debouncedSearchTerm', debouncedSearchTerm);
        try {
          const res = await fetch(
            // `https://pokeapi.co/api/v2/pokemon?name=${debouncedSearchTerm}`
            `https://pokeapi.co/api/v2/pokemon/${debouncedSearchTerm}`
          );
          if (!res.ok) {
            const err = res.statusText;
            throw new Error(err);
          }
          const data = await res.json();

          // console.log(data);
          pokemonCtx.getSearchItems(data);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm, pokemonCtx]);

  return (
    <HeaderSearchRoot>
      <HeaderSearchIcon size="sm" />
      <HeaderSearchInput
        onChange={(event) => setSearchQuery(event.target.value)}
        value={searchQuery}
        type="search"
      />
    </HeaderSearchRoot>
  );
};

export default HeaderSearch;
