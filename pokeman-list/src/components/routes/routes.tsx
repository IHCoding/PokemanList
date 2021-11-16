import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Public Routes
const PokemonDetail = React.lazy(
  () => import('../pokemon/pokemon-details-page')
);

const PokemonCardList = React.lazy(
  () => import('../pokemon/pokemon-card-list')
);

export const AppRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={null}>
      <Router>
        <Routes>
          <Route path="/details/:pokemonId" element={<PokemonDetail />} />
          <Route path="/" element={<PokemonCardList />} />
          <Route path="*" element={<div>Not found </div>} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default AppRoutes;
