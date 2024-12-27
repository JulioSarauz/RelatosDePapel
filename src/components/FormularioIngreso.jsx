import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/FormularioIngreso.css';
import { useSweetAlert } from '../hooks/useSweetAlert';

export const FormularioIngreso = ({ OlvideContrasena, Registrar }) => {
  const { mostrarError } = useSweetAlert();


  const mensajeErrorIngreso = async () => {
    mostrarError("Error", "Usuario o contraseña incorrecto");
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (formData.email === 'admin@example.com' && formData.password === '123') {
      console.log("ingreso exitoso");
      navigate('/principal');
    }
    else {
      mensajeErrorIngreso();
    }
  };

  return (
    <div className="form-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={manejarEnvio}>
        <div className="formulario-item">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu correo"
            value={formData.email}
            onChange={manejarCambio}
            required
          />
        </div>
        <div className="formulario-item">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            value={formData.password}
            onChange={manejarCambio}
            required
          />
        </div>
        <button type="submit" className="btn-submit">
          Ingresar
        </button>
      </form>
      <button type="button" className="opcion" onClick={OlvideContrasena}>
        ¿Olvidaste tu contraseña?
      </button>
      <button type="button" className="opcion" onClick={Registrar}>
        No tienes cuenta, registrate
      </button>
    </div>
  );
};
