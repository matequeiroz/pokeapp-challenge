import React from 'react';

import { Container } from './styles';
import Logo from '../../assets/logo.png';

const Navbar = () => (
  <Container>
    <p>Olá, seja bem-vindo ao PokeApp</p>
    <img src={Logo} alt="Logo" />
  </Container>
);

export default Navbar;
