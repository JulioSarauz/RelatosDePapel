
import { PiePagina } from "../components/PiePagina";
import { Cabecera } from "../components/Cabecera";
import { Navegador } from "../components/Navegador";
import { LibroDetalle } from "../components/LibroDetalle"
import { useSearchParams } from "react-router-dom";
export const Detalle = () => {
    
const [searchParams] = useSearchParams();
const idlibro = searchParams.get('idLibro');

  return (
    <div>
        <Cabecera />
        <Navegador/>
        <LibroDetalle idLibro={idlibro} />
        <PiePagina />
    </div>
  );
};
