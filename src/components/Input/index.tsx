import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import FeatherIcones from 'react-native-vector-icons/Feather';
import { useLightDark } from '../../hooks/HLightDark';

import { Container, CaixaTexto } from './style';


interface InputProps extends TextInputProps {
    icone: string;
}

const Input: React.FC<InputProps> = ({ icone, ...rest }) => {

    const [focado, setFocado] = useState(false);
    const { temaPadrao } = useLightDark();

    return (
        <Container focado={focado}>
            <FeatherIcones
                name={icone}
                size={25}
                color={focado ? temaPadrao.corPrimaria : temaPadrao.corTexto} />
            <CaixaTexto
                {...rest}
                placeholderTextColor={temaPadrao.corTexto}
                onFocus={() => setFocado(true)}
                onBlur={() => setFocado(false)} />
        </Container>
    )
}

export default Input;