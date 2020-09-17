/**
 * @author Mateus Queiroz <mateusqueirozdev@gmail.com>
 * @description Definitions of types
 */

export enum PokemonTypes {
  GET_POKEMON_ALL_REQUEST = '@pokemon/GET_REQUEST_ALL',
  GET_POKEMON_ALL_SUCCESS = '@pokemon/GET_REQUEST_ALL_SUCCESS',
  GET_POKEMON_ALL_FAILED = '@pokemon/GET_REQUEST_ALL_FAILED',
  GET_POKEMON_DETAILS_SUCCESS = '@pokemon/GET_REQUEST_DETAILS_SUCCESS',
  GET_POKEMON_DETAILS_FAILED = '@pokemon/GET_REQUEST_DETAILS_FAILED',
  GET_POKEMON_DETAILS_REQUEST = '@pokemon/GET_REQUEST_DETAILS_REQUEST',
  GET_POKEMON_NEXT_PAGE_REQUEST = '@pokemon/GET_POKEMON_NEXT_PAGE_REQUEST',
  GET_POKEMON_NEXT_PAGE_SUCCESS = '@pokemon/GET_POKEMON_NEXT_PAGE_SUCCESS',
  GET_POKEMON_NEXT_PAGE_FAILED = '@pokemon/GET_POKEMON_NEXT_PAGE_FAILED',
  GET_POKEMON_PREVIOUS_PAGE_REQUEST = '@pokemon/GET_POKEMON_PREVIOUS_PAGE_REQUEST',
  GET_POKEMON_PREVIOUS_PAGE_SUCCESS = '@pokemon/GET_POKEMON_PREVIOUS_PAGE_SUCCESS',
  GET_POKEMON_PREVIOUS_PAGE_FAILED = '@pokemon/GET_POKEMON_PREVIOUS_PAGE_FAILED',
}

export interface PokemonDetail {
  name: string;
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      };
    },
  ];
  types: string[];
  height: number;
  weight: number;
  photo: {
    forms: string[];
    url: string;
  };
}
export interface Pokemon {
  name: string;
  url: string;
  detail: PokemonDetail;
}

export interface PokemonData {
  results: Pokemon[];
  count: number;
  next: string;
  previous: string | null;
}

export interface PokemonState {
  data: PokemonData;
  loading: boolean;
  error: boolean;
}
