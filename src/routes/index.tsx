import React from 'react';
import { useUsuario } from '../hooks/hUsuario';
import RotasIniciais from './Iniciais.routes';
import RotasPrincipais from './Principais.routes';


const Rotas: React.FC = () => {
  const { nome } = useUsuario();

  if (nome.length > 0) {
    return <RotasPrincipais />
  }
  return <RotasIniciais />;
}

export default Rotas;