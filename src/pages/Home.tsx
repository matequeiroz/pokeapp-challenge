/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StoreState } from '../store';
import { loadPokemonRequest } from '../store/pokemon/actions';

const Home = () => {
  const dispatch = useDispatch();
  const { pokemon } = useSelector((state: StoreState) => state);

  useEffect(() => {
    dispatch(loadPokemonRequest());
  }, [dispatch]);

  console.log(pokemon);
  return <h1>teste</h1>;
};

export default Home;
