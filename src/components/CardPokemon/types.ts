/**
 * @author Mateus Queiroz <mateusqueirozdev@gmail.com>
 * @description Definitions of types
 */

import { PokemonDetail } from '../../store/pokemon/types';

export interface CardPokemonProps {
  name: string;
  url: string;
  detail: PokemonDetail;
}
