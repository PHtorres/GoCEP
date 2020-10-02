import AsyncStorage from '@react-native-community/async-storage';

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
}