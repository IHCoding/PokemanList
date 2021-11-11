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
  right: 40px;
  border-radius: 4px;
  background-color: #3b3b3b;
  margin-top: 50px;
  margin-right: 5%;
`;

export const PokemonPagination: React.FC<Props> = (props: Props) => {
  // const { gotoNextPage, gotoPrevPage, nextPage, prevPage } = props;

  return (
    <PokemonPaginationRoot>
      {props.prevPage && (
        <button onClick={props.gotoPrevPage}> Previous {'<'}</button>
      )}
      {props.nextPage && (
        <button onClick={props.gotoNextPage}>Next {'>'}</button>
      )}
    </PokemonPaginationRoot>
  );
};

export default PokemonPagination;
