import styled from 'styled-components/native';

export const Container = styled.View`

margin: 5px;

`;

export const CaixaSelecao = styled.TouchableOpacity`

border: 2px solid ${props => props.theme.corTexto};
padding: 5px;
border-radius: 7px;
display: flex;
flex-direction:row;
justify-content:space-between;
align-items:center;

`;

export const LabelSelecao = styled.Text`

color: ${props => props.theme.corPrimaria};
font-size: 20px;
margin-left: 5px;
`;

export const TextoSelecionado = styled.Text`

color: ${props => props.theme.corTexto};
font-size: 20px;
margin-left: 5px;
`;