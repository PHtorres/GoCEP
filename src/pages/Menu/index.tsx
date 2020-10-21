import React from 'react';
import LogoGoCep from '../../components/LogoGoCEP';
import ToggleLightDark from '../../components/ToggleLightDark';
import { AreaUsuario, AvatarUsuario, Cabecalho, Container, TextoAvatarUsuario, TextoUsuario } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <LogoGoCep />
      <Cabecalho>
        <AreaUsuario>
          <AvatarUsuario>
            <TextoAvatarUsuario>PH</TextoAvatarUsuario>
          </AvatarUsuario>
          <TextoUsuario>PH Torres</TextoUsuario>
        </AreaUsuario>
        <ToggleLightDark />
      </Cabecalho>
    </Container>
  );
}

export default Menu;