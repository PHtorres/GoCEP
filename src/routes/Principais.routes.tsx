import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConsultaCep from '../pages/ConsultaCep';
import HistoricoConsultas from '../pages/HistoricoConsultas';
import { darkTheme } from '../theme';


const Pilha = createStackNavigator();

const RotasPrincipais: React.FC = () => {
    return (
        <NavigationContainer>
            <Pilha.Navigator
                initialRouteName="ConsultaCep"
                screenOptions={{ cardStyle: { backgroundColor: darkTheme.fundoPrimario }, headerShown: false }}>
                <Pilha.Screen name="ConsultaCep" component={ConsultaCep} />
                <Pilha.Screen name="HistoricoConsultas" component={HistoricoConsultas} />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}

export default RotasPrincipais;