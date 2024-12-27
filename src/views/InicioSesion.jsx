import { useState } from "react";
import { FormularioIngreso } from "../components/FormularioIngreso";
import { FormularioRecuperarContrasenia } from "../components/FormularioRecuperarContrasenia";
import { FormularioRegistro } from "../components/FormularioRegistro";
import { PiePagina } from "../components/PiePagina";
import { Cabecera } from "../components/cabecera";

export const InicioSesion = () => {
  const [mostrarRecuperar, setMostrarRecuperar] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  return (
    <div>
        <Cabecera />
      {mostrarRecuperar ? (
        <FormularioRecuperarContrasenia 
            InicioSesion={() => setMostrarRecuperar(false)} 
        />
      ) : mostrarRegistro ? (
        <FormularioRegistro 
            InicioSesion={() => setMostrarRegistro(false)} 
        />
      ) : (
        <FormularioIngreso 
          OlvideContrasena={() => setMostrarRecuperar(true)} 
          Registrar={() => setMostrarRegistro(true)} 
        />
      )}
      
      <PiePagina />
    </div>
  );
};
