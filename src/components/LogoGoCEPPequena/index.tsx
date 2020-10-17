import React from 'react';

import { Container, TextoLogo } from './styles';

interface LogoGoCepPequenaProps{
    cor:string
}

const LogoGoCepPequena: React.FC<LogoGoCepPequenaProps> = ({cor}) => {
    return (
        <Container>
            <TextoLogo cor={cor}>goCEP</TextoLogo>
        </Container>
    );
}

export default LogoGoCepPequena;