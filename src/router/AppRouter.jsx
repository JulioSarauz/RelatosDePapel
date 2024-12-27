import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InicioSesion } from "../views/InicioSesion";
import { Principal } from "../views/Principal"; 
import { Detalle } from "../views/Detalle";
import { CarritoCompras } from "../views/Carrito";
import { Pagar } from "../views/Pagar";
import { NoEncontrada } from "../views/NoEncontrada";
import { Opciones } from "../views/Opciones";
import { InactividadProvider } from "../hooks/useInactividad";

export const AppRouter = () => {
    return (
        <Router>
            <InactividadProvider>
                <Routes>
                    <Route path="/login" element={<InicioSesion />} />
                    <Route path="/principal" element={<Principal />} />
                    <Route path="/detalle" element={<Detalle />} />
                    <Route path="/carrito" element={<CarritoCompras />} />
                    <Route path="/pagar" element={<Pagar />} />
                    <Route path="/opciones" element={<Opciones />} />
                    <Route path="*" element={<NoEncontrada />} />
                </Routes>
            </InactividadProvider>
        </Router>
    );
};