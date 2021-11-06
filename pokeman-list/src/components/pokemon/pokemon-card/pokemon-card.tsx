import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  PokemonItem,
  PokemonItemDetails,
} from '../../../utils/cmd/data-types/data-types';
import Image from '../../../utils/custom-components/image/image';

const PokemonCardContainerRoot = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: #25d280;
  box-shadow: 2px 2px 2px;
  border-radius: 8px;
  margin: 8px;
  padding: 0 16px;
  min-width: 300px;
  min-height: 300px;

  &:hover {
    transform: scale(1.05);
  }
`;

const PokemonCardImage = styled(Image)`
  width: 300px;
  height: 300px;
  margin: 8px 2px;
`;

const PokemonCardContentContainer = styled.div`
  padding: 4px;
  background-color: #25d289;
  text-align: left;
  font-family: 'Roboto', serif;
  font-size: 14px;
  margin-bottom: 4px;
`;

const PokemonCardContentDetails = styled.h3`
  font-weight: normal;
  color: #fff;
  margin: 8px;
  display: block;
  white-space: wrap;
  text-transform: capitalize;
  box-shadow: 0px 1px 0px lightGrey;
`;

interface Props {
  pokemonItem: PokemonItem;
  key: string;
}

const PokemonCard: React.FC<Props> = ({ pokemonItem }: Props) => {
  const [pokemonItemDetails, setPokemonDetails] =
    useState<PokemonItemDetails>();

  const getPokemonItem = async () => {
    const res = await fetch(pokemonItem.url);
    const data = await res.json();
    setPokemonDetails(data);
  };

  useEffect(() => {
    getPokemonItem();
  }, [pokemonItem]);

  return (
    <PokemonCardContainerRoot>
      <PokemonCardImage
        src={pokemonItemDetails?.sprites.other.dream_world.front_default}
      />
      <PokemonCardContentContainer>
        <PokemonCardContentDetails>
          Name:&nbsp; {pokemonItemDetails?.name}
        </PokemonCardContentDetails>
        <PokemonCardContentDetails>
          Height:&nbsp; {pokemonItemDetails?.height}
        </PokemonCardContentDetails>
        <PokemonCardContentDetails>
          Weight:&nbsp; {pokemonItemDetails?.weight}
        </PokemonCardContentDetails>
        <PokemonCardContentDetails>
          Abilities:&nbsp;
          {pokemonItemDetails?.abilities.map((item, index) => (
            <div key={index}>{item.ability.name}&nbsp;</div>
          ))}
        </PokemonCardContentDetails>
      </PokemonCardContentContainer>
    </PokemonCardContainerRoot>
  );
};

export default PokemonCard;
