import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import PokemonContext from '../../../context/pokemon-context';

const PokemonPaginationRoot = styled.div`
  display: flex;
  position: absolute;
  top: 5%;
  right: 40px;
  border-radius: 4px;
  margin-top: 50px;
  margin-right: 5%;
`;

const ButtonsStyle = styled.button`
  margin: 4px;
  border: none;

  background-color: ${(props) => props.theme.palette.background.level3};
`;

const ItemPerPageSelected = styled.select`
  margin: 8px;
  border-radius: 4px;
`;

interface Props {
  gotoNextPage: () => void;
  gotoPrevPage: () => void;
  nextPage: string | null;
  prevPage: string | null;
}

const PokemonsPerPage: number[] = [5, 10, 20, 30, 40, 50, 100];

export const PokemonPagination: React.FC<Props> = (props: Props) => {
  const { gotoNextPage, gotoPrevPage, nextPage, prevPage } = props;

  const [pageLimit, setPageLimit] = useState<number>(20);

  const pokemonCtx = useContext(PokemonContext);

  const handleItemsPerPage = (value: any) => {
    console.log('value, value');
    setPageLimit(value);
    localStorage.setItem('pagelimit', value);
    pokemonCtx.getItemsPerPage(value);
  };

  useEffect(() => {
    let currentValue = localStorage.getItem('pagelimit');

    if (currentValue) {
      setPageLimit(Number(currentValue));
      handleItemsPerPage(currentValue);
    }
  }, []);

  return (
    <PokemonPaginationRoot>
      <ItemPerPageSelected
        value={pageLimit}
        onChange={(event) => handleItemsPerPage(event.target.value)}
      >
        <label>Items per page:</label>
        {PokemonsPerPage.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </ItemPerPageSelected>
      <ButtonsStyle>
        {prevPage && <button onClick={gotoPrevPage}>{'<'} Previous </button>}
        {nextPage && <button onClick={gotoNextPage}>Next {'>'}</button>}
      </ButtonsStyle>
    </PokemonPaginationRoot>
  );
};

export default PokemonPagination;
