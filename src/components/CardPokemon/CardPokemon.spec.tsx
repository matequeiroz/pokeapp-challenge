import React from 'react';
import { render } from '@testing-library/react';

import CardPokemon from './index';
import { PokemonDetail } from '../../store/pokemon/types';

/**
 * @author Mateus Queiroz <mateusqueirozdev@gmail.com>
 * @description unit tests of the CardPokemon component
 */

describe('CardPokemon Component', () => {
  describe('should be able to show the card with mandatory information such as: pokemon name, photo, skills, shapes and types', () => {
    it('should be able to show the Pokémons name, photo, types, shapes and abilities', () => {
      const detailsMock: PokemonDetail = {
        name: 'bulbasaur',
        abilities: [
          {
            ability: {
              name: 'overgrow',
              url: 'https://pokeapi.co/api/v2/ability/65/',
            },
          },
        ],
        height: 7,
        photo: {
          forms: [
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          ],
          url:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        },
        weight: 69,
        types: ['grass', 'poison'],
      };

      const { getByTestId, getByText, getAllByTestId } = render(
        <CardPokemon
          detail={detailsMock}
          name="bulbasaur"
          key="bulbasaur"
          url="https://pokeapi.co/api/v2/pokemon/1/"
        />,
      );
      expect(getByTestId('photo-pokemon'));

      expect(getByTestId('name-pokemon'));
      expect(getByText('bulbasaur'));

      expect(getByTestId('height-pokemon'));
      expect(getByText('Altura: 7cm'));

      expect(getByTestId('weight-pokemon'));
      expect(getByText('Largura: 69cm'));

      expect(getByTestId('ability-pokemon'));
      expect(getByText('overgrow'));

      expect(getAllByTestId('type-pokemon'));
      expect(getByText('grass'));
      expect(getByText('poison'));

      expect(getAllByTestId('forms-pokemon'));
    });
  });
});
