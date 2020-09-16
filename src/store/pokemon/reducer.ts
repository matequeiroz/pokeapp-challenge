import { Reducer } from 'redux';

import { PokemonState, PokemonTypes } from './types';
/**
 * @description initial state of reducer pokemon
 */
const INITIAL_STATE: PokemonState = {
  data: [],
  error: false,
  loading: true,
};

/**
 * @author Mateus Queiroz <mateusqueirozdev@gmail.com>
 * @param state
 * @param action
 * @description reducer of pokemon
 */
const reducer: Reducer<PokemonState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonTypes.GET_POKEMON_ALL_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case PokemonTypes.GET_POKEMON_ALL_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false,
      };
    }

    case PokemonTypes.GET_POKEMON_ALL_FAILED: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return INITIAL_STATE;
    }
  }
};

export default reducer;
