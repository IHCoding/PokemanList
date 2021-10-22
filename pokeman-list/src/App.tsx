import React from 'react';
import styled from 'styled-components';
import Header from './components/header';
import PokemonCardList from './components/pokemon/pokemon-card-list';
import { ThemeProvider } from 'styled-components';
import theme from './utils/themes/PokemanTheme';
const AppRoot = styled.div``;

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0.5rem;
  min-height: 100vh;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoot>
        <Header />

        <AppBody>
          <PokemonCardList />
        </AppBody>
      </AppRoot>
    </ThemeProvider>
  );
};

export default App;
