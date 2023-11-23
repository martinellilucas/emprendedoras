export const validation = (form, errors, setErrors, target) => {
  const regexTel =
    /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
  const regexCodigo = /^(?=[0-9]*$)(?:.{4,6})$/;
  const regexAlta = /^(?=[0-9]*$)(?:.{6})$/;

  if (target === "codigoEmprendedora") {
    if (!regexCodigo.test(form.codigoEmprendedora)) {
      setErrors({
        ...errors,
        codigoEmprendedora: "El código ingresado es incorrecto",
      });
    } else {
      setErrors({ ...errors, codigoEmprendedora: "" });
    }
  }
  if (target === "nombre") {
    if (!form.nombre) {
      setErrors({ ...errors, nombre: "Debe ingresar un nombre" });
    } else {
      setErrors({ ...errors, nombre: "" });
    }
  }
  if (target === "cicloAlta") {
    if (!regexAlta.test(form.cicloAlta)) {
      setErrors({ ...errors, cicloAlta: "El ciclo de alta es inválido" });
    } else {
      setErrors({ ...errors, cicloAlta: "" });
    }
  }
  if (target === "localidad") {
    if (!form.localidad) {
      setErrors({ ...errors, localidad: "Debe ingresar una localidad" });
    } else {
      setErrors({ ...errors, localidad: "" });
    }
  }
  if (target === "provincia") {
    if (!form.provincia) {
      setErrors({ ...errors, provincia: "Debe ingresar una provincia" });
    } else {
      setErrors({ ...errors, provincia: "" });
    }
  }
  if (target === "tel") {
    if (!regexTel.test(form.tel)) {
      setErrors({
        ...errors,
        tel: "Número de teléfono inválido",
      });
    } else {
      setErrors({ ...errors, tel: "" });
    }
  }
};
