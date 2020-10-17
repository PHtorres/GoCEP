import React from 'react';
import TextoDestaque from '../../components/TextoDestaque';
import { Container } from './styles';

const Menu: React.FC = () => {
  return (
      <Container>
          <TextoDestaque>Aqui é o menu</TextoDestaque>
      </Container>
  );
}

export default Menu;