export const validation = (form, errors, setErrors, target) => {
  const regexCiclo = /^(?=[0-9]*$)(?:.{6})$/;
  if (target === "ciclo") {
    if (!regexCiclo.test(form.ciclo)) {
      setErrors({ ...errors, ciclo: "El ciclo es inválido" });
    } else {
      setErrors({ ...errors, ciclo: "" });
    }
  }
};
