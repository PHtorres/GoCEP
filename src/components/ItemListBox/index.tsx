import React from 'react';

import { Container, Texto } from './styles';

interface ItemListBoxProps{
    texto:string;
}

const ItemListBox: React.FC<ItemListBoxProps> = ({texto}) => {
    return (
        <Container>
            <Texto>{texto}</Texto>
        </Container>
    );
}

export default ItemListBox;