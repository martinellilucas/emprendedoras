import { useState } from "react";
import style from "./Edit.module.css";
import { useDispatch } from "react-redux";
import { putEmprendedora } from "../../redux/actions";
import { AiFillCloseSquare } from "react-icons/ai";
const Edit = ({ codigoEmprendedora, categoria, handleClose }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    otrasActividades: [],
    categoria: categoria,
    codigoEmprendedora: codigoEmprendedora,
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
    alert("La emprendedora ha sido editada con exito");
    dispatch(putEmprendedora(codigoEmprendedora, form));
    setForm({
      otrasActividades: [],
      categoria: "",
    });
  };
  return (
    <div className={style.popUpBox}>
      <div className={style.box}>
        <button className={style.buttonClose} onClick={handleClose}>
          <AiFillCloseSquare />
        </button>
        <h1 className={style.subTitle}>Editar</h1>
        <hr className={style.separador} />
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.section}>
            <label htmlFor="otrasActividades" className={style.label}>
              Actividades Extra
            </label>
            <input
              name="otrasActividades"
              value={form.otrasActividades}
              type="text"
              onChange={handleChange}
              className={style.input}
            ></input>
          </div>
          <div className={style.section}>
            <label className={style.label}>Categoria</label>
            <select
              name="categoria"
              value={form.categoria}
              type="text"
              onChange={handleChange}
              className={style.select}
            >
              <option>Naranja</option>
              <option>Amarillo</option>
              <option>Verde</option>
              <option>Celeste</option>
            </select>
          </div>
          <button type="submit" className={style.button}>
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
