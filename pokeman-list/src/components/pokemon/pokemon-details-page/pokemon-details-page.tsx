import React from 'react';
import { useLocation } from 'react-router-dom';
import PokemonCard from '../pokemon-card';
function PokemonDetailsPage() {
  const location = useLocation();
  const state = location.state;

  return (
    <div>
      <PokemonCard pokemonItemDetails={state}></PokemonCard>
    </div>
  );
}

export default PokemonDetailsPage;
