export const validation = (form, errors, setErrors, target) => {
  if (target === "autor") {
    if (!form.autor) {
      setErrors({ ...errors, autor: "Debe ingresar su nombre" });
    } else {
      setErrors({ ...errors, autor: "" });
    }
  }
  if (target === "texto") {
    if (!form.texto) {
      setErrors({ ...errors, texto: "Debe ingresar un comentario" });
    } else {
      setErrors({ ...errors, texto: "" });
    }
  }
};
