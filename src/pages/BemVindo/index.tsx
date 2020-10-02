import React from 'react';
import { useNavigation } from '@react-navigation/native';
import BotaoPrimario from '../../components/BotaoPrimario';
import LogoGoCep from '../../components/LogoGoCEP';
import TextoDestaque from '../../components/TextoDestaque';

import { Container, AreaTexto } from './styles';

const BemVindo: React.FC = () => {

    const navigation = useNavigation();

    return (
        <Container>
            <LogoGoCep />
            <AreaTexto>
                <TextoDestaque>Seja bem-vindo ao goCEP.</TextoDestaque>
                <TextoDestaque>Consulte CEPs e históricos.</TextoDestaque>
                <TextoDestaque>Confirme endereços no Maps.</TextoDestaque>
            </AreaTexto>
            <BotaoPrimario onPress={() => navigation.navigate('Identificacao')}>
                Continuar
            </BotaoPrimario>
        </Container>
    );
}

export default BemVindo;