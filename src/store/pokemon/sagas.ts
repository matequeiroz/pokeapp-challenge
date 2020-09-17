import { call, put, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import api from '../../services/api';
import { PokemonTypes, PokemonData, PokemonDetail } from './types';
import {
  loadPokemonAllSuccess,
  loadPokemonAllFailed,
  loadPokemonDetailSuccess,
  loadPokemonDetailFailed,
  getNextPageSuccess,
} from './actions';

interface PokemonDetailsData {
  data: {
    name: string;
    abilities: [
      {
        ability: {
          name: string;
          url: string;
        };
      },
    ];
    types: [
      {
        type: {
          name: string;
        };
      },
    ];
    height: number;
    weight: number;
    sprites: {
      back_default: string;
      back_shiny: string;
      front_default: string;
      front_shiny: string;
      other: {
        dream_world: {
          front_default: string;
        };
      };
    };
  };
}

function* getAll() {
  try {
    const response: { data: PokemonData } = yield call(api.get, '/pokemon');
    yield put(loadPokemonAllSuccess(response.data));
    yield getInfo(response.data);
  } catch (error) {
    yield put(loadPokemonAllFailed());
  }
}

function* getNextPage(action: any) {
  try {
    const response: { data: PokemonData } = yield call(
      axios.get,
      action.payload,
    );
    yield put(loadPokemonAllSuccess(response.data));
    yield getInfo(response.data);
  } catch (error) {
    yield put(loadPokemonAllFailed());
  }
}

function* getPrevious(action: any) {
  try {
    const response: { data: PokemonData } = yield call(
      axios.get,
      action.payload,
    );
    yield put(loadPokemonAllSuccess(response.data));
    yield getInfo(response.data);
  } catch (error) {
    yield put(loadPokemonAllFailed());
  }
}

function* getInfo(data: PokemonData) {
  try {
    const result = yield getDetail(data);
    yield put(loadPokemonDetailSuccess(result));
  } catch (error) {
    console.error(error);
    yield put(loadPokemonDetailFailed());
  }
}

function getDetail({ results }: PokemonData) {
  return new Promise((resolve, reject) => {
    const pokemonDetails: PokemonDetail[] = [];
    results.map(async pokemon => {
      const response: PokemonDetailsData = await api.get(
        `/pokemon/${pokemon.name}`,
      );
      pokemonDetails.push({
        name: response.data.name,
        abilities: response.data.abilities,
        weight: response.data.weight,
        height: response.data.height,
        photo: {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          forms: getForms(response),
          url: response.data.sprites.other.dream_world.front_default,
        },
        types: response.data.types.map(typeItem => typeItem.type.name),
      });
    });
    setTimeout(() => {
      resolve(pokemonDetails);
    }, 1000);
  });
}

const getForms = ({ data }: PokemonDetailsData): string[] => {
  const result: string[] = [];

  result.push(
    data.sprites.back_default,
    data.sprites.back_shiny,
    data.sprites.front_default,
    data.sprites.front_shiny,
  );

  return result;
};

export default all([
  takeLatest(PokemonTypes.GET_POKEMON_ALL_REQUEST, getAll),
  takeLatest(PokemonTypes.GET_POKEMON_NEXT_PAGE_REQUEST, getNextPage),
  takeLatest(PokemonTypes.GET_POKEMON_PREVIOUS_PAGE_REQUEST, getPrevious),
]);
