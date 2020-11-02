import apisauce, { ApisauceInstance } from 'apisauce';
import IEndereco from '../models/IEndereco';

export default class APIViaCEP {

    private client: ApisauceInstance;
    constructor() {
        this.client = apisauce.create({
            baseURL: 'https://viacep.com.br/ws/'
        });
    }

    public async ConsultaPorCEP(cep: String): Promise<IEndereco> {
        const { data } = await this.client.get<IEndereco>(`${cep}/json`);
        if (data) {
            return data;
        }

        return { erro: true } as IEndereco;
    }

    public async PesquisarEndereco(
        uf: string,
        municipio: string,
        ruaAvenida: string): Promise<IEndereco[]> {
        const resultado = await this.client
            .get<IEndereco[]>(`${uf}/${municipio}/${ruaAvenida}/json/`);

            if(resultado.data){
                return resultado.data;
            }

            return [] as IEndereco[];
    }
}