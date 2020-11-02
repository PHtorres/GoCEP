import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useLightDark } from '../../hooks/HLightDark';
import ItemListBox from '../ItemListBox';

import { Container, CaixaSelecao, TextoSelecionado, LabelSelecao } from './styles';

interface ListBoxProps {
    label: string;
    itens: string[];
    itemSelecionado: string;
    aoSelecionarItem(item: string): void;
}

const ListBox: React.FC<ListBoxProps> = ({
    label,
    itens,
    itemSelecionado,
    aoSelecionarItem
}) => {


    const [exibeListaItens, setExibeListaItens] = useState(false);
    const { temaPadrao } = useLightDark();

    return (
        <Container>
            <CaixaSelecao onPress={() => setExibeListaItens(true)}>
                <LabelSelecao>{label}: </LabelSelecao>
                <TextoSelecionado>{itemSelecionado.substring(0, 15)}</TextoSelecionado>
                <MaterialIcons
                    name="keyboard-arrow-down"
                    size={40}
                    color={temaPadrao.corTexto} />
            </CaixaSelecao>
            <Modal isVisible={exibeListaItens}
                animationIn="slideInUp"
                animationInTiming={1000}
                animationOut="slideOutRight"
                animationOutTiming={250}>
                <FlatList
                    data={itens}
                    keyExtractor={item => item}
                    renderItem={item => (
                        <TouchableOpacity key={item.item} onPress={
                            () => {
                                aoSelecionarItem(item.item);
                                setExibeListaItens(false)
                            }
                        }>
                            <ItemListBox texto={item.item} />
                        </TouchableOpacity>
                    )} />
            </Modal>
        </Container>
    );
}

export default ListBox;