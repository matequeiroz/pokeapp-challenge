/**
 * @author Mateus Queiroz <mateusqueirozdev@gmail.com>
 * @description Definitions of actions
 */

import { PokemonTypes, Pokemon } from './types';

/**
 * @function loadPokemonRequest
 * @description request of pokemon
 */
export function loadPokemonRequest() {
  return {
    type: PokemonTypes.GET_POKEMON_ALL_REQUEST,
  };
}

/**
 * @function loadPokemonSuccess
 * @description get all pokemon success
 */
export function loadPokemonSuccess(data: Array<Pokemon>) {
  return {
    type: PokemonTypes.GET_POKEMON_ALL_SUCCESS,
    payload: data,
  };
}

/**
 * @function loadPokemonFailed
 * @description failed of request
 */
export function loadPokemonFailed() {
  return {
    type: PokemonTypes.GET_POKEMON_ALL_FAILED,
  };
}
