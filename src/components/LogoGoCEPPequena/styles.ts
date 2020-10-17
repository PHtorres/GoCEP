import styled from 'styled-components/native';

export const Container = styled.View`

justify-content:center;
align-items:center;
width:100%;
margin:10px;

`;

interface TextoLogoProps{
    cor:string;
}


export const TextoLogo = styled.Text<TextoLogoProps>`


font-size:25px;
font-weight:bold;
color:${props => props.cor};
font-family:${props => props.theme.fonteLogo};

`;