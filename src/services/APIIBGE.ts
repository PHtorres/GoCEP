import apisauce, { ApisauceInstance } from 'apisauce';
import IMunicipio from '../models/IMunicipio';
import IUF from '../models/IUF';

export default class APIIBGE {

    private client: ApisauceInstance;
    constructor() {
        this.client = apisauce.create({
            baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/'
        });
    }

    public async ObterUFs(): Promise<IUF[]> {
        const { data } = await this.client.get<IUF[]>('estados');
        if (data) {
            return data;
        }

        return [] as IUF[];
    }

    public async ObterMunicipiosPorUF(uf: string): Promise<IMunicipio[]> {
        const { data } = await this.client
            .get<IMunicipio[]>(`estados/${uf}/municipios`);
        if (data) {
            return data;
        }

        return [] as IMunicipio[];
    }
}