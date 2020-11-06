import React from 'react';
import { View, StatusBar } from 'react-native';
import Rotas from './routes';
import { ThemeProvider } from 'styled-components';
import { useLightDark } from './hooks/HLightDark';
import LogoGoCep from './components/LogoGoCEP';

const GoCep: React.FC = () => {
    const { temaPadrao } = useLightDark();
    return (
        <ThemeProvider theme={temaPadrao}>
            <StatusBar
                backgroundColor={temaPadrao.fundoPrimario}
                barStyle={temaPadrao.nome === 'dark' ? 'light-content' : 'dark-content'} />
            <View
                style={{ flex: 1, backgroundColor: temaPadrao.fundoPrimario, padding: 10 }}>
                <LogoGoCep />
                <Rotas />
            </View>
        </ThemeProvider>
    );
}

export default GoCep;