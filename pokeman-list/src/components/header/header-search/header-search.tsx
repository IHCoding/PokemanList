import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PokemonItem } from '../../../utils/cmd/data-types/data-types';
import SearchIcon from '../../../utils/custom-components/icons/search-icon';
import useDebounce from '../../../utils/custom-hooks';

const HeaderSearchRoot = styled.div`
  border-radius: ${(props) => props.theme.spacing(1)};
  background-color: rgba(229, 229, 226, 0.98);
  display: flex;
  margin: ${(props) => `0 ${props.theme.spacing(4)}`};
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
  width: 254px;
`;

export const HeaderSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedSearchTerm: string = useDebounce(searchQuery, 500);

  const [searchResults, setSearchResults] = React.useState<PokemonItem[]>([]);

  //   useEffect( () => {
  //       if(debouncedSearchTerm.length > 1) {
  //           (async () => {
  //               try {
  //                   const data = await
  //                     const res = await fetch(pokemonItem.url);
  //                     const data = await res.json();
  //                     setPokemonDetails(data);
  //                   }
  //               } catch (error) {

  //               }
  //           })
  //       }
  //   }, [] )

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
