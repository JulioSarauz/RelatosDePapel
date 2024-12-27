
import { PiePagina } from "../components/PiePagina";
import { Cabecera } from "../components/cabecera";
import { Navegador } from "../components/Navegador";
import { Pagos } from "../components/Pagos";
export const Pagar = () => {
  return (
    <div>
        <Cabecera />
        <Navegador/>
        <Pagos/>
        <PiePagina />
    </div>
  );
};
