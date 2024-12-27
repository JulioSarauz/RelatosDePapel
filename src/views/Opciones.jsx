import { Cabecera } from "../components/Cabecera";
import { Navegador } from "../components/Navegador";
import { PiePagina } from "../components/PiePagina";
import { OpcionesUsuario } from "../components/OpcionesUsuario";

export const Opciones = () => {
  return (
    <div>
            <Cabecera />
            <Navegador/>
            <OpcionesUsuario/>
            <PiePagina />
        </div>
  );
};
