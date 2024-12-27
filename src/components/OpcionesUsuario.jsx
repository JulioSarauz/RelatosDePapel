import React from "react";
import './../styles/OpcionesUsuario.css';
import { useNavigate } from "react-router-dom";

export const OpcionesUsuario = () => {

  const navegate = useNavigate();
  const cerrarSesion = () => {
    navegate("/login");
  };

  return (
    <div className="opciones-usuario">
      <h1 className="titulo">Opciones de Usuario</h1>
      <form className="formulario-opciones">
        <button type="button" className="btn-opcion" onClick={cerrarSesion}>
          Cerrar Sesión
        </button>
        <button type="button" className="btn-opcion desactivado" disabled>
          Editar Perfil
        </button>
        <button type="button" className="btn-opcion desactivado" disabled>
          Cambiar Contraseña
        </button>
        <button type="button" className="btn-opcion desactivado" disabled>
          Configuración
        </button>
      </form>
    </div>
  );
};
