import style from "./Edit.module.css";
const Edit = ({ handleClose }) => {
  return (
    <div className={style.popUpBox}>
      <div className={style.box}>
        <button className={style.buttonClose} onClick={handleClose}>
          x
        </button>
        <h1 className={style.subTitle}>Editar</h1>
        <hr className={style.separador} />
        <form className={style.form}>
          <div className={style.section}>
            <label className={style.label}>Actividades Extra</label>
            <input className={style.input}></input>
          </div>
          <div className={style.section}>
            <label className={style.label}>Categoria</label>
            <select className={style.select}>
              <option>Naranja</option>
              <option>Amarillo</option>
              <option>Verde</option>
              <option>Celeste</option>
            </select>
          </div>
          <button className={style.button}>Confirmar</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
