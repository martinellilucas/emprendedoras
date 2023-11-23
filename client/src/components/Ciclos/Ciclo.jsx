import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./Ciclo.module.css";
import { postCiclo } from "../../redux/actions";
import { validation } from "./validation";
import { AiFillCloseSquare } from "react-icons/ai";
const Ciclo = ({ codigoEmprendedora, handleClose }) => {
  const dispatch = useDispatch();

  const [ciclo, setCiclo] = useState({
    ciclo: "",
    puntos: "0",
    codigoEmprendedora: codigoEmprendedora,
  });
  const [errors, setErrors] = useState({
    ciclo: "Debe ingresar un ciclo válido",
  });
  const handleChange = (event) => {
    const value = event.target.value;
    const target = event.target.name;

    setCiclo({
      ...ciclo,
      [target]: value,
    });
    validation({ ...ciclo, [target]: value }, errors, setErrors, target);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errors.ciclo) {
      alert("Ciclo agregado con exito");
      dispatch(postCiclo(ciclo));
      setCiclo({
        ciclo: "",
        puntos: "",
        codigoEmprendedora: codigoEmprendedora,
      });
    }
  };
  return (
    <div className={style.popUpBox}>
      <div className={style.box}>
        <button className={style.buttonClose} onClick={handleClose}>
          <AiFillCloseSquare />
        </button>
        <h1 className={style.subTitle}>Agregar Ciclo</h1>
        <hr className={style.separador} />
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.section}>
            <label htmlFor="ciclo" className={style.label}>
              Ciclo
            </label>
            <input
              type="text"
              name="ciclo"
              value={ciclo.ciclo}
              className={style.input}
              onChange={handleChange}
            ></input>
            {errors.ciclo ? (
              <span className={style.msgError}>{errors.ciclo}</span>
            ) : (
              <span className={style.confirmation}>✔</span>
            )}
          </div>
          <div className={style.section}>
            <label htmlFor="puntos" className={style.label}>
              Puntos
            </label>
            <input
              type="text"
              name="puntos"
              value={ciclo.puntos}
              onChange={handleChange}
            ></input>
          </div>
          <button type="submit" className={style.button}>
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Ciclo;
