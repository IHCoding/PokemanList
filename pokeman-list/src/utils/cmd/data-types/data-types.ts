

export interface PokemonItem {
    url: string;
    name: string;
    pokemonItemDetails: PokemonItemDetails;
}

export interface PokemonItemDetails {
    name: string;
    weight: string;
    height: string;
    abilities: [{
        ability: {
            name: string;
            url: string;
        };
        is_hidden: boolean;
        slot: number;
    }];
    sprites: {
        other: {
            dream_world: {
                front_default: string;
            };
        };
    };
}

