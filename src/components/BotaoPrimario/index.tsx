import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import { Container, TextoBotao } from './styles';

const BotaoPrimario: React.FC<TouchableOpacityProps> = ({children, ...rest}) => {
  return (
      <Container {...rest}>
          <TextoBotao>
              {children}
          </TextoBotao>
      </Container>
  );
}

export default BotaoPrimario;