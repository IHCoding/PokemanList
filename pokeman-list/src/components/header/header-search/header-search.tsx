import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PokemonItemDetails } from '../../../utils/cmd/data-types/data-types';
import SearchIcon from '../../../utils/custom-components/icons/search-icon';
import useDebounce from '../../../utils/custom-hooks';

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
  right: 40px;
`;

interface Props {
  pokemonItemsDetails: PokemonItemDetails[];
  setFilterArr: any;
  searchQuery: string;
  setSearchQuery: any;
}

export const HeaderSearch: React.FC<Props> = (props: Props) => {
  const debouncedSearchTerm: string = useDebounce(props.searchQuery, 500);
  //props
  const { searchQuery, setSearchQuery, pokemonItemsDetails, setFilterArr } =
    props;

  // const IdmatchingItems = (array: [], idval: string) => {
  //   const checking = array?.filter((item) => item.id !== idval);
  //   return checking;
  // };

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
              // @todo item.id needs to be checked for duplicate data.
              // const id = items.id
              // console.log('items', items.abilities.indexOf.name);
              // if (IdmatchingItems(newdata, items.id)) {
              newdata.push(items);
              console.log('ability', items);
              // }
            } else if (
              items.name
                .toLowerCase()
                .includes(debouncedSearchTerm.toLowerCase())
            ) {
              // if (IdmatchingItems(newdata, items.id)) {
              newdata.push(items);
              console.log('namesearch', items);

              // }
            }
          })
        );
        console.log('amtriggering', newdata);

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
