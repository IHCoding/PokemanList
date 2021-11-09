import React from 'react';
import styled from 'styled-components';
import PokemonCardList from './components/pokemon/pokemon-card-list';
import { ThemeProvider } from 'styled-components';
import theme from './utils/themes/PokemanTheme';
const AppRoot = styled.div``;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoot>
        <PokemonCardList />
      </AppRoot>
    </ThemeProvider>
  );
};

export default App;
