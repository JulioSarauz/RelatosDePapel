import React, { createContext, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const InactividadContext = createContext();

export const InactividadProvider = ({ children }) => {
  const navigate = useNavigate();
  const timerRef = useRef(null);
  const TIMEOUT = 5000;

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (window.location.pathname !== "/login") {
        navigate("/login");
        Swal.fire({
          title: "Sesión Caducada",
          text: "Su sesión ha caducado. Por favor, inicie sesión nuevamente.",
          icon: "warning",
          confirmButtonText: "Aceptar",
        });
      }
    }, TIMEOUT);
  };

  useEffect(() => {
    const handleActivity = () => resetTimer();
    const events = [
      "mousemove",
      "click",
      "keydown",
      "scroll",
      "touchstart",
      "wheel",
    ];

    events.forEach((event) => window.addEventListener(event, handleActivity));
    resetTimer();
    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, handleActivity)
      );
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [navigate]);
  return (
    <InactividadContext.Provider value={{ resetTimer }}>
      {children}
    </InactividadContext.Provider>
  );
};

export const useInactividad = () => {
  const context = useContext(InactividadContext);
  if (!context) {
    throw new Error(
      "useInactividad pertenece a InactividadProvider, revisa la importacion"
    );
  }
  return context;
};
