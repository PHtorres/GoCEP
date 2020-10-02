import React, {useState} from 'react';
import { TextInputProps } from 'react-native';
import FeatherIcones from 'react-native-vector-icons/Feather';
import {darkTheme} from '../../theme';

import { Container, CaixaTexto } from './style';


interface InputProps extends TextInputProps {
    icone: string;
}

const Input: React.FC<InputProps> = ({ icone, ...rest }) => {

    const [focado, setFocado] = useState(false);

    return (
        <Container focado={focado}>
            <FeatherIcones name={icone} size={25} color={focado?darkTheme.corPrimaria:darkTheme.corTexto} />
            <CaixaTexto 
            {...rest} 
            placeholderTextColor={darkTheme.corTexto}
            onFocus={() => setFocado(true)}
            onBlur={() => setFocado(false)}/>
        </Container>
    )
}

export default Input;