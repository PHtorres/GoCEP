import React from 'react';
import { Container } from './styles';

const TextoDestaque: React.FC = ({ children }) => {
    return(
        <Container>
            {children}
        </Container>
    )
}

export default TextoDestaque;