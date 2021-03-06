import styled from 'styled-components/native';

export const Container = styled.View`

flex:1;

`;


export const Cabecalho = styled.View`

border-bottom-width: 1px;
border-bottom-color:${props => props.theme.corTexto};

flex-direction:row;
justify-content:space-between;
align-items:center;
padding: 15px 5px;

`;

export const AreaUsuario = styled.View`

flex-direction:row;
justify-content:space-between;
align-items:center;

`;


export const AvatarUsuario = styled.View`

width: 50px;
height:50px;
border-radius: 25px;
background-color: ${props => props.theme.fundoSecundario};
justify-content:center;
align-items:center;
margin-right: 5px;

`;


export const TextoAvatarUsuario = styled.Text`

color:${props => props.theme.corTexto};
font-size:20px;

`;


export const TextoUsuario = styled.Text`

color:${props => props.theme.corTexto};
font-size:18px;

`;

export const AreaOpcoes = styled.View`

margin-top: 30px;
padding:5px;

`;

export const Opcao = styled.TouchableOpacity`

flex-direction: row;
justify-content:space-between;
align-items:center;
margin-bottom:20px;

`;

export const AreaIconeTextoOpcao = styled.View`

margin-right: 5px;
flex-direction:row;
justify-content:space-between;
align-items:center;

`;

export const TextoOpcao = styled.Text`

color:${props => props.theme.corTexto};
font-size:16px;
margin-left:5px;

`;