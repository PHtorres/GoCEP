import styled from 'styled-components/native';

export const Container = styled.View`

justify-content:center;
align-items:center;
width:100%;
margin:10px;

`;

export const TextoLogo = styled.Text`


font-size:40px;
font-weight:bold;
color:${props => props.theme.corPrimaria};
font-family:${props => props.theme.fonteLogo};

`;