import React from "react";
import { useCart } from "../hooks/useCart";
import './../styles/Carrito.css';
import { useNavigate } from "react-router-dom";

export const Carrito = () => {
  const {
    retirarCarrito,
    actualizarCarrito,
    limpiarCarrito,
    calcularTotal,
    obtenerCarrito
  } = useCart();
  const cart = obtenerCarrito();
  const navigate = useNavigate();

  const irPagar = () => {
    navigate("/pagar");
  };

  return (
    <div>
      <h2 className="subtitulo">Tu Carrito:</h2>
      {cart.length === 0 ? (
        <div className="carrito-vacio">
          <p>Tu carrito está vacío.</p>
        </div>
      ) : (
        <>
          <button className="VaciarCarrito" onClick={limpiarCarrito}>Vaciar</button>
          <table className="CarritoBody">
            <thead>
              <tr>
                <th>Código</th>
                <th>Detalle</th>
                <th>Precio Unitario</th>
                <th>Cantidad</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.detalle}</td>
                  <td>${item.precio}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button onClick={() => actualizarCarrito(item.id, item.quantity + 1)}>+</button>
                    <button onClick={() => actualizarCarrito(item.id, item.quantity - 1)}>-</button>
                    <button onClick={() => retirarCarrito(item.id)}>X</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={5} className="valorPago">
                  <h2>Total: ${calcularTotal()}</h2>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="seccionPagar">
            <button onClick={irPagar} className="btnPagar">PAGAR</button>
          </div>
        </>
      )}
    </div>
  );
};
