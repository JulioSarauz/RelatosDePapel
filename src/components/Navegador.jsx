import { useNavigate } from "react-router-dom";
import "./../styles/Navegador.css";
import { useCart } from "../hooks/useCart";

export const Navegador = () => {
    const { totalItems } = useCart();
    const navigate = useNavigate();

    const irPrincipal = () => {
        navigate("/principal");
    };

    const irCarrito = () => {
        navigate("/carrito");
    };

    const irOpciones = () => {
        navigate("/opciones");
    };

    return (
        <div className="navegador-content visible">
            <ul>
                <li onClick={irPrincipal}>Inicio</li>
                <li onClick={irCarrito} className="carrito-li">
                    <img src="/assets/iconos/cart.png" alt="shopping" className="carritoCompras" />
                    {totalItems > 0 && (
                        <span className="cart-badge">{totalItems}</span>
                    )}
                </li>
                <li onClick={irOpciones}>Opciones</li>
            </ul>
        </div>
    );
};
