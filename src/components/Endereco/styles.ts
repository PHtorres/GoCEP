import styled from 'styled-components/native';

export const Container = styled.View`

margin: 5px 0 5px 0;
padding: 10px;
border-radius: 15px;
background-color: ${props => props.theme.fundoSecundario};

`;

export const Linha = styled.View`

flex-direction:row;
justify-content:space-between;
align-items:center;

`;

const Texto = styled.Text`

font-size:20px;
margin: 5px;

`;

export const Titulo = styled(Texto)`

color:${props => props.theme.corTexto};
text-align:right;

`;

export const Info = styled(Texto)`

color:${props => props.theme.corPrimaria};
font-weight:bold;
text-align:left;

`;