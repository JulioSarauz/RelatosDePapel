
import { PiePagina } from "../components/PiePagina";
import { Cabecera } from "../components/cabecera";
import { Navegador } from "../components/Navegador";
import { LibroLista } from "../components/LibroLista";

export const Principal = () => {

  return (
    <div>
        <Cabecera />
        <Navegador/>
        <LibroLista/>
        <PiePagina />
    </div>
  );
};
