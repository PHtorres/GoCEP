import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConsultaCep from '../pages/ConsultaCep';
import HistoricoConsultas from '../pages/HistoricoConsultas';

import { useLightDark } from '../hooks/HLightDark';


const Pilha = createStackNavigator();

const RotasPrincipais: React.FC = () => {
    const { temaPadrao } = useLightDark();
    return (
        <NavigationContainer>
            <Pilha.Navigator
                initialRouteName="ConsultaCep"
                screenOptions={{
                    cardStyle: { backgroundColor: temaPadrao.fundoPrimario },
                    headerShown: false
                }}>
                <Pilha.Screen name="ConsultaCep" component={ConsultaCep} />
                <Pilha.Screen name="HistoricoConsultas" component={HistoricoConsultas} />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}

export default RotasPrincipais;