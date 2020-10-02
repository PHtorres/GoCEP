import React from 'react';
import { View, StatusBar } from 'react-native';
import Rotas from './routes';
import { darkTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import { UsuarioProvider } from './hooks/hUsuario';

const App: React.FC = () => {
  return (
    <UsuarioProvider>
      <ThemeProvider theme={darkTheme}>
        <StatusBar backgroundColor={darkTheme.fundoPrimario} barStyle="light-content" />
        <View style={{ flex: 1, backgroundColor: darkTheme.fundoPrimario, padding: 10 }}>
          <Rotas />
        </View>
      </ThemeProvider>
    </UsuarioProvider>
  );
}

export default App;