import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BotaoPrimario from '../../components/BotaoPrimario';
import Endereco from '../../components/Endereco';
import Input from '../../components/Input';
import TextoDestaque from '../../components/TextoDestaque';
import IEndereco from '../../models/IEndereco';
import APIViaCEP from '../../services/APIViaCEP';

import { Container, AreaForm, AreaResultado } from './styles';

const ConsultaCep: React.FC = () => {

    const [endereco, setEndereco] = useState({ cep: '' } as IEndereco);
    const [cep, setCep] = useState('');
    const [fazendoConsulta, setFazendoConsulta] = useState(false);
    const navigation = useNavigation();

    const consultarCEP = async (): Promise<void> => {

        if (cep.length !== 8) {
            Alert.alert('Ops!', 'Digite um CEP válido');
            return;
        }

        setFazendoConsulta(true);
        Keyboard.dismiss();
        const api = new APIViaCEP();
        const resultado = await api.ConsultaPorCEP(cep);
        setEndereco(resultado);
        setFazendoConsulta(false);
    }

    const preparaNovaConsulta = (): void => {
        setEndereco({ cep: '' } as IEndereco);
        setCep('');
    }

    return (
        <Container>
            <AreaForm>
                <TextoDestaque>Digite o CEP para consulta:</TextoDestaque>
                <Input
                    icone="map"
                    placeholder="CEP..."
                    keyboardType="numeric"
                    keyboardAppearance="dark"
                    returnKeyType="send"
                    onChangeText={(texto) => setCep(texto)}
                    value={cep}
                    onSubmitEditing={consultarCEP} />
                <BotaoPrimario
                    disabled={fazendoConsulta}
                    onPress={consultarCEP}>
                    {fazendoConsulta ? 'Consultando' : 'Consultar'}
                </BotaoPrimario>
            </AreaForm>
            {
                endereco.cep.length === 0 &&
                <BotaoPrimario
                    onPress={() => navigation.navigate('ConsultaPorEndereco')}>
                    Não sei o CEP
                </BotaoPrimario>
            }
            {
                endereco.cep.length > 0 &&
                <AreaResultado>
                    <TextoDestaque>Resultado:</TextoDestaque>
                    <Endereco endereco={endereco} />
                    <BotaoPrimario onPress={preparaNovaConsulta}>
                        Nova consulta
                    </BotaoPrimario>
                </AreaResultado>
            }
        </Container>
    );
}

export default ConsultaCep;