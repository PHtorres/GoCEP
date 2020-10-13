import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BemVindo from '../pages/BemVindo';
import Identificacao from '../pages/Identificacao';

import { useLightDark } from '../hooks/HLightDark';


const Pilha = createStackNavigator();

const RotasIniciais: React.FC = () => {
    const { temaPadrao } = useLightDark();
    return (
        <NavigationContainer>
            <Pilha.Navigator
                screenOptions={{
                    cardStyle: { backgroundColor: temaPadrao.fundoPrimario },
                    headerShown: false
                }}>
                <Pilha.Screen name="BemVindo" component={BemVindo} />
                <Pilha.Screen name="Identificacao" component={Identificacao} />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}

export default RotasIniciais;