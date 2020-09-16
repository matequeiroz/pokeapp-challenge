import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { PokemonState } from './pokemon/types';

export interface StoreState {
  pokemon: PokemonState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<StoreState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
