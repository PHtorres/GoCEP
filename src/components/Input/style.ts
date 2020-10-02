import styled, {css} from 'styled-components/native';

interface ContainerProps{
    focado:boolean;
}

export const Container = styled.View<ContainerProps>`

border: 2px solid ${props => props.theme.corTexto};
padding: 5px;
border-radius: 7px;
display: flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
margin: 10px 0 15px 0;

${(props) =>
        props.focado &&
        css`
           border-color: ${props.theme.corPrimaria};
`}

`;


export const CaixaTexto = styled.TextInput`

flex: 1;
color: ${props => props.theme.corTexto};
font-size: 20px;
margin-left: 5px;

`;