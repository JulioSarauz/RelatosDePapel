import React, { createContext, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const InactividadContext = createContext();

export const InactividadProvider = ({ children }) => {
  const navigate = useNavigate();
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (window.location.pathname !== "/login") {
        navigate("/login");
      }
    }, 5000);
  };

  useEffect(() => {
    const handleActivity = () => resetTimer();
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("click", handleActivity);
    window.addEventListener("keydown", handleActivity);
    resetTimer();
    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("click", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [navigate]);

  return <InactividadContext.Provider value={{ resetTimer }}>{children}</InactividadContext.Provider>;
};

export const useInactividad = () => {
  const context = useContext(InactividadContext);
  if (!context) {
    throw new Error("useInactividad pertenece a InactividadProvider, revisa la importacion");
  }
  return context;
};