import { useState } from "react";
import style from "./Form.module.css";
import { useDispatch } from "react-redux";
import { postEmprendedora } from "../../redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    codigoEmprendedora: "",
    nombre: "",
    cicloAlta: "",
    otrasActividades: [],
    localidad: "",
    provincia: "",
    tel: "",
    categoria: "",
  });
  const [errors, setErrors] = useState({
    codigoEmprendedora: "",
    nombre: "",
    cicloAlta: "",
    otrasActividades: "",
    localidad: "",
    provincia: "",
    tel: "",
    categoria: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const target = event.target.name;
    if (target === "otrasActividades") {
      setForm({ ...form, otrasActividades: [value] });
    } else setForm({ ...form, [target]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Emprendedora agregada al sistema con exito");

    dispatch(postEmprendedora(form));
    setForm({
      codigoEmprendedora: "",
      nombre: "",
      cicloAlta: "",
      otrasActividades: [],
      localidad: "",
      provincia: "",
      tel: "",
      categoria: "",
    });
  };

  return (
    <div className={style.body}>
      <h1 className={style.title}>Sumar Emprendedora</h1>
      <hr className={style.separador} />
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.section}>
          <label htmlFor="codigoEmprendedora" className={style.label}>
            Codigo Emprendedora
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="codigoEmprendedora"
            value={form.codigoEmprendedora}
            className={style.input}
          ></input>
        </div>
        <div className={style.section}>
          <label htmlFor="nombre" className={style.label}>
            Nombre
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="nombre"
            value={form.nombre}
            className={style.input}
          ></input>
        </div>
        <div className={style.section}>
          <label htmlFor="cicloAlta" className={style.label}>
            Ciclo Alta
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="cicloAlta"
            value={form.cicloAlta}
            className={style.input}
          ></input>
        </div>
        <div className={style.section}>
          <label htmlFor="otrasActividades" className={style.label}>
            Otras Actividades
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="otrasActividades"
            value={form.otrasActividades}
            className={style.input}
          ></input>
        </div>
        <div className={style.section}>
          <label htmlFor="localidad" className={style.label}>
            Localidad
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="localidad"
            value={form.localidad}
            className={style.input}
          ></input>
        </div>
        <div className={style.section}>
          <label htmlFor="provincia" className={style.label}>
            Provincia
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="provincia"
            value={form.provincia}
            className={style.input}
          ></input>
        </div>
        <div className={style.section}>
          <label htmlFor="tel" className={style.label}>
            Telefono
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="tel"
            value={form.tel}
            className={style.input}
          ></input>
        </div>

        <div className={style.section}>
          <label className={style.label}>Categoria</label>
          <select
            onChange={handleChange}
            name="categoria"
            value={form.categoria}
            className={style.selector}
          >
            <option>Naranja</option>
            <option>Amarillo</option>
            <option>Verde</option>
            <option>Celeste</option>
          </select>
        </div>
        <button className={style.button} type="submit">
          SUMAR
        </button>
      </form>
    </div>
  );
};

export default Form;
