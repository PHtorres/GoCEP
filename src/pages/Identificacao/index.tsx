import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import Input from '../../components/Input';
import TextoDestaque from '../../components/TextoDestaque';
import BotaoPrimario from '../../components/BotaoPrimario';

import { Container, AreaLogo, AreaForm } from './styles';
import { useUsuario } from '../../hooks/hUsuario';
import LogoGoCep from '../../components/LogoGoCEP';

const Identificacao: React.FC = () => {
    const [nome, setNome] = useState('');
    const { adicionarNomeUsuario } = useUsuario();

    const guardarNomeUsuario = async (): Promise<void> => {
        Keyboard.dismiss();
        if (nome.length < 4) {
            Alert.alert('Seu nome está muito curto. Pode melhorar?');
            return;
        }

        await adicionarNomeUsuario(nome);
    }
    return (
        <Container>
            <AreaLogo>
                <LogoGoCep />
            </AreaLogo>
            <AreaForm>
                <TextoDestaque>Fala pra gente: qual o seu nome?</TextoDestaque>
                <Input
                    icone="user"
                    placeholder="Digite aqui seu nome"
                    value={nome}
                    onChangeText={(texto) => setNome(texto)} />
                <BotaoPrimario onPress={guardarNomeUsuario}>Pronto</BotaoPrimario>
            </AreaForm>
        </Container>
    );
}

export default Identificacao;