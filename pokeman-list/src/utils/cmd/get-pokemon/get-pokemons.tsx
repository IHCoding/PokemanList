const getPokemons = async (pageLimit = 20) => {
  let API_URL = `https://pokeapi.co/api/v2/pokemon?limit=${pageLimit}&offset=0`;

  const response: any = await fetch(API_URL);
  const data = await response.json();

  return data;
};
export default getPokemons;
