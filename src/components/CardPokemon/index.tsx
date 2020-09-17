import React from 'react';
import { Grid } from '@material-ui/core';

import { CardPokemonProps } from './types';
import {
  CardContent,
  Abilities,
  HeaderCard,
  BodyContent,
  Types,
  Forms,
  HeightAndWight,
} from './styles';

const CardPokemon = ({ detail, name, url }: CardPokemonProps) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    {detail && (
      <CardContent>
        <Grid item xs={12}>
          <HeaderCard>
            <img src={detail.photo.url} alt="teste" />
            <h3>{detail.name}</h3>
            <HeightAndWight>
              <p>
                Altura: {detail.height}
                cm
              </p>
              <p>
                Largura: {detail.weight}
                cm
              </p>
            </HeightAndWight>
          </HeaderCard>
        </Grid>
        <Grid item xs={12}>
          <BodyContent>
            <Grid item xs={4}>
              <Abilities>
                <h3>Habilidades</h3>
                {detail.abilities.map(ability => (
                  <p>{ability.ability.name}</p>
                ))}
              </Abilities>
            </Grid>

            <Grid item xs={4}>
              <Types>
                <h3>Tipos</h3>
                {detail.types.map(type => (
                  <p>{type}</p>
                ))}
              </Types>
            </Grid>
          </BodyContent>
        </Grid>
        <Grid item xs={12}>
          <Forms>
            <h3>Formas</h3>
            <div>
              {detail.photo.forms.map(formUrl => (
                <img src={formUrl} alt="teste" />
              ))}
            </div>
          </Forms>
        </Grid>
      </CardContent>
    )}
  </Grid>
);

export default CardPokemon;
