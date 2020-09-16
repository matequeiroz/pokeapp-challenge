import axios from 'axios';

/**
 * @author Mateus Queiroz <mateusqueirozdev@gmail.com>
 * @description configuration default API Client
 */

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://pokeapi.co/api/v2',
});

export default api;
