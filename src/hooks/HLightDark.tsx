import React, { useCallback, useState, useContext, useEffect, createContext } from 'react';
import Storage from '../services/Storage';
import DefaulTheme from '../models/DefaultTheme';
import {lightTheme, darkTheme} from '../theme';

interface ILightDarkContexto {
    temaPadrao: DefaulTheme;
    trocarTema(tema:'dark' | 'light'):Promise<void>;
}

const ContextoLightDark = createContext<ILightDarkContexto>({} as ILightDarkContexto);

export const LightDarkProvider: React.FC = ({ children }) => {

    const storage = new Storage();
    const [tema, setTema] = useState(lightTheme);

    const ObterTemaPadraoSalvo = async (): Promise<void> => {
        const temaStorage = await storage.ObterTemaPadrao();
        if(temaStorage){
            setTema(temaStorage);
        }else{
            setTema(darkTheme);
        }
    }

    useEffect(() => {
        ObterTemaPadraoSalvo();
    }, []);

    const trocarTema = useCallback(async (tema: 'dark' | 'light'): Promise<void> => {
        if(tema === 'dark'){
            setTema(darkTheme);
            await storage.GuardarTemaPadrao(darkTheme);
        }else{
            setTema(lightTheme);
            await storage.GuardarTemaPadrao(lightTheme);
        }
    }, []);

    return (
        <ContextoLightDark.Provider value={{ temaPadrao:tema, trocarTema}}>
            {children}
        </ContextoLightDark.Provider>
    )
}

export const useLightDark = (): ILightDarkContexto => {
    const contexto = useContext(ContextoLightDark);
    return contexto;
}