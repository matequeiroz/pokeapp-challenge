import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../services/api';
import { PokemonTypes } from './types';
import { loadPokemonSuccess, loadPokemonFailed } from './actions';

function* getAll() {
  try {
    const response = yield call(api.get, '/pokemon');
    yield put(loadPokemonSuccess(response.data));
  } catch (error) {
    yield put(loadPokemonFailed());
  }
}

export default all([takeLatest(PokemonTypes.GET_POKEMON_ALL_REQUEST, getAll)]);
