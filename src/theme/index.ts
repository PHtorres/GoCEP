import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    corPrimaria:string,
    corTexto:string,
    fundoPrimario:string,
    fundoSecundario:string,
    fundoForte:string,
    corLink:string,
    fonteLogo:string
  }
}

// export const lightTheme: DefaultTheme = {
// 	primaryColor: "#333",
// 	secondaryColor: "#666",
// };

export const darkTheme: DefaultTheme = {
    corPrimaria:'#ff9800',
    corTexto:'#f2f2f2',
    fundoPrimario:'#2b3940',
    fundoSecundario:'#212c32',
    fundoForte:'#1e1e1e',
    corLink:'#9cdcfe',
    fonteLogo:'FredokaOne-Regular'
};



// const theme = {
//     corPrimaria:'#ff9800',
//     texto:'#f2f2f2',
//     fundoPrimario:'#2b3940',
//     fundoSecundario:'#212c32',
//     fundoForte:'#1e1e1e',
//     link:'#9cdcfe',
//     fonteLogo:'FredokaOne-Regular'
// };

// export default theme;