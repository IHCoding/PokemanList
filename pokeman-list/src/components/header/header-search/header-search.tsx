import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PokemonItemDetails } from '../../../models/pokemon-model/pokemon-model';
import SearchIcon from '../../../utils/custom-components/icons/search-icon';
import useDebounce from '../../../utils/custom-hooks';

const HeaderSearchRoot = styled.div`
  border-radius: ${(props) => props.theme.spacing(1)};
  background-color: rgba(229, 229, 226, 0.98);
  right: 130px;
  position: absolute;
  padding: ${(props) => `${props.theme.spacing(1)} 0`};
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
  right: 40px;
`;

interface Props {
  pokemonItemsDetails: PokemonItemDetails[];
  setFilterArr: any;
  searchQuery: string;
  setSearchQuery: any;
}

export const HeaderSearch: React.FC<Props> = (props: Props) => {
  const { searchQuery, setSearchQuery, pokemonItemsDetails, setFilterArr } =
    props;

  const debouncedSearchTerm: string = useDebounce(props.searchQuery, 500);

  useEffect(() => {
    if (debouncedSearchTerm.length > 0) {
      if (pokemonItemsDetails.length > 0) {
        let newdata: any = [];

        pokemonItemsDetails.filter((items) =>
          items?.abilities.filter((data) => {
            if (
              data.ability.name
                .toLowerCase()
                .includes(debouncedSearchTerm.toLowerCase())
            ) {
              newdata.push(items);
            } else if (
              items.name
                .toLowerCase()
                .includes(debouncedSearchTerm.toLowerCase())
            ) {
              newdata.push(items);
            }
          })
        );

        setFilterArr(newdata);
      } else {
        setFilterArr([]);
      }
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
    </HeaderSearchRoot>
  );
};

export default HeaderSearch;
