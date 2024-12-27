import React from "react";
import './../styles/Libro.css';
import { useNavigate } from "react-router-dom";

export const Libro = ({ indice, titulo, rutaimg, sinopsis, duracion, genero, puntuacion }) => {


    const navigate = useNavigate();

    const irDetalle = () => {
        navigate("/detalle?idLibro=" + indice)
    }

    return (
            <div className="libro-header">
                <div className="libro-htit">
                    <h5 className="indice">{indice}</h5>
                    <h3 className="libro-titulo">{titulo}</h3>
                </div>
                <img className="libro-img" alt="imagen-pelicula" src={rutaimg} />
                <p className="libro-duracion"><b>Páginas: </b>{duracion}</p>
                <p className="libro-genero"><b>Género: </b>{genero}</p>
                <p className="libro-puntuacion"><b>Puntuación: </b>{puntuacion}</p>
                <button className="libro-btn" onClick={irDetalle}>VER +</button>
            </div>
    );
}