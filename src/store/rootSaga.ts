import { all } from 'redux-saga/effects';

import sagas from './pokemon/sagas';

export default function* loaderSagas() {
  return yield all([sagas]);
}
