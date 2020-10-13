import AsyncStorage from '@react-native-community/async-storage';
import DefaultTheme from '../models/DefaultTheme';

export default class Storage{
    
    public async GuardarNomeUsuario(nome:string):Promise<void>{
        await AsyncStorage.setItem('@GOCEP:NOMEUSUARIO', nome);
    }

    public async ObterNomeUsuario():Promise<string>{
        const nomeStorage = await AsyncStorage.getItem('@GOCEP:NOMEUSUARIO');
        if(nomeStorage){
            return nomeStorage;
        }

        return '';
    }

    public async RemoverNomeUsuario():Promise<void>{
        await AsyncStorage.removeItem('@GOCEP:NOMEUSUARIO');
    }

    public async GuardarTemaPadrao(tema:DefaultTheme):Promise<void>{
        await AsyncStorage.setItem('@GOCEP:TEMAPADRAO', JSON.stringify(tema));
    }

    public async ObterTemaPadrao():Promise<DefaultTheme | null>{
        const temaPadraoSalvo = await AsyncStorage.getItem('@GOCEP:TEMAPADRAO');
        if(temaPadraoSalvo){
            return JSON.parse(temaPadraoSalvo) as DefaultTheme;
        }else{
            return null;
        }
    }
}