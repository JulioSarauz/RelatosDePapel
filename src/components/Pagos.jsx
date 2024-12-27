import React, { useState } from "react";
import { useCart } from "../hooks/useCart";
import './../styles/Pagos.css';
import { useNavigate } from "react-router-dom";
import { useSweetAlert } from "../hooks/useSweetAlert";

export const Pagos = () => {
    const { calcularTotal, obtenerCarrito, limpiarCarrito } = useCart();
    const cart = obtenerCarrito();
    const navigate = useNavigate();
    const [metodoPago, setMetodoPago] = useState("");
    const { mostrarExito, mostrarError, mostrarPregunta } = useSweetAlert();
    const ExitoCompra = () => {
        mostrarExito("Confirmado", "Su libro a sido agregado a su biblioteca!");
        limpiarCarrito();
        irInicio();
    };

    const handlePreguntaCancelacion = async () => {
        const confirmacion = await mostrarPregunta(
            "¿Estás seguro que desea Cancelar?"
        );
        if (confirmacion) {
            mostrarExito("Cancelado", "Acción cancelada por el usuario.");            
            irInicio()
        } else {
            mostrarError("Cancelado", "No se realizaron cambios");
        }

    };

    const [tarjeta, setTarjeta] = useState({
        numero: "",
        fechaExpiracion: "",
        cvv: "",
    });

    const irInicio = () => {
        navigate("/principal");
    };

    const handlePagoSubmit = (e) => {
        e.preventDefault();
        if (metodoPago === "tarjeta") {
            console.log("Pago con tarjeta:", tarjeta);
        } else {
            console.log("Pago con", metodoPago);
        }
        irPagar();
    };

    return (
        <div>
            <div className="fila">
                <div className="columna">
                    <div className="fila">
                        <h2 className="subtitulo">Pagar:</h2>
                    </div>
                    <div className="fila">
                        <div className="cabezaFactura">
                            <div className="ballLeft"></div>
                            <h2>Total: ${calcularTotal()}</h2>
                            <div className="ballRigth"></div>
                        </div>
                    </div>
                    <div className="fila metodosPago">
                        <h3>Métodos de Pago</h3>

                    </div>
                    <div className="fila metodosPago">
                        <form onSubmit={handlePagoSubmit} className="metodosPagoFormulario">
                            <div className="fila">
                                <div className="opcionesPago">
                                    <label>
                                        <input
                                            type="radio"
                                            name="metodoPago"
                                            value="tarjeta"
                                            checked={metodoPago === "tarjeta"}
                                            onChange={() => setMetodoPago("tarjeta")}
                                        />
                                        Tarjeta de Crédito
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="metodoPago"
                                            value="paypal"
                                            checked={metodoPago === "paypal"}
                                            onChange={() => setMetodoPago("paypal")}
                                        />
                                        PayPal
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="metodoPago"
                                            value="visa"
                                            checked={metodoPago === "visa"}
                                            onChange={() => setMetodoPago("visa")}
                                        />
                                        Visa
                                    </label>
                                </div>

                                {metodoPago === "tarjeta" && (
                                    <div className="detalles-tarjeta">
                                        <label>
                                            Número de Tarjeta:
                                            <input
                                                type="text"
                                                value={tarjeta.numero}
                                                onChange={(e) =>
                                                    setTarjeta({ ...tarjeta, numero: e.target.value })
                                                }
                                                placeholder="1234 5678 9012 3456"
                                                required
                                            />
                                        </label>
                                        <label>
                                            Fecha de Expiración:
                                            <input
                                                type="month"
                                                value={tarjeta.fechaExpiracion}
                                                onChange={(e) =>
                                                    setTarjeta({
                                                        ...tarjeta,
                                                        fechaExpiracion: e.target.value,
                                                    })
                                                }
                                                required
                                            />
                                        </label>
                                        <label>
                                            CVV:
                                            <input
                                                type="text"
                                                value={tarjeta.cvv}
                                                onChange={(e) =>
                                                    setTarjeta({ ...tarjeta, cvv: e.target.value })
                                                }
                                                placeholder="123"
                                                required
                                            />
                                        </label>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
                <div className="columna">
                    <div className="fila">
                        <button className="btn-pagar" onClick={ExitoCompra}>
                            Continuar con el Pago
                        </button>

                    </div>
                    <div className="fila">
                        <button className="btn-Cancelar" onClick={handlePreguntaCancelacion}>
                            Cancelar
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};
