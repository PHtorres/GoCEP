import React from 'react';
import { View, StatusBar } from 'react-native';
import Rotas from './routes';
import { ThemeProvider } from 'styled-components';
import { useLightDark } from './hooks/HLightDark';

const GoCep: React.FC = () => {
    const { temaPadrao } = useLightDark();
    return (
        <ThemeProvider theme={temaPadrao}>
            <StatusBar backgroundColor={temaPadrao.fundoPrimario} barStyle="light-content" />
            <View style={{ flex: 1, backgroundColor: temaPadrao.fundoPrimario, padding: 10 }}>
                <Rotas />
            </View>
        </ThemeProvider>
    );
}

export default GoCep;