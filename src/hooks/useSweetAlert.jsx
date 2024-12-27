import Swal from "sweetalert2";

export const useSweetAlert = () => {
  const mostrarExito = (titulo, texto) => {
    Swal.fire({
      icon: "success",
      title: titulo,
      text: texto,
      confirmButtonText: "Aceptar",
    });
  };

  const mostrarError = (titulo, texto) => {
    Swal.fire({
      icon: "error",
      title: titulo,
      text: texto,
      confirmButtonText: "Aceptar",
    });
  };

  const mostrarAdvertencia = (titulo, texto) => {
    Swal.fire({
      icon: "warning",
      title: titulo,
      text: texto,
      confirmButtonText: "Aceptar",
    });
  };

  const mostrarPregunta = async (titulo, texto) => {
    const resultado = await Swal.fire({
      icon: "question",
      title: titulo,
      text: texto,
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    });
    return resultado.isConfirmed;
  };

  return {
    mostrarExito,
    mostrarError,
    mostrarAdvertencia,
    mostrarPregunta,
  };
};
