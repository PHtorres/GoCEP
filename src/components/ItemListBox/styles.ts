import styled from 'styled-components/native';

export const Container = styled.View`
padding:15px;
background-color:${props => props.theme.fundoSecundario};
border-bottom-width: 1px;
border-bottom-color:${props => props.theme.fundoForte};
`;

export const Texto = styled.Text`

font-size:18px;
color: ${props => props.theme.corTexto};

`;