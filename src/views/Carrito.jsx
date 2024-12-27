
import { PiePagina } from "../components/PiePagina";
import { Cabecera } from "../components/Cabecera";
import { Navegador } from "../components/Navegador";
import { Carrito } from "../components/Carrito"
export const CarritoCompras = () => {
  return (
    <div>
        <Cabecera />
        <Navegador/>
        <Carrito />
        <PiePagina />
    </div>
  );
};
