import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconesFeather from 'react-native-vector-icons/Feather';

import ConsultaCep from '../pages/ConsultaCep';
import HistoricoConsultas from '../pages/HistoricoConsultas';

import { useLightDark } from '../hooks/HLightDark';
import Menu from '../pages/Menu';
import LogoGoCepPequena from '../components/LogoGoCEPPequena';


const Pilha = createStackNavigator();
const Tab = createBottomTabNavigator();


const RotasOperacionais: React.FC = () => {

    const { temaPadrao } = useLightDark();

    return (
        <Pilha.Navigator
            initialRouteName="ConsultaCep"
            screenOptions={{
                cardStyle: { backgroundColor: temaPadrao.fundoPrimario },
                headerShown: false
            }}>
            <Pilha.Screen name="ConsultaCep" component={ConsultaCep} />
            <Pilha.Screen name="HistoricoConsultas" component={HistoricoConsultas} />
        </Pilha.Navigator>
    )
}

const RotasMenu: React.FC = () => {

    const { temaPadrao } = useLightDark();

    return (
        <Pilha.Navigator
            initialRouteName="Menu"
            screenOptions={{
                cardStyle: { backgroundColor: temaPadrao.fundoPrimario },
                headerShown: false
            }}>
            <Pilha.Screen name="Menu" component={Menu} />
        </Pilha.Navigator>
    )
}

const RotasTab: React.FC = () => {

    const { temaPadrao } = useLightDark();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {

                    if(route.name === 'RotasOperacionais'){
                        return <LogoGoCepPequena cor={color} />
                    }

                    if(route.name === 'RotasMenu'){
                        return <IconesFeather name="menu" size={35} color={color}/>
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: temaPadrao.corPrimaria,
                inactiveTintColor: temaPadrao.corTexto,
                showLabel: false,
                keyboardHidesTabBar: true,
                style:{
                    backgroundColor:temaPadrao.fundoPrimario
                }
            }}
        >
            <Tab.Screen name="RotasOperacionais" component={RotasOperacionais} />
            <Tab.Screen name="RotasMenu" component={RotasMenu} />
        </Tab.Navigator>
    )
}

const RotasPrincipais: React.FC = () => {

    return (
        <NavigationContainer>
            <RotasTab />
        </NavigationContainer>
    )
}

export default RotasPrincipais;