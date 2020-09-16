/**
 * @author Mateus Queiroz <mateusqueirozdev@gmail.com>
 * @description Definitions of types
 */

export enum PokemonTypes {
  GET_POKEMON_ALL_REQUEST = '@pokemon/GET_REQUEST_ALL',
  GET_POKEMON_ALL_SUCCESS = '@pokemon/GET_REQUEST_ALL_SUCCESS',
  GET_POKEMON_ALL_FAILED = '@pokemon/GET_REQUEST_ALL_FAILED',
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonState {
  readonly data: Array<Pokemon>;
  readonly loading: boolean;
  readonly error: boolean;
}
