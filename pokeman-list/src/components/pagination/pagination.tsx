import React from 'react';

interface Props {
  gotoNextPage: () => void;
  gotoPrevPage: () => void;
}

export const Pagination: React.FC<Props> = (props: Props) => {
  const { gotoNextPage, gotoPrevPage } = props;

  return (
    <div>
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
    </div>
  );
};

export default Pagination;
