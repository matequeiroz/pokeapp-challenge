import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';

import { StoreState } from '../../store';
import { loadPokemonRequest } from '../../store/pokemon/actions';
import { Container } from './styles';
import CardPokemon from '../../components/CardPokemon';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { pokemon } = useSelector((state: StoreState) => state);

  useEffect(() => {
    dispatch(loadPokemonRequest());
  }, [dispatch]);

  return (
    <Container>
      <Grid container>
        {pokemon.data.results.map(pokemonItem => (
          <CardPokemon
            name={pokemonItem.name}
            detail={pokemonItem.detail}
            url={pokemonItem.url}
            key={pokemonItem.name}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
