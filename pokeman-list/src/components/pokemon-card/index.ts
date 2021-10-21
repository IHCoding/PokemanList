
import PokemonCard from './pokemon-card';

export { PokemonCard };

export default PokemonCard;


// import axios from 'axios';
// import React, { useEffect } from 'react';
// import styled from 'styled-components';
// import { resourceLimits } from 'worker_threads';
// import { PokemonItem } from '../../utils/cmd/data-types/data-types';
// import Image from '../../utils/custom-components/image/image';

// const API_URL = 'https:pokeapi.co/api/v2/pokemon?limit=20';

// const PokemonCardContainerRoot = styled.div<{ imageLoaded: boolean; }>`
//   display: flex;
//   flex-direction: column;
//   cursor: pointer;
//   padding: 8px;
// `;

// const PokemonCardItemImage = styled(Image)`
//   position: relative;
//   width: 100%;
// `;

// const PokemonCardItemContent = styled.div`
//   text-font: 12px;
//   margin-top: 8px;

//   transition: transform 250ms ease-in-out;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// // interface Props {
// //   pokemonItem: PokemonItem[];
// //   children: React.ReactNode | React.ReactNode[];
// // }

// export const PokemonCard: React.FC = (props) => {
//   const [hovered, setHovered] = React.useState(false);
//   const [loading, setLoading] = React.useState(false);
//   const [imageLoaded, setImageLoaded] = React.useState(false);
//   const [pokemon, setPokemon] = React.useState<string[]>([]);
//   const [loadItems, setLoadItems] = React.useState(API_URL);

//   const getPokemons = async () => {
//     setLoading(true);
//     const response: any = await fetch(loadItems);
//     const data = await response.json();

//     setLoadItems(data.next);

//     setPokemon(response.data.results[0].name);
//     setLoading(false);

//     console.log(response.data.results);

//     const getEachPokemon = (result: any) => {
//       result.forEach(async (element: any) => {
//         const response = await fetch(
//           `https:pokeapi.co/api/v2/pokemon/${element.name}`
//         );
//         const data = await response.json();
//         setPokemon((currentArrayList) => [...currentArrayList, data]);
//       });
//     };

//     getEachPokemon(data.results);
//     await console.log(pokemon);
//   };

//   React.useEffect(() => {
//     getPokemons();
//   }, []);

//   const imageUrl = `{https://}`;

//   return (
//     <PokemonCardContainerRoot
//       imageLoaded= { imageLoaded };
//   onMouseOver = {() => setHovered(true)}
// onMouseLeave = {() => setHovered(false)}
//     >
//   <PokemonCardItemImage
//         src={ imageUrl; }
// onLoad = {() => setImageLoaded(true)}
// />
//   < PokemonCardItemContent >
//   <h1>{ pokemon } < /h1>
//   < /PokemonCardItemContent>
//   < /PokemonCardContainerRoot>
//   );
// };

// export default PokemonCard;
