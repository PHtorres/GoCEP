import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
    interface DefaultTheme {
      nome:string,
      corPrimaria:string,
      corTexto:string,
      fundoPrimario:string,
      fundoSecundario:string,
      fundoForte:string,
      corLink:string,
      fonteLogo:string
    }
  }

  export default DefaultTheme;