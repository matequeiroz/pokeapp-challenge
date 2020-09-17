import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';

import { StoreState } from '../../store';
import {
  loadPokemonRequest,
  getNextPageRequest,
} from '../../store/pokemon/actions';
import { Container, ButtonSearchContainer } from './styles';
import CardPokemon from '../../components/CardPokemon';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { pokemon } = useSelector((state: StoreState) => state);

  useEffect(() => {
    dispatch(loadPokemonRequest());
  }, [dispatch]);

  const handleNextPage = () => {
    const { next } = pokemon.data;
    dispatch(getNextPageRequest(next));
  };

  const handlePreviousPage = () => {
    const { previous } = pokemon.data;
    if (previous) {
      dispatch(getNextPageRequest(previous));
    }
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <ButtonSearchContainer>
            {pokemon.data.previous ? (
              <button onClick={() => handlePreviousPage()} type="button">
                Anterior
              </button>
            ) : (
              <button disabled type="button">
                Anterior
              </button>
            )}

            <button onClick={() => handleNextPage()} type="button">
              Próxima
            </button>
          </ButtonSearchContainer>
        </Grid>
      </Grid>
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
