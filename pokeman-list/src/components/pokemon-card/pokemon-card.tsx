import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  PokemonItem,
  PokemonItemDetails,
} from '../../utils/cmd/data-types/data-types';
import Image from '../../utils/custom-components/image/image';

const PokemonCardItemImage = styled(Image)`
  position: relative;
  width: 100%;
`;

const PokemonCardItemContent = styled.div`
  text-font: 12px;
  margin-top: 8px;

  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const PokemonCardContainerRoot = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 8px;
`;

interface Props {
  pokemonItem: PokemonItem;
  key: string;
}

const PokemonCard: React.FC<Props> = (props: Props) => {
  const { pokemonItem } = props;

  const [pokemonItemDetails, setPokemonDetails] =
    useState<PokemonItemDetails>();

  const getPokemonItem = async () => {
    const res = await fetch(pokemonItem.url);
    const data = await res.json();
    setPokemonDetails(data);

    console.log(data);
  };

  useEffect(() => {
    getPokemonItem();
  }, []);

  return (
    <PokemonCardContainerRoot>
      <PokemonCardItemImage
        src={pokemonItemDetails?.sprites.other.dream_world.front_default}
      />
      <PokemonCardItemContent>
        Name: {pokemonItemDetails?.name}
        Height:{pokemonItemDetails?.height}
        Weight:{pokemonItemDetails?.weight}
        Abilities:
        {pokemonItemDetails?.abilities.map((item, index) => (
          <div>{item.ability.name}</div>
        ))}
      </PokemonCardItemContent>
    </PokemonCardContainerRoot>
  );
};

export default PokemonCard;
