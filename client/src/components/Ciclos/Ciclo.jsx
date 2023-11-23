import style from "../EditEmprendedora/Edit.module.css";
const Ciclo = ({ handleClose }) => {
  return (
    <div className={style.popUpBox}>
      <div className={style.box}>
        <button className={style.buttonClose} onClick={handleClose}>
          x
        </button>
        <h1 className={style.subTitle}>Agregar Ciclo</h1>
        <hr className={style.separador} />
        <form className={style.form}>
          <div className={style.section}>
            <label className={style.label}>Ciclo</label>
            <input className={style.input}></input>
          </div>
          <div className={style.section}>
            <label className={style.label}>Puntos</label>
            <input></input>
          </div>
          <button className={style.button}>Confirmar</button>
        </form>
      </div>
    </div>
  );
};

export default Ciclo;
