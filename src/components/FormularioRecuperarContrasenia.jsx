import React, { useState } from 'react';
import './../styles/FormularioRecuperarContrasenia.css';

export const FormularioRecuperarContrasenia = ({ InicioSesion }) => {
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    setMensaje(`El email ha sido enviado. Revíselo e ingrese el código.`);
  };

  return (
    <div className="form-container">
      <h2>Recuperar Contraseña</h2>
      <form onSubmit={manejarEnvio}>
        <div className="formulario-item">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese su correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-submit">
          Enviar
        </button>
      </form>
      {mensaje && <p className="mensaje-exito">{mensaje}</p>}

      <button type="button" className='opcion' onClick={InicioSesion}>
        REGRESAR
      </button>
    </div>
  );
};
