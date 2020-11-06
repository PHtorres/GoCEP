import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import BotaoPrimario from '../../components/BotaoPrimario';
import Endereco from '../../components/Endereco';
import Input from '../../components/Input';
import ListBox from '../../components/ListBox';
import TextoDestaque from '../../components/TextoDestaque';
import IEndereco from '../../models/IEndereco';
import APIIBGE from '../../services/APIIBGE';
import APIViaCEP from '../../services/APIViaCEP';

import { Container, AreaFiltros, TextoCarregando } from './styles';

const apiIbge = new APIIBGE();
const apiViaCep = new APIViaCEP();

const ConsultaPorEndereco: React.FC = () => {
    const [listaUFs, setListaUFs] = useState<string[]>([]);
    const [ufSelecionada, setUfSelecionada] = useState('Selecione');
    const [listaMunicipios, setListaMunicipios] = useState<string[]>([]);
    const [municipioSelecionado, setMunicipioSelecionado] = useState('Selecione');
    const [carregandoUfs, setCarregandoUfs] = useState(false);
    const [carregandoMunicipios, setCarregandoMunicipios] = useState(false);
    const [ruaAvenida, setRuaAvenida] = useState('');
    const [resultadoPesquisa, setResultadoPesquisa] = useState([] as IEndereco[]);
    const [pesquisando, setPesquisando] = useState(false);

    const pegarUfs = async (): Promise<void> => {
        setCarregandoUfs(true);
        const ufs = await apiIbge.ObterUFs();
        setListaUFs(ufs.map(uf => {
            return uf.sigla
        }));

        setCarregandoUfs(false);
    }

    const pegarMunicipios = async (): Promise<void> => {
        setCarregandoMunicipios(true);
        setMunicipioSelecionado('Selecione');
        const municipios = await apiIbge.ObterMunicipiosPorUF(ufSelecionada);
        setListaMunicipios(municipios.map(item => {
            return item.nome
        }));
        setCarregandoMunicipios(false);
    }

    const pesquisar = async (): Promise<void> => {
        setPesquisando(true);
        const resultado = await apiViaCep.PesquisarEndereco(
            ufSelecionada,
            municipioSelecionado,
            ruaAvenida
        );
        setResultadoPesquisa(resultado);
        setPesquisando(false);
    }

    useEffect(() => {
        pegarUfs();
    }, []);

    useEffect(() => {
        pegarMunicipios();
    }, [ufSelecionada]);

    return (
        <Container>
            <TextoDestaque>Pesquisar endereço</TextoDestaque>
            {
                resultadoPesquisa.length === 0 &&
                <AreaFiltros>
                    {!carregandoUfs &&
                        <ListBox
                            label="UF"
                            itens={listaUFs}
                            itemSelecionado={ufSelecionada}
                            aoSelecionarItem={setUfSelecionada} />
                    }
                    {carregandoUfs &&
                        <TextoCarregando>Carregando UFs...</TextoCarregando>}
                    {
                        !carregandoMunicipios && listaMunicipios.length > 0 &&
                        <ListBox
                            label="Município"
                            itens={listaMunicipios}
                            itemSelecionado={municipioSelecionado}
                            aoSelecionarItem={setMunicipioSelecionado} />
                    }
                    {carregandoMunicipios &&
                        <TextoCarregando>
                            Carregando Municipios de {ufSelecionada}
                        </TextoCarregando>}
                    <Input
                        icone="map"
                        placeholder="Digite a rua/avenida..."
                        value={ruaAvenida}
                        onChangeText={(texto) => setRuaAvenida(texto)} />
                </AreaFiltros>
            }
            {
                resultadoPesquisa.length === 0 &&
                <BotaoPrimario onPress={pesquisar} disabled={pesquisando}>
                    {pesquisando ? 'Aguarde...' : 'Pesquisar'}
                </BotaoPrimario>
                || resultadoPesquisa.length > 0 &&
                <BotaoPrimario onPress={() => { setResultadoPesquisa([] as IEndereco[]) }}>
                    Nova pesquisa
                </BotaoPrimario>
            }

            {
                resultadoPesquisa.length > 0 &&
                <FlatList
                    data={resultadoPesquisa}
                    keyExtractor={(item) => item.cep}
                    renderItem={({ item }) => <Endereco endereco={item} />}
                />
            }
        </Container>
    );
}

export default ConsultaPorEndereco;