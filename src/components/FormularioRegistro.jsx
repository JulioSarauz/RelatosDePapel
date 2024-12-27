import React, { useState } from "react";
import './../styles/FormularioRegistro.css';

export const FormularioRegistro = ({ InicioSesion }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmarPassword) {
      setMensaje("Las contraseñas no coinciden");
    } else {
      setMensaje("Registro exitoso. Por favor, verifica tu correo.");
      // Aquí podrías agregar la lógica para enviar los datos al servidor
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Registro</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formulario-item">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingresa tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formulario-item">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            placeholder="Ingresa tu apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formulario-item">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formulario-item">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Crea una contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formulario-item">
          <label htmlFor="confirmarPassword">Confirmar</label>
          <input
            type="password"
            id="confirmarPassword"
            name="confirmarPassword"
            placeholder="Confirma tu contraseña"
            value={formData.confirmarPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-submit">Registrarse</button>
      </form>
      {mensaje && <p className="message">{mensaje}</p>}
      <button className="opcion" onClick={InicioSesion}>
        Volver al inicio de sesión
      </button>
    </div>
  );
};
