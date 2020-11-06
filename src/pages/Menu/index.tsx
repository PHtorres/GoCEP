import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ToggleLightDark from '../../components/ToggleLightDark';
import { useUsuario } from '../../hooks/hUsuario';
import { useLightDark } from '../../hooks/HLightDark';
import {
  AreaUsuario,
  AvatarUsuario,
  Cabecalho,
  Container,
  TextoAvatarUsuario,
  TextoUsuario,
  AreaOpcoes,
  Opcao,
  AreaIconeTextoOpcao,
  TextoOpcao
} from './styles';
import { Alert } from 'react-native';

const Menu: React.FC = () => {
  const { removerNomeUsuario, nome } = useUsuario();
  const { temaPadrao } = useLightDark();
  return (
    <Container>
      <Cabecalho>
        <AreaUsuario>
          <AvatarUsuario>
            <TextoAvatarUsuario>
              {nome.substring(0, 2).toUpperCase()}
            </TextoAvatarUsuario>
          </AvatarUsuario>
          <TextoUsuario>{nome}</TextoUsuario>
        </AreaUsuario>
        <ToggleLightDark />
      </Cabecalho>
      <AreaOpcoes>
        <Opcao onPress={() => { Alert.alert('históritco') }}>
          <AreaIconeTextoOpcao>
            <MaterialIcons
              name="history"
              color={temaPadrao.corTexto}
              size={30} />
            <TextoOpcao>Histórico</TextoOpcao>
          </AreaIconeTextoOpcao>
          <MaterialIcons
            name="arrow-forward-ios"
            color={temaPadrao.corTexto}
            size={30} />
        </Opcao>
        <Opcao onPress={() => { Alert.alert('Se vire') }}>
          <AreaIconeTextoOpcao>
            <MaterialIcons
              name="help-outline"
              color={temaPadrao.corTexto}
              size={30} />
            <TextoOpcao>Ajuda</TextoOpcao>
          </AreaIconeTextoOpcao>
          <MaterialIcons
            name="arrow-forward-ios"
            color={temaPadrao.corTexto}
            size={30} />
        </Opcao>
        <Opcao onPress={removerNomeUsuario}>
          <AreaIconeTextoOpcao>
            <AntDesign
              name="logout"
              color={temaPadrao.corTexto}
              size={30} />
            <TextoOpcao>Sair</TextoOpcao>
          </AreaIconeTextoOpcao>
          <MaterialIcons
            name="arrow-forward-ios"
            color={temaPadrao.corTexto}
            size={30} />
        </Opcao>
      </AreaOpcoes>
    </Container>
  );
}

export default Menu;