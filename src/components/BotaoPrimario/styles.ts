import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`

margin:5px 0 5px 0;
width:100%;
border: solid 1px ${props => props.theme.corTexto};
padding:10px;
border-radius:15px;
justify-content:center;
align-items:center;

`;

export const TextoBotao = styled.Text`

font-size:20px;
color:${props => props.theme.corPrimaria};

`;