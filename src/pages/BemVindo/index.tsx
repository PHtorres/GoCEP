import React from 'react';
import { Text } from 'react-native';
import LogoGoCep from '../../components/LogoGoCEP';
import TextoDestaque from '../../components/TextoDestaque';

import { Container } from './styles';

const BemVindo: React.FC = () => {
    return (
        <Container>
            <LogoGoCep />
            <TextoDestaque>
                Seja bem-vindo ao goCEP.
            </TextoDestaque>
            <TextoDestaque>
                Consulte CEPs e históricos.
            </TextoDestaque>
            <TextoDestaque>
                Confirme endereços no Maps.
            </TextoDestaque>
        </Container>
    );
}

export default BemVindo;