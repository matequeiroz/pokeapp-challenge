import { Reducer } from 'redux';

import { PokemonState, PokemonTypes, PokemonDetail } from './types';
/**
 * @description initial state of reducer pokemon
 */
const INITIAL_STATE: PokemonState = {
  data: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  },
  error: false,
  loading: false,
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
        data: action.payload,
      };
    }

    case PokemonTypes.GET_POKEMON_DETAILS_SUCCESS: {
      const newState = [...state.data.results];
      action.payload.map(
        ({ name, abilities, height, photo, weight, types }: PokemonDetail) => {
          newState.find(item => {
            if (item.name === name) {
              item.detail = {
                name,
                abilities,
                height,
                photo,
                weight,
                types,
              };
            }
          });
        },
      );

      return {
        ...state,
        data: {
          ...state.data,
          results: newState,
        },
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
