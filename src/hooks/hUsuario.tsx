import React, { useCallback, useState, useContext, useEffect, createContext } from 'react';
import Storage from '../services/Storage';

interface IContextoUsuario {
    nome: string;
    adicionarNomeUsuario(nome: string): Promise<void>;
    removerNomeUsuario(): Promise<void>;
}

const ContextoUsuario = createContext<IContextoUsuario>({} as IContextoUsuario);

export const UsuarioProvider: React.FC = ({ children }) => {

    const storage = new Storage();
    const [nomeUsuario, setNomeUsuario] = useState('');

    const obterNomeUsuarioStorage = async (): Promise<void> => {
        const nomeUsuarioStorage = await storage.ObterNomeUsuario();
        setNomeUsuario(nomeUsuarioStorage);
    }

    useEffect(() => {
        obterNomeUsuarioStorage();
    }, []);

    const adicionarNomeUsuario = useCallback(async (nome: string): Promise<void> => {
        await storage.GuardarNomeUsuario(nome);
        setNomeUsuario(nome);
    }, []);

    const removerNomeUsuario = useCallback(async (): Promise<void> => {
        await storage.RemoverNomeUsuario();
        setNomeUsuario('');
    }, []);

    return (
        <ContextoUsuario.Provider value={{ nome: nomeUsuario, adicionarNomeUsuario, removerNomeUsuario }}>
            {children}
        </ContextoUsuario.Provider>
    )
}

export const useUsuario = (): IContextoUsuario => {
    const contexto = useContext(ContextoUsuario);
    return contexto;
}