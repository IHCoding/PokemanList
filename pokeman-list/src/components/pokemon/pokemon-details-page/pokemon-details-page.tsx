import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PokemonCard from '../pokemon-card';

const CardWrapper = styled.div`
  margin: 2% 10%;
  width: auto;
  height: auto;
  min-width: 300px;
  min-height: 300px;
`;

const PokemonDetailsPage: React.FC = () => {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();

  return (
    <CardWrapper>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <PokemonCard pokemonItemDetails={state} />
    </CardWrapper>
  );
};

export default PokemonDetailsPage;
