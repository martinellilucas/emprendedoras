import style from "./PopUp.module.css";
const PopUp = ({ handleClose }) => {
  return (
    <div className={style.popUpBox}>
      <div className={style.box}>
        <button className={style.buttonClose} onClick={handleClose}>
          x
        </button>
        <h1 className={style.subTitle}>Agregar comentario</h1>
        <hr className={style.separador} />
        <form className={style.form}>
          <div className={style.section}>
            <label className={style.label}>Autor</label>
            <input className={style.input}></input>
          </div>
          <div className={style.section}>
            <label className={style.label}>Texto</label>
            <input className={style.input}></input>
          </div>
          <button className={style.button}>Confirmar</button>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
