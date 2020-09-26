import React from 'react';
import { View, StatusBar } from 'react-native';
import Rotas from './routes';
import theme from './theme';
import { ThemeProvider } from 'styled-components';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.fundoPrimario} barStyle="light-content" />
      <View style={{ flex: 1, backgroundColor: theme.fundoPrimario, padding: 10 }}>
        <Rotas />
      </View>
    </ThemeProvider>
  );
}

export default App;