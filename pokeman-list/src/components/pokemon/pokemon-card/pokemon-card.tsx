import React from 'react';
import styled from 'styled-components';
import { PokemonItemDetails } from '../../../utils/cmd/data-types/data-types';
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
  pokemonItemDetails: PokemonItemDetails;
  key: string;
}

const PokemonCard: React.FC<Props> = (props: Props) => {
  // console.log('pokemonItem', props.pokemonItemDetail);

  // const [pokemonItemDetail, setPokemonDetails] =
  //   useState<pokemonItemDetail>();

  // console.log('pokemonItemDetail', pokemonItemDetail);

  // const getPokemonItem = async () => {
  //   const res = await fetch(pokemonItem.url);
  //   console.log('datatest', pokemonItem.url);

  //   const data = await res.json();
  //   setPokemonDetails(data);
  // };

  // useEffect(() => {
  //   getPokemonItem();
  // }, [pokemonItem]);

  return (
    <PokemonCardContainerRoot>
      <PokemonCardImage
        src={props.pokemonItemDetails?.sprites.other.dream_world.front_default}
      />
      <PokemonCardContentContainer>
        <PokemonCardContentDetails>
          Name:&nbsp; {props.pokemonItemDetails?.name}
        </PokemonCardContentDetails>
        <PokemonCardContentDetails>
          Height:&nbsp; {props.pokemonItemDetails?.height}
        </PokemonCardContentDetails>
        <PokemonCardContentDetails>
          Weight:&nbsp; {props.pokemonItemDetails?.weight}
        </PokemonCardContentDetails>
        <PokemonCardContentDetails>
          Abilities:&nbsp;
          {props.pokemonItemDetails?.abilities.map((item, index) => (
            <div key={index}>{item.ability.name}&nbsp;</div>
          ))}
        </PokemonCardContentDetails>
      </PokemonCardContentContainer>
    </PokemonCardContainerRoot>
  );
};

export default PokemonCard;
