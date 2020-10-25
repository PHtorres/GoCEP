import React from 'react';
import Input from '../../components/Input';
import TextoDestaque from '../../components/TextoDestaque';

import { Container } from './styles';

const ConsultaPorEndereco: React.FC = () => {
    return (
        <Container>
            <TextoDestaque>Pesquisar endereço</TextoDestaque>
            <Input icone="light" placeholder="UF"/>
        </Container>
    );
}

export default ConsultaPorEndereco;