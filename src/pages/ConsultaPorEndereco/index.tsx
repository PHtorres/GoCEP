import React, { useEffect, useState } from 'react';
import BotaoPrimario from '../../components/BotaoPrimario';
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

    const pesquisar = async ():Promise<void> =>{
        const resultado = await apiViaCep.PesquisarEndereco(
            ufSelecionada,
            municipioSelecionado,
            ruaAvenida
        );
        console.log(resultado);
        setResultadoPesquisa(resultado);
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
            <BotaoPrimario onPress={pesquisar}>Pesquisar</BotaoPrimario>
        </Container>
    );
}

export default ConsultaPorEndereco;