import React from "react";
import './../styles/LibroDetalle.css';
import { useCart } from "../hooks/useCart";
import { useSweetAlert } from "../hooks/useSweetAlert";
import { useNavigate } from "react-router-dom";

export const LibroDetalle = ({ idLibro }) => {
    const libros = [
        { id: 1, precio: "15.00", titulo: "Cien años de soledad", rutaimg: "assets/libros/100.jpg", sinopsis: "La obra narra la historia de la familia Buendía a lo largo de varias generaciones en el pueblo ficticio de Macondo.", duracion: "417 páginas", genero: "Ficción/Realismo Mágico", puntuacion: "9.5/10" },
        { id: 2, precio: "12.00", titulo: "El principito", rutaimg: "assets/libros/principito.jpg", sinopsis: "Un piloto varado en el desierto conoce a un pequeño príncipe que le cuenta historias de su planeta y de su viaje por el universo.", duracion: "96 páginas", genero: "Fábula/Infantil", puntuacion: "9.2/10" },
        { id: 3, precio: "10.00", titulo: "1984", rutaimg: "assets/libros/1984.jpg", sinopsis: "Una novela distópica sobre un futuro totalitario en el que el gobierno controla todos los aspectos de la vida.", duracion: "328 páginas", genero: "Ficción/Ciencia Ficción", puntuacion: "9.0/10" },
        { id: 4, precio: "14.00", titulo: "Orgullo y prejuicio", rutaimg: "assets/libros/orgullo.jpg", sinopsis: "La historia de Elizabeth Bennet y su complicado romance con el señor Darcy, ambientada en la Inglaterra del siglo XIX.", duracion: "279 páginas", genero: "Romance/Clásico", puntuacion: "8.9/10" },
        { id: 5, precio: "13.00", titulo: "El alquimista", rutaimg: "assets/libros/alquimista.jpg", sinopsis: "Un joven pastor llamado Santiago emprende un viaje en busca de un tesoro en las pirámides de Egipto.", duracion: "208 páginas", genero: "Ficción/Filosófica", puntuacion: "8.8/10" },
        { id: 6, precio: "16.00", titulo: "Don Quijote de la Mancha", rutaimg: "assets/libros/don_quijote.jpg", sinopsis: "La historia de un hidalgo que pierde la cordura y se convierte en un caballero andante.", duracion: "863 páginas", genero: "Ficción/Aventura", puntuacion: "9.3/10" },
        { id: 7, precio: "11.00", titulo: "Crimen y castigo", rutaimg: "assets/libros/crimen_castigo.jpg", sinopsis: "Un joven estudiante comete un asesinato y lucha con las consecuencias morales y psicológicas de su acto.", duracion: "671 páginas", genero: "Drama/Psicológica", puntuacion: "9.1/10" },
        { id: 8, precio: "17.00", titulo: "La sombra del viento", rutaimg: "assets/libros/viento.jpg", sinopsis: "En la Barcelona de posguerra, un joven descubre un misterioso libro que cambia su vida para siempre.", duracion: "545 páginas", genero: "Ficción/Misterio", puntuacion: "8.9/10" },
        { id: 9, precio: "12.00", titulo: "Los juegos del hambre", rutaimg: "assets/libros/juegos_hambre.jpg", sinopsis: "En un futuro distópico, jóvenes son seleccionados para competir en un combate mortal televisado.", duracion: "374 páginas", genero: "Ficción/Ciencia Ficción", puntuacion: "8.5/10" },
        { id: 10, precio: "14.00", titulo: "Harry Potter y la piedra filosofal", rutaimg: "assets/libros/harry_potter.jpg", sinopsis: "Un joven descubre que es un mago y comienza su educación mágica en Hogwarts.", duracion: "309 páginas", genero: "Fantasía/Aventura", puntuacion: "9.0/10" },
        { id: 11, precio: "18.00", titulo: "El señor de los anillos: La comunidad del anillo", rutaimg: "assets/libros/senor_anillos.jpg", sinopsis: "Un grupo de héroes se embarca en una misión para destruir un anillo que contiene un gran poder maligno.", duracion: "423 páginas", genero: "Fantasía/Epica", puntuacion: "9.2/10" },
        { id: 12, precio: "9.00", titulo: "Drácula", rutaimg: "assets/libros/dracula.jpg", sinopsis: "La clásica historia del Conde Drácula y su llegada a Inglaterra para extender su reinado de terror.", duracion: "418 páginas", genero: "Terror/Clásico", puntuacion: "8.7/10" },
        { id: 13, precio: "12.00", titulo: "Frankenstein", rutaimg: "assets/libros/frankenstein.jpg", sinopsis: "La historia de un científico que crea un ser vivo a partir de materia muerta, con consecuencias trágicas.", duracion: "280 páginas", genero: "Terror/Ciencia Ficción", puntuacion: "8.8/10" },
        { id: 14, precio: "15.00", titulo: "El perfume", rutaimg: "assets/libros/perfume.jpg", sinopsis: "Un hombre con un sentido del olfato extraordinario se obsesiona con crear el perfume perfecto, utilizando métodos atroces.", duracion: "263 páginas", genero: "Ficción/Thriller", puntuacion: "8.6/10" },
        { id: 15, precio: "10.00", titulo: "La odisea", rutaimg: "assets/libros/odisea.jpg", sinopsis: "La épica historia de las aventuras de Odiseo mientras intenta regresar a Ítaca después de la Guerra de Troya.", duracion: "408 páginas", genero: "Ficción/Epica", puntuacion: "9.4/10" }
    ];
    const { mostrarExito} = useSweetAlert();
     const { agregarCarrito } = useCart();
    const libroseleccionada = libros.find((element) => element.id == idLibro);
    const libroCarrito = { id: libroseleccionada.id, detalle: libroseleccionada.titulo, precio: libroseleccionada.precio };
      
    const AgregarAlCarrito = () => {
        mostrarExito("Agregado", "Se agregó con exito al carrito de compras");
        agregarCarrito(libroCarrito);
    };

    return (
        <div className="movie-grid">
            <div className="columna">
                <h2>Titulo: {libroseleccionada.titulo}</h2>
                <div className="fila imagenLibro">
                    <img src={libroseleccionada.rutaimg} alt="Imagen del libro" />
                </div>
            </div>
            <div className="columna">
                <h3 className="subtitulo">Detalle:</h3>
                <p>{libroseleccionada.sinopsis}</p>
                <div className="fila">
                    <h3>Duración: </h3>
                    <p>{libroseleccionada.duracion}</p>
                </div>
                <div className="fila">
                    <h3>Genero: </h3>
                    <p>{libroseleccionada.genero}</p>
                </div>
                <div className="fila">
                    <h3>Puntuación: </h3>
                    <p>{libroseleccionada.puntuacion}</p>
                </div>
                <div className="fila">
                    <button onClick={AgregarAlCarrito} className="btn-carrito">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    );

}