import React from 'react';
import { UsuarioProvider } from './hooks/hUsuario';
import { LightDarkProvider } from './hooks/HLightDark';
import GoCep from './GoCep';

const App: React.FC = () => {
  return (
    <UsuarioProvider>
      <LightDarkProvider>
        <GoCep />
      </LightDarkProvider>
    </UsuarioProvider>
  );
}

export default App;