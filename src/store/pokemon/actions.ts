/**
 * @author Mateus Queiroz <mateusqueirozdev@gmail.com>
 * @description Definitions of actions
 */

import { PokemonTypes, PokemonData, PokemonDetail } from './types';

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
 * @function loadPokemonDetailRequest
 * @description request of pokemon detail
 */
export function loadPokemonDetailRequest() {
  return {
    type: PokemonTypes.GET_POKEMON_DETAILS_REQUEST,
  };
}

/**
 * @function loadPokemonAllSuccess
 * @description get all pokemon success
 */
export function loadPokemonAllSuccess(data: PokemonData) {
  return {
    type: PokemonTypes.GET_POKEMON_ALL_SUCCESS,
    payload: data,
  };
}

/**
 * @function getNextPageSuccess
 * @description get more pokemon success
 */
export function getNextPageSuccess(data: PokemonData) {
  return {
    type: PokemonTypes.GET_POKEMON_NEXT_PAGE_SUCCESS,
    payload: data,
  };
}

/**
 * @function loadPokemonDetailSuccess
 * @description get details of all pokemon success
 */
export function loadPokemonDetailSuccess(data: PokemonDetail[]) {
  return {
    type: PokemonTypes.GET_POKEMON_DETAILS_SUCCESS,
    payload: data,
  };
}

/**
 * @function loadPokemonAllFailed
 * @description failed of request
 */
export function loadPokemonAllFailed() {
  return {
    type: PokemonTypes.GET_POKEMON_ALL_FAILED,
  };
}

/**
 * @function loadPokemonDetailFailed
 * @description failed of request
 */
export function loadPokemonDetailFailed() {
  return {
    type: PokemonTypes.GET_POKEMON_DETAILS_FAILED,
  };
}

/**
 * @function getNextPageRequest
 * @description request get more
 */
export function getNextPageRequest(nextUrl: string) {
  return {
    type: PokemonTypes.GET_POKEMON_NEXT_PAGE_REQUEST,
    payload: nextUrl,
  };
}

/**
 * @function getPreviousPageRequest
 * @description request get more
 */
export function getPreviousPageRequest(previousUrl: string) {
  return {
    type: PokemonTypes.GET_POKEMON_NEXT_PAGE_REQUEST,
    payload: previousUrl,
  };
}
