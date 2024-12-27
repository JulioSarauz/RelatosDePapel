import React from "react";
import './../styles/PaginaVacia.css';
import { useNavigate } from "react-router-dom";

export const PaginaVacia = () => {

 const navegate = useNavigate();

 const irLogin = () => {
    navegate("/login");
 }

  return (
    <div className="pagina-vacia">
      <h1 className="error-titulo">404</h1>
      <p className="error-descripcion">Página no encontrada</p>
      <button onClick={irLogin} className="btn-volver">Volver al inicio</button>
    </div>
  );
};
