import { useState } from "react";
import style from "./PopUp.module.css";
import { useDispatch } from "react-redux";
import { postComentario } from "../../redux/actions";
import { validation } from "./validation";
import { AiFillCloseSquare } from "react-icons/ai";
const PopUp = ({ codigoEmprendedora, handleClose }) => {
  const [comentario, setComentario] = useState({
    codigoEmprendedora: codigoEmprendedora,
    autor: "",
    texto: "",
  });

  const [errors, setErrors] = useState({
    autor: "Debe ingresar su nombre",
    texto: "Debe ingresar un comentario",
  });
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errors.autor && !errors.texto) {
      alert("El comentario ha sido agregado con exito");
      dispatch(postComentario(comentario));
      setComentario({
        codigoEmprendedora: codigoEmprendedora,
        autor: "",
        texto: "",
      });
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const target = event.target.name;

    setComentario({ ...comentario, [target]: value });
    validation({ ...comentario, [target]: value }, errors, setErrors, target);
  };
  return (
    <div className={style.popUpBox}>
      <div className={style.box}>
        <button className={style.buttonClose} onClick={handleClose}>
          <AiFillCloseSquare />
        </button>
        <h1 className={style.subTitle}>Agregar comentario</h1>
        <hr className={style.separador} />
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.section}>
            <label htmlFor="autor" className={style.label}>
              Autor
            </label>
            <input
              name="autor"
              value={comentario.autor}
              onChange={handleChange}
              type="text"
              className={style.input}
            ></input>
            {errors.autor ? (
              <span className={style.msgError}>{errors.autor}</span>
            ) : (
              <span className={style.confirmation}>✔</span>
            )}
          </div>
          <div className={style.section}>
            <label htmlFor="texto" className={style.label}>
              Texto
            </label>
            <input
              name="texto"
              value={comentario.texto}
              onChange={handleChange}
              type="text"
              className={style.input}
            ></input>
            {errors.texto ? (
              <span className={style.msgError}>{errors.texto}</span>
            ) : (
              <span className={style.confirmation}>✔</span>
            )}
          </div>
          <button type="submit" className={style.button}>
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
