import React from 'react';
import IEndereco from '../../models/IEndereco';
import { Container, Linha, Titulo, Info } from './styles';

interface EnderecoProps {
    endereco: IEndereco;
}

const Endereco: React.FC<EnderecoProps> = ({ endereco }) => {
    return (
        <Container>
            <Linha>
                <Titulo>CEP:</Titulo>
                <Info>{endereco.cep}</Info>
            </Linha>
            <Linha>
                <Titulo>Logradouro:</Titulo>
                <Info>{endereco.logradouro}</Info>
            </Linha>
            {
                endereco.complemento.length > 0 &&
                <Linha>
                    <Titulo>Complemento:</Titulo>
                    <Info>{endereco.complemento}</Info>
                </Linha>
            }
            <Linha>
                <Titulo>Bairro:</Titulo>
                <Info>{endereco.bairro}</Info>
            </Linha>
            <Linha>
                <Titulo>Cidade:</Titulo>
                <Info>{endereco.localidade}</Info>
            </Linha>
            <Linha>
                <Titulo>UF:</Titulo>
                <Info>{endereco.uf}</Info>
            </Linha>
        </Container>
    );
}

export default Endereco;