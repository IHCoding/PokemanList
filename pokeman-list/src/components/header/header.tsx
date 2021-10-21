import React from 'react';
import styled from 'styled-components';

const HeaderRoot = styled.header`
  display: flex;
  height: 75px;
  align-items: center;
  background-color: #484752;
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  width: 1340px;
  min-width: 1070px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const HeaderSub = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;
`;

const HeaderBrand = styled.div`
  color: #ffffff;
  background-color: none;
  font-size: 30px;
  margin-right: auto;
  margin-left: 10px;
`;

export const Header: React.FC = () => {
  return (
    <HeaderRoot>
      <HeaderInner>
        <HeaderMain>
          <HeaderBrand>PokemanList</HeaderBrand>
        </HeaderMain>

        <HeaderSub>{/* <HeaderSearch /> */}</HeaderSub>
      </HeaderInner>
    </HeaderRoot>
  );
};

export default Header;
