import React from 'react';
import styled from 'styled-components';

interface Props {
  gotoNextPage: () => void;
  gotoPrevPage: () => void;
  nextPage: string | null;
  prevPage: string | null;
}

const PokemonPaginationRoot = styled.div`
  display: flex;
  position: absolute;
  top: 5%;
  right: 4%;
  border-radius: 4px;
  background-color: #3b3b3b;
  margin-top: 50px;
`;

export const PokemonPagination: React.FC<Props> = (props: Props) => {
  const { gotoNextPage, gotoPrevPage, nextPage, prevPage } = props;

  return (
    <PokemonPaginationRoot>
      {prevPage && <button onClick={gotoPrevPage}> Previous {'<'}</button>}
      {nextPage && <button onClick={gotoNextPage}>Next {'>'}</button>}
    </PokemonPaginationRoot>
  );
};

export default PokemonPagination;
